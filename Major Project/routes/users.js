import express from 'express';
import wrapAsync from '../utils/wrapAsyncError.js';
import passport from 'passport';
import middlewares from '../middleware.js';
import usersController from "../controller/users.js"

let {getSignUp ,  getLogin  , getLogOut , postSignUp , postLogin } = usersController;

const {saveRedirectURL } = middlewares;

const  router = express.Router();

router.get("/signUp" , wrapAsync(getSignUp))

router.get("/login" ,  wrapAsync(getLogin) )

router.get("/logout", wrapAsync(getLogOut))

router.post("/signUp" ,wrapAsync(postSignUp));

router.post("/login",saveRedirectURL,passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),wrapAsync(postLogin))

export default router;