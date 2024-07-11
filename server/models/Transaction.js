import { Schema, model } from "mongoose";

const transactionSchema = new Schema ({

    amount: {
        type: Number,
        required: true,
    },
    category: {
        type: string ,
        default: "others",
        
    },

    type: {
        type: string ,
        enum: ["debit ","credit"],

    },

    user:{
      type: Schema.Types.ObjectId,
      ref: "User",
    } 

});


const transaction = model("Transaction", transactionschema);
export default Transaction;


