"use client";

import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import Button from "@/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { CircleX } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  message: z.string().min(1, "Please enter a message"),
});

export type FormFields = z.infer<typeof formSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const { error } = await sendEmail(data);

    if (error) {
      toast.error(String(error));
      return;
    }

    toast.success("Email sent successfully");
    reset();
  };

  return (
    <form
      className="flex flex-col gap-2 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full grid grid-flow-row grid-cols-1 sm:grid-flow-col sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            {...register("name")}
            type="text"
            name="name"
            id="name"
            maxLength={30}
            className="bg-white/[.03] text-white rounded-sm border-[1px] border-transparent hover:bg-white/[.06] hover:border-[#424242] focus:bg-white/[.06] focus:border-[#838383] active:outline-none focus:outline-none transition-all duration-150 px-3 py-2"
          />
          {errors.name && (
            <div className="text-white text-xs">{errors.name.message}</div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            {...register("email")}
            name="email"
            id="email"
            maxLength={100}
            className="bg-white/[.03] text-white rounded-sm border-[1px] border-transparent hover:bg-white/[.06] hover:border-[#424242] focus:bg-white/[.06] focus:border-[#838383] active:outline-none focus:outline-none transition-all duration-150 px-3 py-2"
          />
          {errors.email && (
            <div className="text-white text-xs">{errors.email.message}</div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1 mb-4 w-full">
        <label htmlFor="message">Message</label>
        <textarea
          {...register("message")}
          name="message"
          id="message"
          rows={10}
          className="bg-white/[.03] text-white rounded-sm border-[1px] border-transparent hover:bg-white/[.06] hover:border-[#424242] focus:bg-white/[.06] focus:border-[#838383] active:outline-none focus:outline-none transition-all duration-150 px-3 py-2"
        />
        {errors.message && (
          <div className="text-white text-xs">{errors.message.message}</div>
        )}
      </div>
      <Button isSubmitting={isSubmitting} />
    </form>
  );
};

export default ContactForm;
