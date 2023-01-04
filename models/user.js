import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
     username: {
        type: String,
        required: true,
     },
    email:{
        type: String,
        required: true,
        unique: true
        } ,
    password:{
        type: String,
        required: true,

    },
    favGenre:{
        type: String,
    },
    city:{
        type: String,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    

    },{timestamps:true});

    export default mongoose.model("User",userSchema);