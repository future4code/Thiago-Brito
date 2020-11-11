import { connection } from "../index";

export default async function insertUser(
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: USER_ROLES,
    location:string[]
) {
    await connection.insert({
        id,
        name,
        nickname,
        email,
        password,
        role,
        location
    }).into('to_do_list_users')
}

export enum USER_ROLES {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
    
}