import {Schema , model } from "mongoose";
const trensactionSchema = new Schema({
amount:{
  type: Number,
  required : true,

},
category:{
  type: String ,
  default: "Others",
  required: "true",

},

type: {
  type: String,
enum: ["credit" , "debit"],
},


user:{
 type: Schema.Types.ObjectId,
 ref: "User",
}

},{
  timestamps: true,
});

const Transaction = model("Transaction ", trensactionSchema);

export default Transaction;

