import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";
import {hash} from "../../services/hashManager";
import insertUser from "../../data/insertUser";


export const createUserBusiness = async(input:any):Promise<any> => {
    try {
        if(
            !input.name||
            !input.role
        ){
            throw new Error('please fill all the fields')
        }
        
        if(input.email.indexOf("@") === -1){
            throw new Error("Invalid Email");
        }

        if(input.password.length < 6){
            throw new Error("Password must have at least 6 characters");
        }

        const id:string = generateId()
        const cypherPassword = await hash(input.password)

        await insertUser(
            id,
            input.name,
            input.email,
            cypherPassword,
            input.role
        )
                
        const token: string = generateToken({
            id,
            role:input.role
        })
        console.log(token)
        return token
    
    } catch (error) {
        if(error.code === 1048){
            throw new Error ("User already exist")
        }    
    }
    return" "
}