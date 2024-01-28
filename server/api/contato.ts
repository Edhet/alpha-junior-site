import * as emailController from '../service/email'

export default defineEventHandler((event) => {
    emailController.sendEmail(event);
})