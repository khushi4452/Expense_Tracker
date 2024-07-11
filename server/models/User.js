import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true ,
        
    },
    email: {
        type: String,
        required: true ,
        unique: true,
    },


    password: {
        type: String,
        required: true ,
    },
    dob: {
        type: Date,
        required: true , 
    }, 

    

}, {
    timestamps: true,
});

const User = model("user", UserSchema);


export default User;


