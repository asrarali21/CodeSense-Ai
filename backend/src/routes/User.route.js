import { Router } from "express";
import { loginUser, LogOutUser, RegisterUser } from "../controllers/User.controller.js";


const UserRouter = Router()



UserRouter.route("/register").post(RegisterUser)
UserRouter.route("/login").post(loginUser)
UserRouter.route("/logout").post(LogOutUser)


export default UserRouter