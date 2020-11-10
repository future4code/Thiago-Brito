import {Request, Response} from 'express'
import {filterUser} from '../data/filterUser'
import { filterUserParams } from '../data/filterUserParams'

export const searchUsersParams = async (req:Request, res:Response) =>{
    try {
        const type = req.params.type as string
        if (!type)
        throw new Error ("Voce deve inserir um valor para \'name\'")

        const result = await filterUserParams(type)
        res.status(200).send(result)
        
    } catch (error) {
        res.status(400).send 
    }
}