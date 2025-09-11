import 'dotenv/config'; // Load environment variables first
import app from "./app.js";
import connectDB from './src/db/db.js';





connectDB().then(()=>{
    app.listen(process.env.PORT , ()=>{
        console.log(`the server is running on port ${process.env.PORT}`);
    })
}).catch((error)=>{
     console.log("MongoDB error" , error);
})
