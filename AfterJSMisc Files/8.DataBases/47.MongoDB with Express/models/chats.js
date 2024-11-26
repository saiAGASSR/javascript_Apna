import mongoose, { mongo } from 'mongoose';
import { type } from 'os';

const chatSchema = new mongoose.Schema({
    from : {
        type : String,
        required : true
    },
    to : {
        type : String,
        required : true

    },
    message : {
        type : String,
        required : true

    },
    created_on : {
        type : Date,
        maxLength: 50,
        required: true
    }
})

const Chat = mongoose.model("Chat", chatSchema);

export default Chat ; 