import nodemailer from 'nodemailer'
import type { Email } from '~/types/email'
import { validEmail, validString } from '~/utils/email-validation'

const EMAIL_ADDRESS = "alphajunior@uniriotec.br"

const smtp = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: EMAIL_ADDRESS,
        pass: useRuntimeConfig().emailPass
    },
    tls: {
        rejectUnauthorized: false
    }
})

export default defineEventHandler(async (event) => {
    const email: Email = await readBody(event)
    if (invalidEmail(email))
        return { error: true, code: 400, message: "Dados inválidos" };

    const mailOptions = {
        from: email.from,
        to: EMAIL_ADDRESS,
        subject: email.subject,
        text: `
        [Acadêmico?]: ${email.academic ? 'Sim' : 'Não'}
        [Verba do projeto]: ${email.budget}
        --------------------------------------
        ${email.text}`
    }

    try {
        await smtp.sendMail(mailOptions)
        return { error: false, code: 200, message: "Email enviado com sucesso" };
    } catch (e) {
        return { error: true, code: 500, message: "Ocorreu um erro ao enviar o email" };
    }
})

function invalidEmail(email: Email): boolean {
    const errorMessages: any = {
        from: validEmail(email.from),
        subject: validString(email.subject, 'sm'),
        text: validString(email.text, 'bg')
    }
    return errorMessages.from || errorMessages.subject || errorMessages.text
}