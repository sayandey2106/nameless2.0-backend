import mongoose from "mongoose";
import { Schema } from "mongoose";

const videoSchema = new Schema({
     name: {
        type: String,
        required: true,
     },
     director:[{
name:{
    type:String
}
        }
    ]
     ,
     year:{
        type:Number,
        required:true,
     },

    link:{
        type: String,
        required: true,
        },
    image:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    rating:{
        type: String,
        min: 0,
        max: 5,
    }
    

    },{timestamps:true});

    export default mongoose.model("Videos",videoSchema);