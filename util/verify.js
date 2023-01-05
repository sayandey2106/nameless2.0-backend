import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req,res,next) =>{
    const token = req.header('authToken');
    if(!token){
        return next(createError(401,"you are not authenticated"));
    }
    
    jwt.verify(token,process.env.JWT_KEY,(err,user)=>{
        if(err)
        return next(createError(403,"Token not valid!"));
        req.user = user;
        next()
    })
}

export const verifyAdmin =(req,res,next)=>{
    verifyToken(req,res,()=>{
        console.log(req.user.isAdmin)
        if(req.user.isAdmin===true){
            next();
        }
        else{
            return next(createError(403,"you are not admin"))
        }
    });
}

