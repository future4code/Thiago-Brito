import {connection} from "../connection/knex";  
import { User, USER_ROLES } from "../types/type";

export default async function loginData
(  email:string

    ):Promise <User> {
  try {
    const result = await connection("User_Arq")
    .select("*")
    .where({email})
    return result[0]

  } catch (error) {
      throw new Error(error.sqlMessage || error.message)
      
  }
}   