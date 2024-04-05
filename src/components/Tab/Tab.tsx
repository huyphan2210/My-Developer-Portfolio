import { FC, MouseEventHandler } from "react";
import "./Tab.scss";
import closeIcon from "../../assets/icons/close.svg";

interface TabProps {
  content: string;
  isActive: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
  onClose: MouseEventHandler<HTMLImageElement>;
}

const Tab: FC<TabProps> = ({ content, isActive, onClick, onClose }) => (
  <div className={isActive ? "tab active" : "tab"} onClick={onClick}>
    <span>{content}</span>
    <img src={closeIcon} loading="lazy" alt="Close Icon" onClick={onClose} />
  </div>
);

export default Tab;
