import express from 'express';
import mongoose from 'mongoose';


const app = express();

app.listen(8080, ()=>{
    console.log(`app is listening on port number 8080`);
    
})

const mongo_url = "mongodb://127.0.0.1:27017/wanderlust"

async function main (){
    await  mongoose.connect(mongo_url)
}

main()
    .then(()=>{
        console.log("connected to db successfully ");
        
    })
    .catch((err)=>{
        console.log(err);
        
    })

app.get("/",(req,res)=>{
    res.send("working ")
})

// <!-- shift  alt down  to duplicate the line or lines 
// shift  alt down  -->

// Alt and place  click curson at multiple areas to 