import mongoose from "mongoose";

const placeSchme = mongoose.Schema ({
      owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
      },
      title:{
        type:String
      },
      address:{
        type:Strin
      }
    
})