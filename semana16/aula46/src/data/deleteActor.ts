import {connection} from "../index"

export const deleteActor = async (id: string): Promise<void | Number> => {
  try {
    const result = await connection("Actor")
    .delete()
    .where("id",id)
    return result;

  } catch (error) {
    console.log(error)
  }
}
