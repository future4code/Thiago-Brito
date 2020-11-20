import { CustomError } from "../services/CustomError"
import BaseDatabase from "./BaseDatabase"


class FriendDatabase extends BaseDatabase {
    private tablename:string = "friends"
    public  async createFriendship( user_id:string, friend_id:string ){
        try {
            const result  = await BaseDatabase.connection.raw(`
            SELECT * FROM ${this.tablename}
            WHERE (user_id = '${user_id}' AND friend_id = '${friend_id}')
            OR (friend_id = '${friend_id}' AND friend_id = '${user_id}')`)
         
            
            if (result[0].length <= 0){
                await BaseDatabase.connection(this.tablename)
                .insert({user_id, friend_id})
            }
            else{
                throw new CustomError (400, "you are already friends")
            }

        } catch (error) {
            throw new Error (error.sqlMessage || error.message )
            
        }
    }
    public  async deleteFriend  (user_id:any, friend_id:string ){
        try {
            const result  = await BaseDatabase.connection.raw(`
            SELECT * FROM ${this.tablename}
            WHERE (user_id = '${user_id}' AND friend_id = '${friend_id}')
            OR (friend_id = '${friend_id}' AND user_id = '${user_id}')`)
            
            if(result[0].length > 0){
                await BaseDatabase.connection(this.tablename)
                .delete(`${friend_id} OR ${user_id}` ) 
            }
            else{
                throw new CustomError (400, "you are not friends")
            }
        


            return result[0]
        } catch (error) {
            throw new Error (error.sqlMessage || error.message )
            
        }
    }
    
}
export const friendDatabase:FriendDatabase = new FriendDatabase()