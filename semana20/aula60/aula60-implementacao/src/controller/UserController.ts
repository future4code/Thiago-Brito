import { Request, Response } from "express";
import userBusiness, { UserBusiness } from "../business/UserBusiness";
import { CustomError } from "../errors/CustomError";

export class UserController {

   constructor(
      private userBusiness: UserBusiness
   ) { }

   public async signup(req: Request, res: Response) {
      try {
         const { name, role, email, password } = req.body
         const result = await userBusiness.signup(
            name,
            email,
            password,
            role
         );
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async login(req: Request, res: Response) {
      try {
         const { email, password } = req.body
         const result = await userBusiness.login(email, password);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }  
   public async userId(req:Request, res:Response){
      try {
         const{id} = req.params
         const user = await userBusiness.userId(id)
         res.status(200).send (user)
      } catch (error) {
         throw new CustomError(error.statusCode, error.message)
      }
   }
}

export default new UserController(userBusiness)