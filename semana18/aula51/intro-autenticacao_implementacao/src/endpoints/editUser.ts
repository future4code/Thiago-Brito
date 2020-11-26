import { Request, Response } from "express";
import updateUser from "../data/updateUser";
import { AuthenticationData, getTokenData } from "../services/authenticator";

export default async function editUser(
   req: Request,
   res: Response
) {
   try {

      const token: string = req.headers.authorization as string

      const tokenData: AuthenticationData = getTokenData(token)

      if (
         req.body.name === '' ||
         req.body.nickname === '' ||
         req.body.email === ''
      ) {
         throw new Error("Nenhum dos campos pode estar em branco")
      }

      if (!req.body.name && !req.body.nickname && !req.body.email) {
         throw new Error("Escolha ao menos um valor para alterar")
      }

      await updateUser(
         tokenData.id,
         req.body.name,
         req.body.nickname,
         req.body.email
      )


      res.status(200).send({
         message: "Usuário atualizado!"
      })

   } catch (error) {
      let { message } = error

      if (
         message === "jwt must be provided" ||
         message === "invalid signature" ||
         message === "jwt expired"
      ) {
         res.statusCode = 401
         message = "Não autorizado"
      }

      res.send({
         message
      })
   }
}