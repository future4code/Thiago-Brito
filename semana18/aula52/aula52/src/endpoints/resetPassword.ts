import { Request, Response } from 'express'
import selectUserByEmail from '../data/selectUserByEmail';
import { updatePassword } from '../data/updatePassword';
import { hash } from '../services/hashManager';
import { writeEmail } from '../services/mailer'

export async function resetPassword(req: Request, res: Response) {
    try {
        let errorCode = 400;
        const email = req.body.email;
        if (!email) {
            throw new Error("Por favor insira um e-mail válido!");
        }
        const user = await selectUserByEmail(email);
        if (!user) {
            errorCode = 404;
            throw new Error("Usuário não encontrado!");
        }

        const password = "bananinha";
        const hashPassword = await hash(password);

        await updatePassword(user.id, hashPassword)

        await writeEmail(
            "Matheus <matheus@gmail.com>",
            user.email,
            "Salve!",
            `Opa, ${user.name},tudo bom?`,
            `<p>Opa! ${user.name}, Sua nova senha é ${password}</>`,
        )

        res.send({ message: "Senha atualizada com sucesso!" }).status(200);

    } catch (error) {
        res.send(error).send({ message: "Deu ruim" })
    }
}