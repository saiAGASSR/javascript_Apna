import { log } from "console";
import express from "express";
import path   from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from 'uuid';
import  http_override from 'method-override';


const app = express();
const port = 8080;
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"public")));
app.use(http_override('_method'))
// app.set(express.static(path.join(__dirname,"public")));1


// Since we do not have DB for now lets create data manually 
// not const  it  let 
let posts = [
                {
                    id       : uuidv4(),
                    username : "sai",
                    content:  "I am an Engineer at FAANG"
                }   ,
                {
                    id       : uuidv4(),
                    username : "raj",
                    content:  "I am an Engineer at NITW"
                }  ,
                {
                    id       : uuidv4(),
                    username : "anji",
                    content:  "I am an Agent at Shriram"
                }     ,
                {
                    id       : uuidv4(),
                    username : "suma",
                    content:  "I am an Development Officer at FAANG"
                }           
            ]


app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts})
});

app.get("/posts/addPost",(req,res)=>{
    res.render("form.ejs")
})

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    console.log(id);
    // res.send(`req working for ${id}`)
    // using find function in arrays 
    // same like for loop iterates through each item 
    // Here it returns the item which has found
    let post = posts.find((post) =>   id === post.id )
    console.log(post);
    if(!post){
        res.send("userid Not fount")
    }
    // res.send(`the post details are ${post}`)
    res.render("singlePost",{post})
    
})


// app.post("/posts",(req,res)=>{
//     console.log(req.body);
//     let newData = req.body;
//     posts = [...posts , newData]

//     res.render("index.ejs",{posts})
// })

app.post("/posts",(req,res)=>{
    console.log(req.body);

    let id = uuidv4();
    let { username , content  } = req.body;

    let newPostDetails = {username : username , content : content , id : id};

    console.log(newPostDetails);
    

    
    posts.push(newPostDetails)

    console.log(posts);
    
    res.redirect("/posts")
    // https://expressjs.com/en/5x/api.html#res.redirect
    // byDefault get Request 
})

app.get("/posts/editPost/:id",(req,res)=>{
    let id = req.params.id;
    console.log(id);
    console.log(req.body);   
    let post = posts.find((p) => { return id === p.id});

    res.render("edit",{id ,post}) 
})

app.delete("/posts/deletePost/:id",(req,res)=>{
    let id = req.params.id;
    console.log(id);
    console.log(req.body);  
    posts = posts.filter((p)=> { return p.id !== id})
    res.redirect("/posts");
})

app.patch("/posts/:id" , (req,res)=>{
    console.log("in patch");
    
    console.log(req.body);
    
    console.log(req.params.id);

    let id = req.params.id;

    let post = posts.find((p) => { return id === p.id});
    post.content = req.body.content;

    res.redirect("/posts");
    
    
})



app.listen(port , ()=>{
    console.log(`erpress is listening on ${port} `);
    
})



