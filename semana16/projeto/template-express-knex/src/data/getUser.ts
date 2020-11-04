import { connection } from "..";

export const getUser = async (id:string):Promise<any> =>{
    try {
        const result = await connection.raw(
            `SELECT * FROM Users WHERE id = "${id}"`
        )
        return result [0]
    } catch (error) {
        
    }

}