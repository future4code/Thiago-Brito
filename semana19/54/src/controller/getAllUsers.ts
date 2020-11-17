import {Request, Response} from "express"       
import { getUsersBusiness } from "../business/user/getUsersBusiness";
import { getTokenData } from "../services/authenticator";

export default async function getAllUsers(req: Request, res: Response) {
    
    try {
        const input = {
            id:req.params.id,
            token:req.headers.authorization

        }

        const users  = await getUsersBusiness(input);
        const token = getTokenData(input.token as string)


        res.status(200).send(users);

    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}