import dotenv from "dotenv";
dotenv.config()
import app from "./app.js";




app.listen(8000 , ()=>{
    console.log("server running on port 8000");
  console.log("API Key loaded:", process.env.GOOGLE_GEMINI_APIKEY ? "Yes" : "No")
    
})

