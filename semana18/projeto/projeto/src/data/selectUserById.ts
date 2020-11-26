import { connection } from "..";
import { User } from "../types/types";

export default async function selectUserById(
    id: string
    ): Promise<User> {
        try {
            const result = await connection.raw
            (`SELECT id_user, name, email FROM Users_Cookenu
                WHERE id_user = '${id}';
            `)
            return result[0]
    
        } catch (error) {
            console.log(id)
            throw new Error (error.sqlMessage || error.message)
            
        }


        


    }
