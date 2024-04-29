import { FC, useRef, LegacyRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.scss";
import SideBarForContactPage from "./components/SideBarForContactPage/SideBarForContactPage";

const Contact: FC = () => {
  const formRef: LegacyRef<HTMLFormElement> = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setIsSent(false);
    setIsError(false);
    emailjs
      .sendForm("service_ppz2hdt", "template_deyjt1h", formRef.current!, {
        publicKey: "lihvoY2c0YdUNMcHr",
      })
      .then(
        () => {
          setIsSent(true);
        },
        () => {
          setIsError(true);
        }
      );
  };
  return (
    <section className="contact-page">
      <SideBarForContactPage />
      <section className="contact-page__content">
        <form onSubmit={submit} ref={formRef}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="from_name"
              placeholder="Your name..."
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email..."
            ></input>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button type="submit">Submit</button>
          {isError && <p style={{ color: "red" }}>Something is wrong</p>}
          {isSent && (
            <p style={{ color: "var(--green)" }}>
              Your message was sent successfully
            </p>
          )}
        </form>
      </section>
    </section>
  );
};

export default Contact;
