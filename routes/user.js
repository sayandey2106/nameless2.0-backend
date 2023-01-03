import express from "express";
import User from "../models/user.js";
const router =express.Router();

router.post('/', async (req,res)=>{
    const newUser =new User(req.body);
   try {
    const savedUser = await newUser.save();
     res.status(200).json(savedUser);
   } catch (error) {
    res.status(500).json(error);
   }
})

export default router;