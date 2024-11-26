import { faker } from '@faker-js/faker';
import mysql from 'mysql2/promise';
import express from "express";
import path   from "path";
import {dirname}   from "path";
import { fileURLToPath } from "url";
import  http_override from 'method-override';
import { v4 as uuidv4 } from 'uuid';
import { log } from 'console';

// https://marketplace.visualstudio.com/items?itemName=mcoder.console-log-js#:~:text=Press%20Cmd%2BShift%2BD%20%3D,statements%20in%20the%20current%20file.



const app = express();
const port = 8080;

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

app.use(express.urlencoded({extended: true}));   // to parse the form data



app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")))
app.use(http_override('_method'))



app.listen(port , ()=>{
    // console.log(`erpress is listening on ${port} `);
    
})



// https://sidorares.github.io/node-mysql2/docs/documentation
// https://sidorares.github.io/node-mysql2/docs
// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password:'pass@123'
});


// let query = 'DESC tableinTest'
let getDataQuery = 'SELECT * FROM test.user'
let  createRandomUser = () =>  {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password()
  ];
}



let result = [];



app.get("/Home",async (req,res)=>{
  // console.log("HIIIIIIIII");
  // let result = [];

try{
  // let [result] =  await connection.query(query,[users]);
  [result] =  await connection.query(getDataQuery);
  // console.log("The result is ................",result);
} catch(err){
  // console.log("error occured the error is ",err);
  
}
  
  // console.log("in Home.........",result);
  
  res.render("userPage",{result})
});

app.get("/user/addMoreUsers",async (req,res)=>{

  let query = 'Insert into user (id,username,email,password) VALUES ?'
  let users =[];
  for(let i=0;i<=4;i++){
    // console.log(i)
    

  let newuserdata  = createRandomUser();  
  users.push(newuserdata);
  };

  try{
    let [addedUsers] =  await connection.query(query,[users]);
    // [result] =  await connection.query(getDataQuery);
    // console.log("The result is ................",result);
  } catch(err){
    console.log("error occured the error is ",err);
    
  }

  console.log("added");
  
  res.redirect("/Home");

})

app.get("/users/:id",(req,res)=>{
  let {id} = req.params;
  let user = result.find((user)=>  id === user.id);
  if (!user){
    res.send("user not found ");
  }
  res.render("singleUser", {user});
})


app.get("/user/edit/:id",(req,res)=>{
  let {id} = req.params;
  // let {id} = req.params;
  let user = result.find((user)=>  id === user.id);
  if (!user){
    res.send("user not found ");
  }
  // let user = result.find((user)=>  id === user.id);
  // if (!user){
  //   res.send("user not found ");
  // }
  res.render("editSingleUser", {user});
})

app.get("/user/delete/:id",(req,res)=>{
  let {id} = req.params;
  // let {id} = req.params;
  let user = result.find((user)=>  id === user.id);
  if (!user){
    res.send("user not found ");
  }
  // let user = result.find((user)=>  id === user.id);
  // if (!user){
  //   res.send("user not found ");
  // }
  res.render("deleteUser", {user});
})

app.get("/addUserForm",(req,res)=>{
  res.render("addUserForm");
})

app.patch("/user/edit/:id",async (req,res)=>{
  // console.log(req.body);
  // console.log(req.params);

  let clientPass = req.body.password;
  let user = result.find((user) =>  req.params.id === user.id);
  if(clientPass != user.password){
    res.send("incorrect password")
  }
  else{
    try{
 
      let updateQuery = `UPDATE test.user  SET username = ? WHERE id = ?`
      // let [result] =  await connection.query(query,[users]);
      let [update] =  await connection.query(updateQuery,[req.body.username,req.params.id]);
      [result] =  await connection.query(getDataQuery);
      // console.log("The result is ................",update);
      // console.log(result);
      res.redirect(`/users/${req.params.id}`)
  
  
      
    } catch(err){
      // console.log("error occured the error is ",err);
      res.send("Error occured in the db")
  
      
    }
  } 
})


app.get("/addUserForm",(req,res)=>{
  res.render("addUserForm");
})

app.delete("/user/delete/:id",async (req,res)=>{
  // console.log(req.body);
  // console.log(req.params);

  let clientPass = req.body.password;
  let user = result.find((user) =>  req.params.id === user.id);
  if(clientPass != user.password){
    res.send("incorrect password")
  }
  else{
    try{
 
      let deleteQuery = `DELETE FROM test.user WHERE id = ?`
      // let [result] =  await connection.query(query,[users]);
      let [deleteUser] =  await connection.query(deleteQuery,[req.params.id]);
      [result] =  await connection.query(getDataQuery);
      console.log("The result is ................",deleteUser);
      // console.log(result);
      res.redirect(`/Home`)
    } catch(err){
      // console.log("error occured the error is ",err);
      res.send("Error occured in the db",err)     
    }
  } 
})

app.post("/addUser",async(req,res)=>{
 
    // console.log(req.body);
    let addQuery = 'INSERT INTO test.user    (id,username,email,password)   VALUES (?,?,?,?)';
    let data = [uuidv4(),req.body.username,req.body.email,req.body.password];
    // console.log("data is",data);
    try {

    let [addUser] =  await connection.query(addQuery,data);
    [result] =  await connection.query(getDataQuery);
    // console.log("The result is ................",addUser);
    // console.log(result);
    res.redirect(`/Home`)


    }
    catch(err){
      // console.log("error occured the error is ",err);
      res.send("sometging went wrong")

    }
})

// /usr/local/mysql/bin/mysql -u root -p


// let  createRandomUser = () =>  {
//     return {
//       userId: faker.string.uuid(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),

//     };
//   }


// console.log(createRandomUser());
