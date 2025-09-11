import express from "express"
import cors from "cors"
import airouter from "./src/routes/ai.route.js"



const app = express()

      app.use(cors({
            origin: 'http://localhost:5173', // Allow requests from this origin
            methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
            allowedHeaders: ['Content-Type', 'Authorization'], // Allowed request headers
            credentials: true // Allow sending of cookies and authorization headers
        }));
app.use(express.json());


app.use("/api/v1" , airouter)


export default app