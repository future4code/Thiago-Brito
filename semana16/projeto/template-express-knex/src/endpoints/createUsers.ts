import { Request, Response } from "express"
import { createUser } from "../data/createUser";

export const createUsers = async (req: Request, res: Response)=>{
    try{ 
        
    const { name, nickname, email } = req.body;
        if (!(name && nickname && email)) {
        throw new Error("Digite todos os campos")
    }
    const users = await createUser(name, nickname, email)
    
     
       res.status(200).send({chaveDoRetorno: "Usuário criado com sucesso!"});
    }catch(error){
      
       res.status(400).send({chaveDoErro: "Usuário não foi criado."});
    }
 };