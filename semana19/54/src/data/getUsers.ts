import {connection} from "../connection/knex";  

export default async function getUsers(){
    
  try {
      const result = await connection.raw(
          `SELECT * FROM User_Arq`
      )
        return result [0]
      
  } catch (error) {
      throw new Error(error.sqlMessage || error.message)
      
  }
}   
