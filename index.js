import authRoute from "./routes/auth.js"
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.js"
import videoRoute from "./routes/video.js"
dotenv.config();

const app = express();
const port = 3000;


const connect = async()=>{
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDb");
  } catch (error) {
    throw error; 
  }
}


app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/video', videoRoute);
app.get('/', (req, res) => {
  res.send('Hello bg World!');
});

app.listen(port, () => {
  connect();
  console.log(`Example app at http://localhost:${port}`);
});