import User from '../models/user.js';
import bcrypt from 'bcryptjs'
import {createError} from "../util/error.js";
import jwt from 'jsonwebtoken';

export const register =  async (req,res,next)=>{

try {
    const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({

        username: req.body.username,
        email: req.body.email,
        password: hash,
        city:req.body.city,
        favGenre:req.body.favGenre,
        isAdmin: req.body.isAdmin
    })
    await newUser.save();
    res.status(200).send("User created");
} catch (error) {
    next(error);
}


}

export const login =  async (req,res,next)=>{

    try {
        let user;
        if(req.body.email){
             user =await User.findOne({email:req.body.email})
            // userReal=user
        }
        else if(req.body.username){

             user =await User.findOne({username:req.body.username})
            // userReal=user
        }
     
        if(!user) return next(createError(404,"Email not found"));

        const isPasswordCorrect  = await bcrypt.compare(req.body.password, user.password)

        if(!isPasswordCorrect) return next(createError(400,"Wrong password or email Id!"));

        const token =jwt.sign({id:user._id, isAdmin:user.isAdmin, username:user.username,email:user.email, city:user.city, favGenre:user.favGenre  }, process.env.JWT_KEY)

        const {password,isAdmin,updatedAt,createdAt,...otherdetails}=user._doc

        res.status(200).send({authToken:token});
    } catch (error) {
        next(error);
    }
    
    
    }