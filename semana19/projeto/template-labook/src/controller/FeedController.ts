import {Request, Response} from "express"
import { feedbussiness } from "../business/feedBusiness"
import { AuthenticationData } from "../model/User"
import { getTokenData } from "../services/authenticator"
 
 class FeedControler {

    public postCreate = async (req: Request, res: Response) => {
        try {
           let message = "Success!"
           const input = {
               photo:req.body.photo,
               description:req.body.description,
               type:req.body.type,
               token: req.headers.authorization as string
           }   
     
           const tokenData: AuthenticationData = await getTokenData(input.token)
           await feedbussiness.createFeed(input, tokenData.id)


           res.status(201).send({ message })
     
        } catch (error) {
           let message = error.sqlMessage || error.message
           res.statusCode = 400
     
           res.send({ message })
        }
        
     }

     public getPost = async (req: Request, res: Response) => {
      try {
         let message = "Success!"
         const input = {
             authorization:req.headers.authorization as string
         }   
            const id = req.params.id
         const posts = await feedbussiness.getPost(id, input.authorization)

         res.status(201).send({ message, posts })
   
      } catch (error) {
         let message = error.sqlMessage || error.message
         res.statusCode = 400
   
         res.send({ message })
      }
      
   }
    
}

export const feedControler: FeedControler = new FeedControler()

