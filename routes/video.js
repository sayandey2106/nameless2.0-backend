import express from "express";
import Video from "../models/video.js";
import { createVideo, updateVideo, getAllVideos, getVideo, deleteVideo } from "../controllers/video.js";


const router =  express.Router();


//CREATE
router.post('/',createVideo)

//UPDATE

router.put('/:id', updateVideo)

//GET
router.get('/:id',getVideo)

//GET ALL
router.get('/',getAllVideos) 
//DELETE
router.delete('/:id', deleteVideo)

export default router;