import express from "express"
import cors from "cors"
import airouter from "./src/routes/ai.route.js"
import UserRouter from "./src/routes/User.route.js";
import cookieParser from "cookie-parser";
import { errorHandler } from "./src/middlewares/error.middleware.js";



const app = express()

app.set('trust proxy', 1)

 app.use(cors({
            origin: process.env.CORS_ORIGIN, // Allow requests from this origin
            methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
            allowedHeaders: ['Content-Type', 'Authorization'], // Allowed request headers
            credentials: true // Allow sending of cookies and authorization headers
        }));
app.use(cookieParser())
app.use(express.json());


app.use("/api/v1" , airouter)
app.use("/api/v1/users" , UserRouter)

app.use(errorHandler)

export default app