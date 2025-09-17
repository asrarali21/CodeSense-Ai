import { User } from "../models/User.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";




const RegisterUser = asyncHandler(async(req ,res)=>{
    const {firstname , lastname , email , password} = req.body


    if (!firstname || !lastname || !email || !password) {
        throw new ApiError(400 , "all feilds are required")
    }
  

    const user = await User.create({
        firstname , 
        lastname , 
        email , 
        password
    })

    res.status(200)
    .json(new ApiResponse(200 , user , "User Register Successfully"))
})



const loginUser = asyncHandler(async(req,res)=>{
    const {email , password} = req.body

    if (!email || !password) {
        throw new ApiError(400 , "all feilds are required")
    }

    const user = await User.findOne({email})


    if (!user) {
        throw new ApiError(401 , "user doesnt exist")
    }


    const ValidatePassword = user.IsPasswordCorrect(password)

   if (!ValidatePassword) {
    throw new ApiError(401 , "Incorrect Password")
   }

   const accessToken = user.generateAccessToken()
   const refreshToken = user.generateRefreshToken()


   const LoggedInUser = await User.findById(user._id).select("-password  -refreshToken")
    
    const options ={
      httpOnly : true,
      secure : true 
    }
   

   res.status(200)
   .cookie("accessToken" , accessToken , options)
   .cookie("refreshToken" , refreshToken , options)
   .json(new ApiResponse(200 ,LoggedInUser , "User LoggedIn Successfully" ))
})


const LogOutUser = asyncHandler(async(req,res)=>{

    const options ={
      httpOnly : true,
      secure : true ,
      sameSite:'none'
    }
        
    res.status(200)
    .clearCookie("accessToken" ,options) 
    .clearCookie("refreshToken" , options) 
    .json(new ApiResponse(200 , {} , "user logout successfully"))
})

export {RegisterUser , loginUser , LogOutUser}