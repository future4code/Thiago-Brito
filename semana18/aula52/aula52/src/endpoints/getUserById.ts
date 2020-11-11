import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";
import { getTokenData } from "../services/authenticator";

export default async function getUserById(
   req: Request,
   res: Response
) {
   try {

      const token = req.headers.authorization as string;


      const authenticationData = getTokenData(token);
      const user = await selectUserById(authenticationData.id)

      if (authenticationData.role !== 'ADMIN') {
         throw new Error("Only a normal user can access this funcionality");
      }

      if (!user) {
         throw new Error("Usuário não encontrado")
      }

      res.status(200).send({
         id: user.id,
         email: user.email
      })

   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage,
         auth: req.headers.auth
      })
   }
}