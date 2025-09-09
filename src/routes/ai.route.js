import { Router } from "express";
import { generateReview } from "../controllers/ai.controller.js";



const airouter = Router()


airouter.route("/review").post(generateReview)



export default airouter