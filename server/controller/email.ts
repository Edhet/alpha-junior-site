
import type {Email} from '~/interfaces/email'

export const sendEmail = async (event: any, smtp: any) => {
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
}