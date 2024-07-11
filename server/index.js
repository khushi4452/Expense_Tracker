import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());

//connection of mongo DB
const connectDB = async ()=>{
  const conn = await mongoose.connect (process.env.MONGODB_URI)
  if (conn) {
    console.log(`MongoDB connected successfully 😊😊`);

  }
};

connectDB();

app.get('/', (req,res) =>{
    res.json({
    message: 'welcome to Expense tracker API'
    })
})

const PORT = process.env.PORT || 5000;

app.listen (PORT, ()=>{
   console.log(`server is running on Port $(PORT)`);
});

