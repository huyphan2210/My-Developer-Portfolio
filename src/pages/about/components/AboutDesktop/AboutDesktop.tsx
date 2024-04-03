import { FC } from "react";
import "./AboutDesktop.scss";
import SideBarForAboutPage from "../SideBarForAboutPage/SideBarForAboutPage";

const AboutDesktop: FC = () => {
  return (
    <section className="about">
      <SideBarForAboutPage />
    </section>
  );
};

export default AboutDesktop;
