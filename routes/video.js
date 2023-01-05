import express from "express";
import Video from "../models/video.js";
import { createVideo, updateVideo, getAllVideos, getVideo, deleteVideo } from "../controllers/video.js";
import { verifyAdmin } from "../util/verify.js";


const router =  express.Router();


//CREATE
router.post('/',verifyAdmin,createVideo)

//UPDATE

router.put('/:id',verifyAdmin, updateVideo)

//GET
router.get('/:id',getVideo)

//GET ALL
router.get('/',getAllVideos) 
//DELETE
router.delete('/:id',verifyAdmin, deleteVideo)

export default router;