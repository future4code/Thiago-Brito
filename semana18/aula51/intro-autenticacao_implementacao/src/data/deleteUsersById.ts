import { connection } from "..";

export default async function deleteUsersById(
    id: string
) {
    const result = await connection('to_do_list_users')
        .delete()
        .where({ id })

        return result

}