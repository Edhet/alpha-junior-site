import { Email } from '~/interfaces/email'
import * as collaboratorController from '../controller/collaborator'
import nodemailer from 'nodemailer'

const router = createRouter()

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

router.get('/colaboradores', defineEventHandler(collaboratorController.getCollaborators))

router.post('/contato', defineEventHandler(async (event) => {
    const body = await readBody(event)
    const email: Email = JSON.parse(body);
    console.log()
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

}))

export default useBase('/api', router.handler)