import Mail = require("nodemailer/lib/mailer");
import SMTPTransport from "nodemailer/lib/smtp-transport";
import nodemailer from 'nodemailer'

export const config: SMTPTransport.Options = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "95d73974244761",
        pass: "910443aab6b6ad"
    }
}

const transporter = nodemailer.createTransport(config);

export async function writeEmail(from: string,
    to: string,
    subject: string,
    text: string,
    html: string) {

    const mailContent: Mail.Options = {
        from,
        to,
        subject,
        text,
        html
    }

    transporter.sendMail(mailContent, (error: Error | null, info: any) => {
        if (error) {
            throw new Error(error.message);
        } else {
            console.log("E-mail enviado!")
        }
    })
}

