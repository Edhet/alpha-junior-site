import * as emailController from '../service/email-controller'

export default defineEventHandler((event) => {
    emailController.sendEmail(event);
})