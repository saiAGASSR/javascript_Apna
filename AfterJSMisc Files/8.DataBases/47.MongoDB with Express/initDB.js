import mongoose from 'mongoose';
import Chat from './models/chats.js'




main()
    .then(()=>{console.log("connection with DB successfull");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakeWhatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}




// let chat1 = new Chat({
//     from : "sai",
//     to : "nisha",
//     message: "Hi from Uber ",
//     created_on: new Date()
// })

// chat1.save()
//      .then(res=> console.log(res))
//      .catch(err=>console.log(err)
//      )



let Chats = [
    {
    from : "sai",
    to : "nisha",
    message: "Hi from Uber ",
    created_on: new Date()
    },
    {
        from : "nisha",
        to : "sai",
        message: "Hi from Accordian ",
        created_on: new Date()
    },
    {
        from : "sai",
        to : "Parneet",
        message: "Hi from Yupp ",
        created_on: new Date()
    },
    {
        from : "Parneet",
        to : "sai",
        message: "Hi from StateStreet ",
        created_on: new Date()
    },
    {
        from : "sai",
        to : "Prashansha",
        message: "You played well ",
        created_on: new Date()
    },
    {
        from : "Prashansha",
        to : "sai",
        message: "You Too",
        created_on: new Date()
    }


]


Chat.insertMany(Chats)
.then(res=> console.log(res))
.catch(err=>console.log(err)
)

