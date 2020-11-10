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
            !req.body.password
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
            cypherPassword
        )

         const token: string = generateToken({
            id
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