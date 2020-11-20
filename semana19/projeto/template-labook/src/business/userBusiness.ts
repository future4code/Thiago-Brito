import { userDatabase } from "../data/userDatabase"
import {Request, Response} from "express"
import { generateToken } from "../services/authenticator"
import { CustomError } from "../services/CustomError"
import { generateId } from "../services/idGenerator"
import { compare, hash } from "../services/hashManager"
import { User } from "../model/User"


class UserBusiness{
    public login = async(input:any) =>{
        try {
            let message
            if (!input.email || !input.password) {
                
                 message = '"email" and "password" must be provided'
                throw new Error(message)
             }
             const user:User = await userDatabase.login(input.email)

             if (!user) {
               
                message = "Invalid "
                throw new CustomError(400, message)
             }
          
             const passwordIsCorrect:boolean = await compare(input.password, user.getPassword())
             if (!passwordIsCorrect) {
            message = "User not found or incorrect password"
            throw new CustomError(404, message)}

             const token:string = generateToken({id:user.getId()})
             return token

        } catch (error) {
            throw new CustomError(400, error.message)
        }
    }
    public signup = async(input:any) =>{
        try {
            let message
            if (!input.email || !input.password) {
                
                 message = '"email" and "password" must be provided'
                throw new CustomError( 403, message)
             }
             const cypherPassword = await hash(input.password)
             const id:string = generateId()
             const token:string = generateToken({id})
             await userDatabase.signup(id, input.name, input.email, cypherPassword)
             return token
        } catch (error) {
            throw new CustomError(400, error.message)
        }
    }
}

export const userbussiness:UserBusiness = new UserBusiness()