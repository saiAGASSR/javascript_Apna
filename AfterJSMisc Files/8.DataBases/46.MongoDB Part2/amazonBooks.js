import mongoose from  'mongoose';

// const mongoose = require('mongusoose');

async  function main () {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon")

}

main()
.then(() =>  console.log("res"))
.catch(err => console.log(err))

const bookScheme = mongoose.Schema({
    name : {    
        type : String,
        required  : true
    },
    author : String,
    price:{
        type:Number,
        min:[6,"less price"]

    },
    publishedDate : Number,
    category: {
        type : String,
        enum:["fictional","non-fictional"]
    }
})

const Book = mongoose.model("Book" , bookScheme);

let book1 = new Book({
    name:"selfEarning",
    author: "sai",
    publishedDate: 291020,
    category: "sai"
})

book1
    .save()
    .then(res=> console.log(res))
    .catch(err => console.log(err))

    // Parsing   to convert one type to another 
    // https://mongoosejs.com/docs/schematypes.html