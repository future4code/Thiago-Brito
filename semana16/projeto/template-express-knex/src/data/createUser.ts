import { connection } from "..";

export const createUser = async (
    name: string,
    nickname: string,
    email: string 
  ): Promise<void> => {
    await connection
      .insert({
        name: name,
        nickname: nickname,
        email: email,
      })
      .into("Users");
  };