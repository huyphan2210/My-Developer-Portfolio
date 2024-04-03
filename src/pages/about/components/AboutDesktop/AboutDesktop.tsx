import { FC } from "react";
import { observer } from "mobx-react";
import AboutStore from "../../../../store/AboutStore";
import "./AboutDesktop.scss";
import SideBarForAboutPage from "../SideBarForAboutPage/SideBarForAboutPage";

const AboutDesktop: FC = () => {
  const aboutStore = new AboutStore();
  return (
    <section className="about">
      <SideBarForAboutPage aboutStore={aboutStore} />
    </section>
  );
};

export default observer(AboutDesktop);
