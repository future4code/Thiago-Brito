import { connection } from "..";

export const filterUser = async (name:string): Promise<void> =>{
    const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE name LIKE "%${name}%"
    `)
    return result [0]
}