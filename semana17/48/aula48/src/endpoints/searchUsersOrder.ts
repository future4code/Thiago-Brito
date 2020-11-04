import {Request, Response} from 'express'
import {filterUserOrder} from '../data/filterUserOrder'
import { inputData } from '../types/user'

export const searchUsersOrder = async (req:Request, res:Response) =>{

    try {
        const ordena:inputData = {name:req.query.name as string,
        type:req.query.type as string,
        orderBy:req.query.orderBy as string,
        orderType:req.query.orderType as string}
        
        if (!ordena.name || ordena.type)
        throw new Error ("Voce deve inserir um valor para \'name\' ou \'type\' ")

        const result = await filterUserOrder(ordena)
        res.status(200).send(result)

    } catch (error) {
        res.status(400).send 
    }
}