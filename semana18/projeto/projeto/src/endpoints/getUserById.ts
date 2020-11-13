import { Request, Response } from "express";
import selectUserById from "../data/selectUserInfo";
import { getTokenData } from "../services/authenticator";

export default async function getUserById(
   req: Request,
   res: Response
) {
   try {

      const token = req.headers.authorization as string
      const authorizationData = getTokenData(token)

      if (authorizationData.role === "ADMIN"){
         throw new Error ("Somente admins podem fazer isso")
      }
      
      const user = await selectUserById(req.params.id as string)
      if (!user.length){
         console.log(req.params.id)
            throw new Error ("Usuário não encontrado")
      }     
      
      res.status(200).send(
          user
         
   )} catch (error) {
      res.status(400).send({
          message: error.message || error.sqlMessage,
          auth: req.headers.auth
   })
  }
  }