import { connection } from "../index";
import { USER_ROLES } from "../types/types";

export default async function insertUser(
    id_user: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
    ): Promise<any> {

    await connection.insert({
        id_user,
        name,
        email,
        password,
        role
    }).into('Users_Cookenu')
}

