import { connection } from "..";
import { inputData,  } from "../types/user";

export const filterUserOrder = async (ordena:inputData): Promise<void> =>{
    const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE name LIKE "%${ordena.name}%" OR type LIKE "%${ordena.type}%"
      ORDER BY "${ordena.orderBy}" "${ordena.orderType}"
    `)
    return result [0]
}