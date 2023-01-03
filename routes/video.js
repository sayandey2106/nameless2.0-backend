import express from "express";
import Video from "../models/video.js";

const router =  express.Router();


//CREATE
router.post('/', async (req,res)=>{
    const newVideo =new Video(req.body);
   try {
    const savedVideo = await newVideo.save();
     res.status(200).json(savedVideo);
   } catch (error) {
    res.status(500).json(error);
   }
})

//UPDATE

router.put('/:id', async (req,res)=>{

   try {
    const updateVideo = await Video.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
     res.status(200).json(updateVideo);
   } catch (error) {
    res.status(500).json(error);
   }
})

//GET
router.get('/:id', async (req,res)=>{

    try {
     const video = await Video.findById(req.params.id);
      res.status(200).json(video);
    } catch (error) {
     res.status(500).json(error);
    }
 })

//GET ALL
router.get('/', async (req,res)=>{

    try {
     const videos = await Video.find();
      res.status(200).json(videos);
    } catch (error) {
     res.status(500).json(error);
    }
 }) 
//DELETE
router.delete('/:id', async (req,res)=>{

    try {
     const deleteVideo = await Video.findByIdAndDelete(req.params.id);
      
    } catch (error) {
     res.status(500).json(error);
    }
 })

export default router;