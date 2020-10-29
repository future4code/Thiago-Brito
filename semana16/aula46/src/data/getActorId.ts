import {connection} from ".."

export async function getActorId(id:string):Promise<any> {
    try {
        const result = await connection
        .select("*")
        .from("Actor")
        .where("id","LIKE",`${id}`)
        return result
    } catch (error) {
        console.log(error)
    }
}