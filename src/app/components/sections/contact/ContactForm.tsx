"use client";

import { sendEmail } from "@/actions/sendEmail";

const ContactForm = () => {
  return (
    <form
      className="flex flex-col gap-2"
      action={async (formData) => {

        const { error } = await sendEmail(formData);

        if (error) {
          alert(error);
          return;
        }

        alert("Email sent successfully");

      }}
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
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          required
          rows={10}
          className="bg-white/[.03] rounded-sm border-[1px] border-transparent hover:bg-white/[.06] hover:border-[#424242] focus:bg-white/[.06] focus:border-[#838383] active:outline-none focus:outline-none transition-all duration-150 px-3 py-2"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
