import nodemailer from 'nodemailer'
import * as emailController from '../../server/controller/email'

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

export default defineEventHandler((event) => {
    emailController.sendEmail(event,smtp);
})