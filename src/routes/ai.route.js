import { Router } from "express";
import { getreview } from "../controllers/ai.controller.js";



const airouter = Router()


airouter.route("/review").post(getreview)



export default airouter