import { connection } from "..";

export const editUser = async (
    name: string,
    nickname: string,
    id: string 
  ): Promise<void> => {
    await connection
        .update
        .where
  };