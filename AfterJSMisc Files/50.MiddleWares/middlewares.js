import { error } from 'console';
import express from 'express';

const app = express();

const project_Token = 12345;

// app.use((req,res,next)=>{
//     // let token = req.query.token;
//     let {token} = req.query;
//     console.log(token);
    
//     if (token === project_Token.toString()){
//         console.log("access");
        
//         next();
//     }
//     else{
//         res.send("not authorized")
//     }

// })

// Multiple middlewares

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
        throw new Error("not authorized")
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

app.get("/",(req,res)=>{
    res.send("I am home ")
})

app.get("/secondHome",(req,res)=>{
    res.send("I am second home ")
})

app.use((req,res,next)=>{
    res.status(404).send("page not found ")
    
})

app.listen(8080,()=>{
    console.log("app is listening ");
})