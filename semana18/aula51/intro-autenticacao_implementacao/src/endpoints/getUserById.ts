import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";
import { AuthenticationData, getTokenData } from "../services/authenticator";

export default async function getUserById(
   req: Request,
   res: Response
) {
   try {
      const token = req.headers.authorization as string;
      const tokenData = getTokenData(token)
      
      if (tokenData.role !== "NORMAL") {
         throw new Error("Only a normal user can access this funcionality");
       }
   
      const user = await selectUserById(tokenData.id)
       


      if (!user) {
         throw new Error("User not found")
      }

      res.status(200).send({
         id: user.id,
         email: user.email,
         role: user.role,
      })

   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage,
         auth: req.headers.auth
      })
   }
}