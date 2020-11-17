import {connection} from "../connection/knex";  
import { USER_ROLES } from "../types/type";

export default async function insertUser
(   id:string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
    ):Promise <void> {
  try {
      await connection  
        .insert({
            id,
            name,
            email,
            password,
            role
        })
        .into("User_Arq");
      
  } catch (error) {
      throw new Error(error.sqlMessage || error.message)
      
  }
}   

