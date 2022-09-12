import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const test1 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // "YOUR_SERVICE_ID:service_6w3gnfm"
    //"YOUR_TEMPLATE_ID:template_s4c8jmp"
    //"YOUR_PUBLIC_KEY:Ho1qi7pDEmxoOx95b"
    let paramData={to_name:"",to_email:"",message:""}
    emailjs
      .sendForm(
        "service_6w3gnfm",
        "template_s4c8jmp",
        paramData,
        "Ho1qi7pDEmxoOx95b"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="to_name" />
      <label>Email</label>
      <input type="email" name="to_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
export default test1;
