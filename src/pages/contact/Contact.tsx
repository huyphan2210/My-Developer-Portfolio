import { FC } from "react";
import "./Contact.scss";
import SideBarForContactPage from "./components/SideBarForContactPage/SideBarForContactPage";

const Contact: FC = () => {
  const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    
  };
  return (
    <section className="contact-page">
      <SideBarForContactPage />
      <section className="contact-page__content">
        <form onSubmit={submit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name..."></input>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email..."></input>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your message..."></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
