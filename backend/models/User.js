import mongoose from "mongoose";

const UserSchema = mongoose.Schema ({
      name:{
        type:String,
      },
      email:{
      type:String,
      unique:true
      },
      password:{
        type:String
      }
},{
    timestamps:true,
});

const UserModel = mongoose.model ("User",UserSchema)
export default UserModel