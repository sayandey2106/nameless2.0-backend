import express from "express";
import User from "../models/user.js";
import { updateUser, getUser, getAllUsers, deleteUser } from "../controllers/user.js";
const router =express.Router();



//UPDATE

router.put('/:id', updateUser)

//GET
router.get('/:id',getUser)

//GET ALL
router.get('/',getAllUsers) 
//DELETE
router.delete('/:id', deleteUser)

export default router;