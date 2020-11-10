import { Request, response, Response } from "express"
import { request } from "http"
import selectUserByEmail, { User } from "../data/selectUserByEmail"
import { generateToken } from "../services/authenticator"

export default async function login(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const { email, password } = req.body

      let message = "Usuário logado!"

      if (!email || !password) {
         res.statusCode = 406
         message = "'email' e 'senha' são obrigatórios"
         throw new Error(message)
      }

      const user: User = await selectUserByEmail(email)

      if (!user) {
         res.statusCode = 404
         message = "Usuário não encontrado ou senha incorreta"
         throw new Error(message)
      }

      if (user.password !== password) {
         res.statusCode = 404
         message = "Usuário não encontrado ou senha incorreta"
         throw new Error(message)
      }

      const token: string = generateToken({
         id: user.id
      })

      res.send({
         message,
         token
      })

   } catch (error) {
      let { message } = error

      if(message === "Cannot read property 'id' of undefined"){
         message = "Usuário não encontrado ou senha incorreta"
         res.statusCode = 404
      }
      
      if(message === "Field 'name' doesn't have a default value"){
         message = "Insira um nome para seu usuário"
         res.statusCode = 406
      }
      res.send({message})
   }
}