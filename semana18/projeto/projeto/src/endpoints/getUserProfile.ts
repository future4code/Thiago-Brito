import { Request, Response } from "express";
import selectUserInfo from "../data/selectUserInfo";
import selectUserById from "../data/selectUserInfo";
import { getTokenData } from "../services/authenticator";

export default async function getUserProfile(
    req: Request,
    res: Response
 ) {
     try {

        const token = req.headers.authorization as string
        const authorizationData = getTokenData(token)
        const user = await selectUserInfo(authorizationData.role)
        res.status(200).send(
            user
  
     )} catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage,
            auth: req.headers.auth
     })
    }
    }