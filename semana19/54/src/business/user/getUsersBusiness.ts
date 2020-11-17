import { generateToken, getTokenData } from "../../services/authenticator";
import getUsers from "../../data/getUsers";


export const getUsersBusiness = async(input:any):Promise<any> => {
    try {
       const authenticationData = getTokenData(input.token);
       const getUser = getUsers()
     

       if(!input.token){
            throw new Error("please input token")
       }
       if(!authenticationData){
           throw new Error ("Incorrect Token")
       }
       return getUser
    } catch (error) {
       throw new Error("error")
        
    }
    
  
}