import express from "express";
import { login, register } from "../controllers/auth.js";
import { updateUser,getAllUsers,getUser,deleteUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken } from "../util/verify.js";
const router =express.Router();

router.post('/register',register);
router.post('/login',login)
router.put('/user/:id', updateUser)
router.get('/checkauth',verifyToken,(req,res,next)=>{
    res.send("you are authenticated!")
} )
router.get('/checkadmin/',verifyAdmin,(req,res,next)=>{
    res.send("you are admin!")
} )

//GET
router.get('/user/:id',getUser)

//GET ALL
router.get('/user/',getAllUsers) 
//DELETE
router.delete('/user/:id', deleteUser)
export default router;