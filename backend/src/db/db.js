import mongoose from "mongoose"



const connectDB =  async()=>{
 try {
       const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
      console.log(`mongo db connected , ${connectionInstance.connection.host}`);
 } catch (error) {
    console.log("mongoDB connection error" , error);
 }
    
}

export default connectDB