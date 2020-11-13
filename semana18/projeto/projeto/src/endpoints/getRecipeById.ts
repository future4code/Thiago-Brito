import { Request, Response } from "express";
import selectRecipeById from "../data/selectRecipeById";

export default async function getRecipeById(
   req: Request,
   res: Response
) {
   try {
      const result = await selectRecipeById(req.params.id)

      if (!result) {
         throw new Error("Tarefa não encontrada")
      }

      res.status(200).send({
         id: result.id,
         title: result.title,
         description: result.description,
         deadline: result.deadline, 
         status: result.status,
         authorId: result.author_id,
         authorNickname: result.nickname
      })

   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage
      })
   }
}