import nodemailer from 'nodemailer'
import type { Email } from '~/interfaces/email'

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

export const sendEmail = async (event: any) => {
    const body = await readBody(event)
    const email: Email = JSON.parse(body)

    const emailBody = 
    `[Acadêmico?]: ${email.academic ? 'Sim' : 'Não'}
    [Verba do projeto]: ${email.budget}
    ${email.text}`

    try {
        await smtp.sendMail({
            from: email.from,
            to: EMAIL_ADDRESS,
            subject: email.subject,
            text: emailBody
        })
        return true
    } catch (error) {
        console.error("[ERROR]: Error sending email:\n", error)
        return false
    }
}