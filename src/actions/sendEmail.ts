"use server";
import { Resend } from 'resend'
import { validateString, getErrorMessage } from '@/lib/_utils'

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderName = formData.get("senderName");
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    //server side validation
    if (!validateString(senderName)) {
        return {
            error: "Invalid sender name"
        }
    }

    if (!validateString(senderEmail)) {
        return {
            error: "Invalid sender email"
        }
    }

    if (!validateString(message)) {
        return {
            error: "Invalid message"
        }
    }

    let data;
    try {
        data = await resend.emails.send({
            from: `${senderName} <onboarding@resend.dev>`,
            to: 'aydenreese03@gmail.com',
            subject: 'Message from website contact form',
            reply_to: senderEmail as string,
            text: message as string,
        });
    }
    catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    };

    return data;
    
};