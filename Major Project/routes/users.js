import express from 'express';
import Listing from  '../models/listings.js'
import Review from '../models/reviews.js';
import users from '../models/users.js';
import customError from '../utils/customError.js';
import wrapAsync from '../utils/wrapAsyncError.js';
import schemaValidations from '../schema.js';
import User from '../models/users.js';
import passport from 'passport';
import passportLocalMongoose from 'passport-local-mongoose'
import isLoggedIn from '../middleware.js';

const  router = express.Router();
const {listingSchema , reviewSchema} = schemaValidations;

router.get("/signUp" ,(req,res) =>{
    let sessionUsername =  req.session.username ;
    let sessionEmail =  req.session.email;
    let sessionPassword =  req.session.password;

    req.session.username = '';
    req.session.email = '';
    req.session.password = '';
    res.render("users/signUp.ejs",{sessionEmail,sessionPassword,sessionUsername})
}  )


router.get("/login" ,(req,res) =>{
    let sessionUsername =  req.session.username ;
    let sessionPassword =  req.session.password;

    req.session.username = '';
    req.session.password = '';
    console.log(req.session);
    if(req.session.messages && req.session.messages[0].length >0 ){
        console.log("into the auth message ?");
        
        let authErrorMessage = req.session.messages[0];
        console.log("aytherrorMsh",authErrorMessage);
        

        req.flash("authError",authErrorMessage);


    }
    let authError = req.flash("authError")
    res.render("users/login.ejs",{sessionUsername,sessionPassword , authError});
}  )

router.get("/logout", (req,res,next)=>{
    req.logOut((err)=>{
        if(err){
            return next(err);
        }
        req.flash("listingSuccess", "logged Out Successfully");
        res.redirect("/listings");
    })
 
})

router.post("/signUp" ,wrapAsync(async (req,res) =>{
    try
    {
        let {username , email , password } = req.body;
        let sessionUsername =  req.session.username = username;
        let sessionEmail =  req.session.email = email;
        let sessionPassword =  req.session.password = password;
     
        let newUser = new User({
         email : email,
         username : username
        })
     
         let result = await User.register(newUser,password);
         console.log(result);
         
         req.login(result,(err)=>{
            if(err){
                return next(err);

            }
            req.flash("listingSuccess","You are registered succesfully ");
            res.redirect("/listings");
         })

        
    } catch (err){
        req.flash("listingError",err.message);
        res.redirect("/signUp");
    }
}  ));

router.post("/login",passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),wrapAsync(async (req,res)=>{
    req.flash("listingSuccess",`Welcome ${req.user.username}`);
    res.redirect("/listings");
}))

export default router;