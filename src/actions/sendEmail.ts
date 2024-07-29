"use server";
import { Resend } from "resend";
import { getErrorMessage } from "@/lib/_utils";
import { FormFields } from "@/app/components/sections/contact/ContactForm";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormFields) => {
  const senderName = formData.name;
  const senderEmail = formData.email;
  const message = formData.message;

  let data;

  try {
    data = await resend.emails.send({
      from: `${senderName} <onboarding@resend.dev>`,
      to: "aydenreese03@gmail.com",
      subject: "Message from website contact form",
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return data;
};
