import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
const app = express();
const Port = 3000;
dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user",userRoutes);

app.use('/api/auth',authRoutes);

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})

app.listen(Port, () => {
  console.log(`server is runing on port ${Port}`);
});
