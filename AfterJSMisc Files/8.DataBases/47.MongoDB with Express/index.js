import express from "express";
import path   from "path";
import {dirname}   from "path";
import { fileURLToPath } from "url";
import mongoose from 'mongoose';
import Chat from './models/chats.js'
import customError from "./customError.js";
import { log } from "console";

const app = express();
const port = 8080;

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

app.use(express.urlencoded({extended: true}));
// app.use(express.static('public'));
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));
// app.use(express.static('public'));  



app.listen(port , ()=>{
    console.log(`erpress is listening on ${port} `);
    
})

// .then(res=>{console.log("find response is",res);
// })
// .catch(err=>console.log(err)
// )

app.get("/", (req,res)=>{
    res.send("Home route")
})

app.get("/chat/new",(req,res)=>{
    // res.send("add recieved ");
    res.render("newChatForm")
})



app.post("/newChat",async(req,res,next)=>{
    try {
            console.log(req.body);
            let  {from , to , message  } = req.body
            let newChat = new Chat ({
                from : from,
                to : to ,
                message : message ,
                created_on : new Date()
            })

            newChat.save()
                .then( res=> {
                    console.log("created")
                    console.log("New chat ", newChat);
                    res.redirect("/chats");
                }
                )          
                .catch((err)=>{
                    console.log(err);
                    next(err);
                }
            )
                
            // await newChat.save();
            

            //When thennable comes in to the picture then    await async is not necessary ?

    } catch (error) {
        next(error)
    }
    
    
})

// Index Route 
app.get("/chats",async (req,res)=>{
    let chatsArray = await Chat.find();
        
    console.log("chatsArray is",chatsArray);  
    res.render("index",{chatsArray})
})
function asyncWrap(fnc){
    return function(req,res,next){
        fnc(req,res,next).catch((error)=> next(error));
    }
}

//New 
app.get(
    "/chat/:id",
    asyncWrap(
               async(req,res,next)=>
                     {
                        let id = req.params.id;
                        let editingChat = await Chat.findById(id);
                        console.log("editing chat JSON ",editingChat);

                        if(!editingChat)
                            {
                            // throw new customError(500,"chat not found");
                            next(new customError(500,"chat not found")) ;
                            }
                        else{
                            res.render("editChat",{editingChat})
                             } 
                    }   
                )
        );



app.get("/edit/chat/:id",async (req,res)=>{
    let id = req.params.id;
    let editingChat = await Chat.findById(id);
    console.log("editing chat JSON ",editingChat);
    
    res.render("editChat",{editingChat})

})
app.get("/delete/chat/:id",async (req,res)=>{
    let id = req.params.id;
    // let deletedChat = await Chat.deleteOne({_id : id});
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log("deleted chat JSON",deletedChat);
    
    res.redirect("/chats");

})

app.post("/edit/chat/:id",async (req,res)=>{
    let id = req.params.id;
    let editingChat = await Chat.findById(id);

    // let msg = req.body.message;
    // Chat.findByIdAndUpdate(id,{message:msg} , {runValidators: true ,  new: true} )

    Chat.updateOne({_id : id} , {$set : {message : msg}})
    .then(()=>{
        res.redirect("/chats");

    })
    .catch(error => {
        console.error("Error updating chat:", error);
        res.status(500).send("Error updating chat");
    });
    

})

app.use((err,req,res,next)=>{
    console.log("The error type is ", err.name);
    next(err);
    
})

app.use((err,req,res,next)=>{
    let {status = 500 , message = "Some error "} = err; 
    res.status(status).send(message);
    
})

main()
    .then(()=>{console.log("connection with DB successfull");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakeWhatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}