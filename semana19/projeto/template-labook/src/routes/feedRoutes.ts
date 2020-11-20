import express from "express"
import { feedControler } from "../controller/FeedController"


export const feedRoutes = express.Router()

feedRoutes.post("/create", feedControler.postCreate)
feedRoutes.get("/:id", feedControler.getPost)