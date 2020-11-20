import { feedDatabase } from "../data/feedDatabase"
import { Post } from "../model/Post"
import { getTokenData } from "../services/authenticator"
import { CustomError } from "../services/CustomError"
import { generateId } from "../services/idGenerator"


class FeedBusiness{
    public createFeed = async(input:any,TokenData:string) =>{
        try {
            const id: string = generateId()
            await feedDatabase.insertFeed(id, input.photo, input.description, input.type, TokenData)
        } catch (error) {
            
        }
    }
    public getPost = async(id:string,authorization:string) =>{
        try {
            let message
            await getTokenData(authorization)
            const result:Post = await feedDatabase.getPost(id) 
            if (!result) {
               
              message = "Not found"
                throw new  CustomError(404, message)
             }
            return result
        } catch (error) {
            
        }
    }

}


export const feedbussiness:FeedBusiness= new FeedBusiness()