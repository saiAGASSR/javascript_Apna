// Library 
// Frameworks
// https://www.npmjs.com/package/express

// https://expressjs.com/
// https://expressjs.com/en/starter/hello-world.html
// const express = require('express')  -> its a function it returns and we are storing in a variable {By convention we are giving the variable name app}
// const app = express()

// it returns an object 
//  app is an object 

import express from "express";
// const express = require('express');
const app = express();
console.log("Hiiiii");

// console.log(app);

// Ports are logical endpoints of a network connection that is used to exchange information between a web server and web client 
// connecting points like physically pendrive   usb etc ports 
// 

// app.listen is a method which takes two parameters  port and function 
let port  = 3000; //8080
app.listen(port , ()=> {
    console.log(`app is listening on ${port}`);
    
})

// app.use willl process every get post put delete requests 
// 

// app.use((req,res)=>{
//     // console.log(req);
    
//     console.log("requests are incoming ");
//     // res.send("this is a response ");
//     // res.send(['sai' , '25']);
//     // res.send({name:"apple ", color : "red"});
//     let htmlcode = "<h1>Fruits</h1> <ul> <li>apple</li>  <li>banana</li> <li>Orange</li> </ul>";
//     res.send(htmlcode)
// })

// https://github.com/hoppscotch/hoppscotch/discussions/2051


// response 
// request (req)  response (res)
// requests that comes from client is in the text  format 
// expresss willl parse that 
// 1 .Express will listen on port 
// 2. to parse request  http text and convert that into object 
// all http request are text based because anyone who made server on different languages can use them 

// https://expressjs.com/en/4x/api.html
// https://expressjs.com/en/4x/api.html#res.send
// Express will convert this object to JSON representation

// https://expressjs.com/en/4x/api.html#app.get

app.get("/fruits",(req,res) =>{
    let htmlcode = "<h1>Fruits</h1> <ul> <li>apple</li>  <li>banana</li> <li>Orange</li> </ul>";

    res.send(htmlcode);
})

// we cannot send different  or 2 or more that 2 responses 
app.get("/",(req,res) =>{

    res.send("This route is Home now with nodemon");
})

app.get("/Home",(req,res) =>{

    res.send("This route is Home");
})

app.get("/Fruits",(req,res) =>{

    res.send("This route is Fruits");
})
app.get("*",(req,res) =>{

    res.send("This route is STAR   Or This path does not exists");
})
app.post("/",(req,res) =>{

    res.send("this is not home but post Request");
})

// NodeMon
// To automatically restart the server with code changes 
// https://www.npmjs.com/package/nodemon
// $ npm install -g nodemon
// nodemon filename.js
