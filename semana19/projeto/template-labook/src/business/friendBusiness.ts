import { friendDatabase } from "../data/friendDatabase"
import { CustomError } from "../services/CustomError"


class FriendBusiness{
public createFriendship = async( authentication:string, id:string) =>{
    try {
         
        await friendDatabase.createFriendship(authentication, id)
        
    } catch (error) {
        throw new CustomError(400, error.message)
    }
}
// public deleteFriend = async( authentication:string, id:string) =>{
//     try {
         
//         await friendDatabase.deleteFriend(authentication)
        
        
//     } catch (error) {
//         throw new CustomError(400, error.message)
//     }
// }
}

export const friendbussiness:FriendBusiness = new FriendBusiness()