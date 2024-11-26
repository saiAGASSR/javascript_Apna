import mongoose from  'mongoose';

// const mongoose = require('mongusoose');

async  function main () {
  await mongoose.connect("mongodb://127.0.0.1:27017/teasdassst")

}

main()
.then(() =>  console.log("res"))
.catch(err => console.log(err))

const userSchema  =   new mongoose.Schema({
  name  : String , 
  email : String ,
  age   : Number
});


const User = mongoose.model("User", userSchema); // User    will be converted into users from JS to mongo
const Employee = mongoose.model("Employee", userSchema); // User    will be converted into users from JS to mongo
const Product = mongoose.model("Product", userSchema); // User    will be converted into users from JS to mongo
// Product - > products     plural 
// Employee -> employees

const user1 = new User({
  name:"adam" ,
  email: "yahoo@yahoo.in",
  age:48
});

const user2 = new User({
  name:"adammm" ,
  email: "yahoomm@yahoo.in",
  age:488
});
// Mongoose will automatically create an id 
// updated in memory 

const user3 = new User({
  name:"adammmsasd" ,
  email: "yahoomm@yahoo.in",
  age:8
});

//  

// user1.save();
// user2.save();

// user3
//   .save()
//   .then(res => {
//     console.log(res);
    
//   })
//   .catch(err =>{
//     console.log(err);
    
//   })

//   User.insertMany([
//     { name:"adammmsasd",email: "yahoomm@yahoo.in",age:18},
//     { name:"adasammmsasd",email: "yahoomm@yahoo.in",age:28},
//     { name:"adammmsadsasd",email: "yahoomm@yahoo.in",age:38}
//   ])
//   .then(res => {
//     console.log(res);
    
//   })
//   .catch(err =>{
//     console.log(err);
    
//   })

// User.find({})
//     .then(res=>console.log("all", res))
//     .catch(err=>console.log(err)
//     )
// User.find({age:{$gte:98}})
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err)
//     )

// User.findOne({age:{$gte:98}})
// .then(res=>console.log("one",res))
// .catch(err=>console.log(err)
// )

// User.findById("66f15b9275f68136a80f075b")
// .then(res=>console.log("FindByID",res))
// .catch(err=>console.log(err)
// )
// User.updateOne({age:8},{name:"age99"})
// .then(res=>console.log("updates",res))
// .catch(err=>console.log(err)
// )

// User.updateMany({age:{$gte:60}},{name:"allConditionsUpdate"})
// .then(res=>console.log("updates",res))
// .catch(err=>console.log(err)
// )
  //https://mongoosejs.com/docs/api/model.html#Model.find()

// User.findOneAndUpdate({age:8},{name:"age9sad999"})
// .then(res=>console.log("FindAndUpdate",res))
// .catch(err=>console.log(err)
// )
// User.findOneAndUpdate({age:8},{name:"old"}, {new:true})
// .then(res=>console.log("FindAndUpdate",res))
// .catch(err=>console.log(err)
// )

User.deleteMany({age:8})
.then(res=>console.log("Deleted",res))
.catch(err=>console.log(err)
)