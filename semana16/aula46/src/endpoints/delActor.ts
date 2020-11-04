import {Request, Response} from "express"
import {deleteActor} from "../data/deleteActor"

export const delActor = async (req: Request, res: Response) => {
    try {
      const result = await deleteActor(req.params.id);
      res.status(200).send(result)
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  };