import express from "express"
import { friendController } from "../controller/FriendController"

export const friendRoutes = express.Router()
friendRoutes.post("/:id", friendController.createFriendship )