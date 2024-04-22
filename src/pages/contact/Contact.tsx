import { FC } from "react";
import "./Contact.scss";
import SideBarForContactPage from "./components/SideBarForContactPage/SideBarForContactPage";

const Contact: FC = () => {
  return (
    <section className="contact-page">
      <SideBarForContactPage />
    </section>
  );
};

export default Contact;
