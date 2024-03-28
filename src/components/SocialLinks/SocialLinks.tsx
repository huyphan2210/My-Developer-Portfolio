import { FC } from "react";
import "./SocialLinks.scss";
import githubIcon from "../../assets/icons/github.svg";
import linkedInIcon from "../../assets/icons/linkedIn.svg";

const SocialLinks: FC = () => {
  return (
    <div className="social-links">
      <div className="social-links__find-me">
        <span>find me in:</span>
      </div>
      <nav className="social-links__icons">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/huy-phan-7924aa25a/"
              target="_blank"
            >
              <img src={linkedInIcon} alt="LinkedIn" loading="lazy" />
            </a>
          </li>
          <li>
            <a href="https://github.com/huyphan2210" target="_blank">
              <img src={githubIcon} alt="Github" loading="lazy" />
            </a>
          </li>
          <li>
            <a href="https://github.com/huyphan2210" target="_blank">
              <span>@huyphan</span>
              <img src={githubIcon} alt="Github" loading="lazy" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SocialLinks;
