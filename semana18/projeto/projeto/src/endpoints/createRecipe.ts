import { Request, Response } from "express";
import insertRecipe from "../data/insertRecipe";
import selectUserInfo from "../data/selectUserInfo";
import { getTokenData } from "../services/authenticator";
import {generateId} from "../services/idGenerator";

export default async function createRecipe(
    req: Request,
    res: Response
) {
    try {
        console.log(req.body.ingredients)
        const token = req.headers.authorization as string
        const authenticationData = getTokenData(token)
        const user = await selectUserInfo(authenticationData.role)

        if (
            !req.body.name ||
            !req.body.igredients ||
            !req.body.instructions

        ) {
          throw new Error('Preencha os campos "name", "ingredients" e "instructions"')
        }
        const id: string = generateId()
     
        const getDate = new Date()
        console.log(user.id_user)

        await insertRecipe(
            id,
            req.body.name,
            req.body.ingredients,
            req.body.instructions,
            user.id_user,
            getDate
        
        )

        res
            .status(201)
            .send({
               message:"Receita criada!",
               token
            })

        
    } catch (error) {
        console.log(req.body.name)
        res.status(400).send({
            message: error.message || error.sqlMessage
    })
}
}