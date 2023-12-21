"use client";

import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from '../../Button';
import {useState} from 'react';

const ContactForm = () => {
  const handleSubmit = () => {
    setFormValues({name: "", email: "", message: ""})
  }

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: ""
  })

  return (
    <form
      className="flex flex-col gap-2"
      action={async (formData) => {

        const { error } = await sendEmail(formData);

        if (error) {
          toast.error(String(error))
          return;
        }

        toast.success("Email sent successfully");
      }}
      onSubmit={handleSubmit}
    >
      <div className="grid grid-flow-col grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="sender-name">Name</label>
          <input
            type="text"
            name="senderName"
            id="sender-name"
            maxLength={30}
            className="bg-white/[.03] rounded-sm border-[1px] border-transparent hover:bg-white/[.06] hover:border-[#424242] focus:bg-white/[.06] focus:border-[#838383] active:outline-none focus:outline-none transition-all duration-150 px-3 py-2"
            onChange={(e) => setFormValues({...formValues, name: e.target.value})}
            value={formValues.name}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="sender-email">Email</label>
          <input
            type="email"
            name="senderEmail"
            id="sender-email"
            required
            maxLength={100}
            className="bg-white/[.03] rounded-sm border-[1px] border-transparent hover:bg-white/[.06] hover:border-[#424242] focus:bg-white/[.06] focus:border-[#838383] active:outline-none focus:outline-none transition-all duration-150 px-3 py-2"
            onChange={(e) => setFormValues({...formValues, email: e.target.value})}
            value={formValues.email}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          required
          rows={10}
          className="bg-white/[.03] rounded-sm border-[1px] border-transparent hover:bg-white/[.06] hover:border-[#424242] focus:bg-white/[.06] focus:border-[#838383] active:outline-none focus:outline-none transition-all duration-150 px-3 py-2"
          onChange={(e) => setFormValues({...formValues, message: e.target.value})}
          value={formValues.message}
        />
      </div>
      <SubmitBtn />
    </form>
  );
};

export default ContactForm;
