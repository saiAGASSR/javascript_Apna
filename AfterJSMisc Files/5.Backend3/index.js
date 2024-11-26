import express from "express";
import path from "path";
import { fileURLToPath } from 'url';




const port = 8080;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import fs from 'fs'; // Import fs for reading JSON files
import instaData from "./data.json" assert { type: "json" };



// const instaData = require("./data.json")
// const instaData = JSON.parse(fs.readFileSync("./data.json", "utf-8"));




// const path = require("path");




// we will  explicitly import or require the express package but not ejs because implicitly express will requirwe or import ejs
// view -> templates
// template engine - > ejs or handle bar  

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{

    // res.send("this is route");
    // res.render("home.ejs");
    let num = Math.floor(Math.random()*6) + 1;
    // console.log(num);
    
    // res.render("home",{diceValue : num});
    res.render("home",{num});

})

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    console.log(username);

    const followers = ["tharun", "Mani" , "Hruthik", "pavani" , "Rajesh"]
    
    res.render("instagram.ejs", {username ,followers} )
})

app.get("/myInstagram/:username",(req,res)=>{
    let {username} = req.params;
    if(username === "cats" ){
        let Data = instaData["cats"]
        console.log(Data);
        res.render("myInstagram", {username , Data})
    }else
    if(username === "dogs"){

        let Data = instaData["dogs"]
        console.log(Data);
        res.render("myInstagram", {username , Data})
    }else
    {
        res.send("No username found")

    }
})

app.get("/apnaInstagram/:username",(req , res) => {

    let {username} = req.params;
    // const instaData = require("./data.json");
    let Data = instaData[username];
    res.render("apnaInstagram",{Data})


})

app.listen(port , (req,res)=>{
    console.log(`listening on ${port}`);    
})