import mongoose from "mongoose";
import { Schema } from "mongoose";


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationships');
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

main()
    .then(()=>{
    console.log("connected   to db successfully");
    })
    .catch((err)=>{
        console.log(err);
        
    })


const userSchema = new Schema({
    username  :  String,
    addresses : [
        {
            _id  : false,
            location : String , 
            city     : String 
        }
    ]
    
})

const User =  mongoose.model("User", userSchema);

const addUsers = async () => {
    let user1 = new User({
        name       : "sai",
        addresses  : [
            {
                city     : "Hyderabad",
                location : "primark suguna residency"
            }
        ]
    })

    user1.addresses.push({
        location : "marthanda nagar",
        city     : "Hyderabad"
    })

    let result = await user1.save();
    console.log(result);
    
}

addUsers();

