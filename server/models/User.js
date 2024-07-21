import {Schema , model } from "mongoose";

const userSchema = new Schema ({
  fullname: {
    type : String ,
    required : true ,
  } ,
  email : {
    type : String ,
    required : true , 
    unique : true,
  } ,
  password: {
    type : String ,
    required : true ,
  },
  dob: {
    type : String ,
    required : true ,
  },

},{
  timestamps: true,
});

const user = model("User", userSchema);


export default User;
