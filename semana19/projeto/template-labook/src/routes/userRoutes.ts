import express from "express"
import { feedControler } from "../controller/FeedController"
import { userControler } from "../controller/UserController"



export const userRoutes = express.Router()

userRoutes.post("/login", userControler.login)
userRoutes.post("/signup",userControler.signup)