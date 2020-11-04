import { Request, Response } from "express"
import { getUser } from "../data/getUser";

export const getUsers = async (req: Request, res: Response)=>{
    try{ 
    const result = await getUser(req.params.id)
    if (!result) {
        res.statusCode = 404
        throw new Error("Missing parameters")
     }
    res.status(200).send(result)
    }
    catch(error){
      console.log(error)
    }
 };