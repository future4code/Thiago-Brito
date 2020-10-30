import { Request, Response } from "express"
import { editUser } from "../data/editUser";

export const editUsers = async (req: Request, res: Response)=>{
    try{ 
        const {id, name, nickname} =req.body;
        const editU= await editUser(id, name, nickname)
        res.status(200).send({chaveDoRetorno: "Usuário criado com sucesso!"});
    

    }catch(error){
        res.status(400).send({chaveDoErro: "Usuário não foi criado."});

    }
 };