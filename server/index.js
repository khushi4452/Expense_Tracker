import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { postSignup, postLogin } from './controllers/user.js';

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

app.post('/signup', postSignup);

app.post('/login', postLogin);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
