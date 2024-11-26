import express from "express";
import path   from "path";
import {dirname}   from "path";
import { fileURLToPath } from "url";


const app = express();
const port = 8080;

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

app.use(express.urlencoded({extended: true}));



app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")))


app.listen(port , ()=>{
    console.log(`erpress is listening on ${port} `);
    
})