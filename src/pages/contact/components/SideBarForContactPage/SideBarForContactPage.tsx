import { FC, SyntheticEvent, useState } from "react";
import "./SideBarForContactPage.scss";
import SideBar from "../../../../components/SiderBar/SiderBar";
import TypeWriter from "../../../../components/TypeWriter";

import emailIcon from "../../../../assets/icons/email.svg";
import phoneIcon from "../../../../assets/icons/phone.svg";

import linkedInIcon from "../../../../assets/icons/linkedIn.svg";
import githubIcon from "../../../../assets/icons/github.svg";

const SideBarForContactPage: FC = () => {
  const myEmail = "huy.phan@outlook.com";
  const myPhone = "+84387578517";
  const speed = 25;

  const [isContactOpened, setIsContactOpened] = useState(false);
  const handleContactToggle = (
    e: SyntheticEvent<HTMLDetailsElement, Event>
  ) => {
    const isOpened = e.currentTarget.hasAttribute("open");
    setIsContactOpened(isOpened);
  };

  const [isFindMeOpened, setIsFindMeOpened] = useState(false);
  const handleFindMeToggle = (e: SyntheticEvent<HTMLDetailsElement, Event>) => {
    const isOpened = e.currentTarget.hasAttribute("open");
    setIsFindMeOpened(isOpened);
  };

  return (
    <SideBar>
      <details
        open
        className="side-bar--contact-me__contact"
        onToggle={handleContactToggle}
      >
        <summary>Contact</summary>
        <button
          type="button"
          onClick={() => {
            window.location.href = "mailto:" + myEmail;
          }}
        >
          <img src={emailIcon} loading="lazy" alt="Email Icon" />
          {isContactOpened && <TypeWriter text={myEmail} speed={speed} />}
        </button>
        <button type="button">
          <img src={phoneIcon} loading="lazy" alt="Email Icon" />
          {isContactOpened && <TypeWriter text={myPhone} speed={speed} />}
        </button>
      </details>
      <details
        open
        className="side-bar--contact-me__find-me"
        onToggle={handleFindMeToggle}
      >
        <summary>Find me also in</summary>
        <a
          href="https://www.linkedin.com/in/huy-phan-7924aa25a/"
          target="_blank"
        >
          <img src={linkedInIcon} loading="lazy" alt="LinkedIn" />
          {isFindMeOpened && <TypeWriter text="Huy Phan" speed={speed} />}
        </a>
        <a href="https://github.com/huyphan2210" target="_blank">
          <img src={githubIcon} loading="lazy" alt="LinkedIn" />
          {isFindMeOpened && <TypeWriter text="huyphan2210" speed={speed} />}
        </a>
      </details>
    </SideBar>
  );
};

export default SideBarForContactPage;
