import { Request, Response } from "express";
import deletedtUserById from "../data/deletedUserById";
import selectUserById from "../data/selectUserById";
import { getTokenData } from "../services/authenticator";

export default async function deleteUserById(
   req: Request,
   res: Response
) {
   try {

      const token = req.headers.authorization as string;


      const authenticationData = getTokenData(token);
      const user = await deletedtUserById(authenticationData.id)

      if (authenticationData.role !== 'ADMIN') {
         throw new Error("Only a normal user can access this funcionality");
      }

      if (!user) {
         throw new Error("Usuário não encontrado")
      }

      const id = req.params.id
      await deletedtUserById(id)

      res.sendStatus(200)

   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage,
         auth: req.headers.auth
      })
   }
}