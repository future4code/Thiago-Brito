import { connection } from '..';

export async function updatePassword(id: string, newPassword: string) {
    await connection.raw(`
    UPDATE to_do_list_users
    SET password = '${newPassword}'
    WHERE id = '${id}'
    `)
}