import {Request, Response} from "express"
import { loginBusiness } from "../business/user/loginBusiness";

export default async function login(req: Request, res: Response) {
    
    try {
        const loginData = {
            email: req.body.email,
            password: req.body.password,
        }

        const token = await loginBusiness(loginData);

        res.status(200).send({ token, message:"user logged in" });

    } catch (error) {   
        res.status(400).send({ error: error.message });
    }


}