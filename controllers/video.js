import Video from "../models/video.js";


//CREATE

export const createVideo=(async (req,res,next)=>{
    const newVideo =new Video(req.body);
   try {
    const savedVideo = await newVideo.save();
     res.status(200).json(savedVideo);
   } catch (error) {
      next(error)  
   }
});

//UPDATE
export const updateVideo=( async (req,res,next)=>{

    try {
     const updateVideo = await Video.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
      res.status(200).json(updateVideo);
    } catch (error) {
       next(error)  ;
    }
 });

//GET
 export const getVideo=(async (req,res,next)=>{

    try {
     const video = await Video.findById(req.params.id);
      res.status(200).json(video);
    } catch (error) {
      next(error) 
    }
 })


//GET ALL
export const getAllVideos=(async (req,res,next)=>{

    try {
     const videos = await Video.find();
      res.status(200).json(videos);
    } catch (error) {
      next(error) 
    }
 })

//DELETE

export const deleteVideo=(async (req,res,next)=>{

    try {
     const deleteVideo = await Video.findByIdAndDelete(req.params.id);
      
    } catch (error) {
     next(error)  
     }
 })