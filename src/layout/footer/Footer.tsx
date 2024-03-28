import { FC } from "react";
import "./Footer.scss";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import RouteURLs from "../../RouteUrls";

const Footer: FC = () => {
  const currentPath = window.location.pathname;
  return (
    <footer
      style={
        currentPath === RouteURLs.HOME && window.innerWidth < 1024
          ? { display: "none" }
          : {}
      }
    >
      <SocialLinks />
    </footer>
  );
};

export default Footer;
