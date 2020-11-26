import { Request, response, Response } from "express"
import { request } from "http"
import selectUserByEmail, { User } from "../data/selectUserByEmail"
import { generateToken } from "../services/authenticator"
import { compare } from "../services/hashManager"

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

      if (!email || email.indexOf("@") === -1) {
         res.statusCode = 406
         message = "Invalid email"
         throw new Error(message);
      }

      if (!user) {
         res.statusCode = 404
         message = "Usuário não encontrado ou senha incorreta"
         throw new Error(message)
      }

      const passwordIsCorrect: boolean = await compare(password, user.password)

      if (!passwordIsCorrect) {
         res.statusCode = 404
         message = "Usuário não encontrado ou senha incorreta"
         throw new Error(message)
      }

      // Futura colinha, mostra o token gerado pelo código.
      const token: string = generateToken({
         id: user.id,
         role: user.role
      })

      res.send({
         message,
         token: "token gerado pelo jwt",
      })
      console.log(token)

   } catch (error) {
      let { message } = error
      console.log(error)
      if (message === "Cannot read property 'id' of undefined") {
         message = "Email informado não é inválido"
         res.statusCode = 406
      }

      if (message === "Cannot read property 'id' of undefined") {
         message = "Usuário não encontrado ou senha incorreta"
         res.statusCode = 404
      }

      if (message === "Field 'name' doesn't have a default value") {
         message = "Insira um nome para seu usuário"
         res.statusCode = 406
      }
      res.send({ message })
   }
}