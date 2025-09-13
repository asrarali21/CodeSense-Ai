import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const userSchema = new Schema ({
      firstname :{
        type:String,
        required : true
      },
       lastname :{
        type:String,
        required : true
      },
      email :{
         type:String,
        required : true
      },
       password :{
         type:String,
        required : true
      },   
} , {timestamps:true})



userSchema.pre("save" ,async function (next){
   if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password , 10)
    next()
   }else{
    next()
   }
})


userSchema.methods.IsPasswordCorrect = async (password) => {
    return await bcrypt.compare(password , this.password)
}


userSchema.methods.generateAccessToken = function () {
    return  jwt.sign(
       {_id :this._id,
        email:this.email,
        firstName:this.firstName,
        lastName:this.lastName
       },
       process.env.ACCESS_TOKEN_SECRET,
       {expiresIn: process.env.ACCESS_TOKEN_EXPIRY}
    )
}

userSchema.methods.generateRefreshToken = function () {
    return  jwt.sign(
       {_id :this._id,
       },
       process.env.REFRESH_TOKEN_SECRET,
       {expiresIn: process.env.REFRESH_TOKEN_EXPIRY}
    )
}

export const User = mongoose.model("User" , userSchema)