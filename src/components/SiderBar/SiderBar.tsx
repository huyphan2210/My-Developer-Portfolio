import { FC } from "react";
import "./SideBar.scss";

interface SideBarProps {
  children: React.ReactNode;
}

const SideBar: FC<SideBarProps> = ({ children }) => {
  return <section className="side-bar">{children}</section>;
};

export default SideBar;
