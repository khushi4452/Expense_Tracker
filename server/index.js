import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import User from './models/user.js';
import Transaction from './models/Transaction.js';

const app = express();
app.use(express.json());
app.use(cors());

// Connection to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected successfully 😊😊`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

connectDB();

app.get('/', (req, res) => {
  res.json({
    message: 'welcome to Expense tracker API',
  });
});

app.post('/signup', async (req, res) => {
  const { fullName, email, password, dob } = req.body;

  try {
    const user = new User({
      fullName,
      email,
      password,
      dob: new Date(dob),
    });

    const savedUser = await user.save();
    res.json({
      success: true,
      message: 'Signup successful',
      data: savedUser,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Signup failed',
      error: error.message,
    });
  }
});

app.post('/login',async (req, res) => {
 const { email, password} = req.body;

 const user =  await User.findOne({
  email : email,
  password : password
 });


 if(user){
  return res.json ({
    success: true,
    message :"Login successfully",
    data: user
  })
 }
 else {
  return res.json ({
    success: false,
    message: "Inavlid credentials",
    data:null
  })
 }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
