import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";
import {hash} from "../../services/hashManager";
import insertUser from "../../data/insertUser";
import { User } from "../../types/type";
import loginData from "../../data/loginData";
import { compare } from "bcryptjs";
import { TokenExpiredError } from "jsonwebtoken";



export const loginBusiness = async(input:any):Promise<any> => {
    try {
        const user:User = await loginData(input.email)   
        const token: string = generateToken({
            id:user.id,
            role:input.role
        })
        console.log(token)
        if(!user){
            throw new Error("User not found :(")
        }
            const password:boolean = await compare(input.password, user.password)
            if(!password){
                throw new Error("please input password")
            }
        return token;

    } catch (error) {
        if(error.code === 1048){
            throw new Error ("User already exist")
        }    
    }
  
     
    
 
}