import { error } from 'console';
import express from 'express';
import customError from './customError.js';

const app = express();

const project_Token = 12345;
const project_admin = "sai";

// https://expressjs.com/en/guide/error-handling.html


const checkToken =  (req,res,next)=> {
    // let token = req.query.token;
    let {token} = req.query;
    console.log(token);
    
    if (token === project_Token.toString()){
        console.log("access");
        
        next();
    }
    else{
        // res.send("not authorized")
        throw new customError(401,"not authorized")
    }

}

const checkAdmin =  (req,res,next)=> {
    // let token = req.query.token;
    let {admin} = req.query;
    console.log(admin);
    
    if (admin === project_admin){
        console.log("access");
        
        next();
    }
    else{
        // res.send("not authorized")
        throw new customError(403,"you are not admin ")
    }

}


app.use((req,res,next)=>{

    req.time = new Date(Date.now()).toString();   // manipulating req object    assigning the new property to req object   to time on when it has occured 
    console.log(req.method , req.hostname , req.path , req.time) ;
    // https://expressjs.com/en/5x/api.html#req
    next();
})

app.use("/secondHome",checkToken,(req,res,next)=>{
    console.log("I am only for  secondHome ");
    // abcd = abcd;
    // https://expressjs.com/en/guide/error-handling.html
    
    next();
})

app.use("/admin",checkAdmin,(req,res,next)=>{
    console.log("I am only for  admin ");
    // abcd = abcd;
    // https://expressjs.com/en/guide/error-handling.html
    
    next();
})

app.get("/",(req,res)=>{
    res.send("I am home ")
})
app.get("/error",(req,res)=>{
    abce= abce

    res.send("I am home ");
})

app.get("/admin",(req,res)=>{

    res.send("I am admin sai ");
})

app.get("/secondHome",(req,res)=>{
    res.send("I am second home ")
})

app.use((err,req,res,next)=>{

    console.log(err);
    let {status = 500 , message = "error"} = err;
    // let {status , message } = err;
    // next();
    // next(err);
    res.status(status).send(message);
    

})

app.use((req,res,next)=>{
    res.status(404).send("page not found ");
})

app.listen(8080,()=>{
    console.log("app is listening ");
})