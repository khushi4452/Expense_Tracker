import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Check if the model already exists before defining it
const User = models.User || model('User', UserSchema);

export default User;
