//          / or /home  -> indicates home 

// pathparameters
// lets take 
// https://www.instagram.com/apple
// https://www.instagram.com/samsung
// https://www.instagram.com/sai_teja_s1
// so we cannot write crores of routes here with usernames
// we will send variable value along with the path     called path parameters 
// 

import express from "express";
const app = express();
let port  = 3000; //8080
app.listen(port , ()=> {
    console.log(`app is listening on ${port}`);
    
})

// instagram username routes 
// https://expressjs.com/en/guide/routing.html#route-parameters
// request params  stores as object 

// app.get("/:username",(req,res)=>{
//     console.log(req.params);
    
//     let greet = `Welcome ${req.params.username}`;
//     res.send(greet)
// })

app.get("/:username/:id",(req,res)=>{
    console.log(req.params);
    let {username , id } = req.params;
    let greet = `<h1>Hi  @<B>${username}</b> your id is <b>${id}</b> </h1>`
    res.send(greet)
})
// http://localhost:3000/sai%20Teja/1223
// Hi @sai Teja your id is 1223 

// instagram wil send total template with html 

// Query Strings 
app.get("/search",(req,res) => {
    console.log(req.query);
    let {query}  = req.query;
    if(!query)(res.send("<h1>Nothing searched </h1>"))
    
    res.send(`<h1>You searched for :${query}</h1>`)
} )
// http://localhost:3000/search?name=sai
// { name: 'sai' }
// http://localhost:3000/search?name=sai&age=25
// { name: 'sai', age: '25' }
