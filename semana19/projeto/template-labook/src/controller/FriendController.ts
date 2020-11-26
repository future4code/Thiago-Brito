import { friendbussiness } from "../business/friendBusiness"
import {Request, Response} from "express"
import { AuthenticationData } from "../model/User"
import { getTokenData } from "../services/authenticator"

class FriendController {
   public createFriendship = async (req: Request, res: Response) => {
       
      try {
         let message = "Success!"
         const input = {
            authorization: req.headers.authorization  as string
             
         }   
         const {id} =req.params
         const tokenData: AuthenticationData = await getTokenData(input.authorization)
         await friendbussiness.createFriendship(tokenData.id, id)
  
         res.status(201).send({ message })
   
      } catch (error) {
         let message = error.sqlMessage || error.message
         res.statusCode = 400
   
         res.send({ message })
      }
   }
}
export const friendController:FriendController = new FriendController()
