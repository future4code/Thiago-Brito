
import {Request, Response} from "express"
import { generateToken, getTokenData } from "../services/authenticator"
import { compare } from "bcryptjs"
import { userbussiness } from "../business/userBusiness"

class UserControler {

    public login = async (req: Request, res: Response) => {
        try {
            let message
            const input = {
                email:req.body.email,
                password:req.body.password

            }
            const token = await userbussiness.login(input)
            res.status(201).send({ message, token })
            
        } catch (error) {
            res.status(error.statusCode)
            res.send(error.sqlmessage || error.message )
        }
    }
    public signup = async (req: Request, res: Response) => {
        try {
            let message
            const input = {
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            }
            const token = await userbussiness.signup(input)
            res.status(201).send({ message, token })
            
        } catch (error) {
            res.status(error.statusCode)
            res.send(error.sqlmessage || error.message )
        }
    }
}

export const userControler: UserControler = new UserControler()
