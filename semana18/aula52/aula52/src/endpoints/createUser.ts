import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { getAddressInfo } from "../services/getAddressInfo";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";

export default async function createUser(
    req: Request,
    res: Response
) {
    try {

        if (
            !req.body.name ||
            !req.body.nickname ||
            !req.body.role
        ) {
            throw new Error('Preencha os campos "name" e \"nickname\" e \"role\"')
        }

        if (!req.body.email ||
            req.body.email.indexOf("@") === -1
        ) {
            throw new Error("Invalid email");
        }
        if (!req.body.password ||
            req.body.password.length < 6
        ) {
            throw new Error("Invalid password");
        }

        const id: string = generateId()

        const cypherPassword = await hash(req.body.password)
        const address = await getAddressInfo(req.body.cep)
        const location = [address.logradouro, address.bairro, address.cidade, address.bairro]

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email,
            cypherPassword,
            req.body.role,
            location
        )

        const token: string = generateToken({
            id,
            role: req.body.role
        })

        res
            .status(201)
            .send({
                message: "Usuário criado!",
                token
            })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}