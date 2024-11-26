import express from 'express';
import Listing from  '../models/listings.js'
import customError from '../utils/customError.js';
import wrapAsync from '../utils/wrapAsyncError.js';
import middlewares from '../middleware.js';

const {listingValidation , isLoggedIn, isOwner } = middlewares;


const  router = express.Router();


router.get("/", wrapAsync(async (req,res,next)=>{

    let allListings = await Listing.find({})
    console.log("req reciedved");
    
    res.render("./listings/allListings",{allListings})

}));

router.get("/new",isLoggedIn, wrapAsync(async(req,res)=>{
res.render("./listings/addListForm")
}));

router.get("/:id", wrapAsync(async (req,res)=>{
let  id     = req.params.id ;
console.log(id);

let  singleListing  =  await Listing.findById(id).populate("reviews").populate("owner");
console.log(singleListing);
if(!singleListing){
    req.flash("listingError","The listing you are searching is deleted or does not exists");
    res.redirect("/listings");
}

res.render('listings/singleListing' , {singleListing})
}));



// Validating  listing form using joi 
router.post("/",isLoggedIn, isOwner, listingValidation ,wrapAsync(async (req, res, next) => {
    console.log("new post request ");
    console.log(req.body);
    // Create a new listing object
    let addList = new Listing({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        country: req.body.country,
        location: req.body.location
    });
    addList.owner = req.user._id;
    await addList.save();
    req.flash("listingSuccess","new listing added successfully")
    res.redirect("/listings"); // Redirect after successful save

    console.log("added");
}));



router.get("/edit/:id",  isLoggedIn  ,isOwner , wrapAsync(async(req,res)=>{
console.log(req.params.id);
let id = req.params.id;
let editListing = await Listing.findById(id);
if(!editListing){
    req.flash("listingError","The listing you are searching is deleted or does not exists");
    res.redirect("/listings");
}
res.render("./listings/editListForm",{editListing})

}));

router.put("/edit/:id",isLoggedIn,isOwner,wrapAsync(async(req,res)=>{
let id = req.params.id;
if(!req.body.listing){
    throw new customError(400,"please provide information")
} 
let updateJSONBody = req.body.listing;
let editListing = await Listing.findByIdAndUpdate(id,{...updateJSONBody})

console.log('id in put is ',id);
console.log('body in put is ',updateJSONBody);
req.flash("listingSuccess","new listing edited successfully")
res.redirect(`/listings/${id}`)

}));

router.delete("/delete/:id", isLoggedIn , isOwner ,wrapAsync(async(req,res)=>{
let id = req.params.id;
await Listing.findByIdAndDelete(id);
req.flash("listingSuccess","listing deleted successfully")
res.redirect("/listings");
}));

router.delete("/" , isLoggedIn, wrapAsync(async(req,res)=>{
    await Listing.deleteMany({});
    req.flash("listingSuccess","all listing deleted successfully")
    res.redirect("/listings");
}));


export default router;


