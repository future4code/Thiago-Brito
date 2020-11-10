import { connection } from "..";

export const filterUserParams = async (type:string): Promise<void> =>{
    const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE type LIKE "%${type}%"
    `)
    return result [0]
}