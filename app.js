import express from "express"
import airouter from "./src/routes/ai.route.js"


const app = express()
app.use(express.json());


app.use("/api/v1" , airouter)


export default app