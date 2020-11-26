

### Exercicios aula51

1)

a)
Rounds é a forma de representar o cost pelo bycript, onde cost seria oque delimita o tempo de execução do algoritimo.
Já salt é uma adição de camada ao final do hash aumentando a complexidade da criptografia, usei 12 por ser o padrão da maioria dos libs.
b)
```ts
import * as bcrypt from 'bcryptjs';

export const hash = async(plainText:string):Promise<string>=>{
    const rounds=Number(process.env.BCRYPT_COST);
    const salt= await bcrypt.genSalt(rounds);
    return bcrypt.hash(plainText, salt)
}
```
c)
```ts
export const compare = async(plainText:string, cypherText:string): Promise<boolean>=>{
        return bcrypt.compare(plainText, cypherText)
}
```
2)
a)
Deve modificar o cadastro primeiro já que o fluxo correto é criptografar a senha que o usuario criar primeiro para depois compara-la na hora do login.
b)
```ts
import * as jwt from "jsonwebtoken"
import { USER_ROLES } from "../data/insertUser"


export type AuthenticationData = {
   id: string,
   role:USER_ROLES
}

export function generateToken(
   payload: AuthenticationData
): string {
   return jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
         expiresIn: "24min"
      }
   )
}

export function getTokenData(
   token: string
): AuthenticationData {
   return jwt.verify(
      token,
      process.env.JWT_KEY as string
   ) as AuthenticationData
}
```
c)
```ts
import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import {generateId} from "../services/idGenerator";

export default async function createUser(
    req: Request,
    res: Response
) {
    try {

        if (
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email ||
            !req.body.password||
            !req.body.role
        ) {
          throw new Error('Preencha os campos "name","nickname", "email" e "password"')
        }

        const id: string = generateId()
        
        const cypherPassword  = await hash(req.body.password); 

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email,
            cypherPassword,
            req.body.role
        )

         const token: string = generateToken({
            id,
            role:req.body.role
         })

        res
            .status(201)
            .send({
               message:"Usuário criado!",
               token
            })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}

```
```ts
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

      if (!user) {
         res.statusCode = 404
         message = "Usuário não encontrado ou senha incorreta"
         throw new Error(message)
      }
      const passwordIsCorrect:boolean = await compare (password,user.password)

      if (!passwordIsCorrect) {
         res.statusCode = 404
         message = "Usuário não encontrado ou senha incorreta"
         throw new Error(message)
      }

      
      const token: string = generateToken({
         id: user.id,
         role:user.role
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
```
4)
```ts
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
         throw new Error("Usuário não encontrado")
      }

      res.status(200).send({
         id: user.id,
         nickname: user.nickname
      })

   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage,
         auth: req.headers.auth
      })
   }
}
```
5)
```ts
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
```
6)
```ts
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
```