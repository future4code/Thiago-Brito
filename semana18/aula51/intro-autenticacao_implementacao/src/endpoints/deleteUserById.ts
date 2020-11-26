import { Request, Response } from "express";
import deleteUsersById from "../data/deleteUsersById";
import selectUserById from "../data/selectUserById";
import { AuthenticationData, getTokenData } from "../services/authenticator";

export default async function deleteUserById(
   req: Request,
   res: Response
) {
   try {
      const token = req.headers.authorization as string;
      const tokenData = getTokenData(token)
        const user = await deleteUsersById(tokenData.id)

      if (tokenData.role === "NORMAL") {
         throw new Error("Only an Admin user can access this funcionality");
       }
       const id = req.params.id
       await deleteUsersById(id)

        res.sendStatus(200)
   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage,
         auth: req.headers.auth
      })
   }
}