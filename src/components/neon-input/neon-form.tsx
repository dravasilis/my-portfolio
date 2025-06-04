import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import Snackbar from "../snackbar/snackbar";
import "./neon-form.css";

function NeonForm() {
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const sendEmail = (form: React.FormEvent<HTMLFormElement>) => {
    form.preventDefault();
    if (!form) {
      console.error("Form reference is null");
      return;
    }
    emailjs
      .sendForm("service_sx8ml3x", "template_93c7r3o", form.currentTarget, {
        publicKey: "HI8mniYBvI3ShYrAv",
      })
      .then(
        () => {
          setEmail("");
          setBody("");
          setSubmitted(true);
          console.log(email);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="login-box neon-sign-purple">
      <h2>Form</h2>
      <form
        id="contact-form"
        onSubmit={sendEmail}
        className=" flex flex-col gap-4"
      >
        <div className="user-box   ">
          <label className="text-glow-blue text-[#00e1ff]">Your Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="neon-sign-blue rounded-xl p-2"
            name="user_email"
          ></input>
        </div>
        <div className="user-box ">
          <label className="text-glow-blue text-[#00e1ff]">Message</label>
          <textarea
            name="body"
            onChange={(e) => setBody(e.target.value)}
            className=" neon-sign-blue rounded-xl p-2"
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <Snackbar
        isSubmitted={submitted}
        message="Email sent successfully!"
        endOfMessage={() => setSubmitted(false)}
      ></Snackbar>
    </div>
  );
}

export default NeonForm;
