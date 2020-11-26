import { connection } from "..";
import { User } from "../types/types";

export default async function selectUserInfo(
    role: string
    ): Promise<any> {

        const result = await connection.raw
        (`SELECT id_user, name, email FROM Users_Cookenu
            WHERE role = '${role}';
        `)

        return result[0][0]
        


    }


    
