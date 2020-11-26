import { User } from "../model/User"
import BaseDatabase from "./BaseDatabase"

class UserDatabase extends BaseDatabase {

    private tableName: string = "labook_users"
    public async login(email: string):Promise<User> {
        try {
            const result: any = await BaseDatabase.connection(this.tableName)
                .select("*")
                .where({ email })
            return new User(
                result[0].id,
                result[0].name,
                result[0].email,
                result[0].password
            )


        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async signup( id: string, name:string, email: string, password: string,) {
        try {
            const result: any = await BaseDatabase.connection(this.tableName)
                .insert({
                    id,
                    name,
                    email,
                    password
                })
            return result[0]

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}

export const userDatabase: UserDatabase = new UserDatabase()