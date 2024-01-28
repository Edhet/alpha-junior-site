import nodemailer from 'nodemailer'
import type { Email } from '~/interfaces/email'


const smtp = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "alphajunior@uniriotec.br",
        pass: useRuntimeConfig().emailPass
    },
    tls: {
        rejectUnauthorized: false
    }
})

export const sendEmail = async (event: any) => {
    const body = await readBody(event)
    const email: Email = JSON.parse(body);
    try {
        await smtp.sendMail({
            from: email.from,
            to: "alphajunior@uniriotec.br",
            subject: email.subject,
            text: email.text
        });
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        // Handle the error appropriately (send an error response, log, etc.)
    }
}