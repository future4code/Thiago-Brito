import {Request, Response} from 'express'

export const searchUsers = async (req:Request, res:Response) =>{
    try {
        const name = req.query.name
        if (!name)
        throw new Error ("Voce deve inserir um valor para \'name\'")

        const result = await 
    } catch (error) {
        res.status(400).send 
    }
}