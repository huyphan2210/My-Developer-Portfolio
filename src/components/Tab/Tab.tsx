import { FC, MouseEventHandler, useEffect, useRef } from "react";
import "./Tab.scss";
import closeIcon from "../../assets/icons/close.svg";

interface TabProps {
  content: string;
  isActive: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
  onClose: MouseEventHandler<HTMLImageElement>;
}

const Tab: FC<TabProps> = ({ content, isActive, onClick, onClose }) => {
  const tabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabRef.current) {
      setTimeout(() => {
        tabRef.current!.style.opacity = "1";
      }, 0);
    }
  }, []);

  return (
    <div
      className={isActive ? "tab active" : "tab"}
      onClick={onClick}
      ref={tabRef}
    >
      <span>{content}</span>
      <img src={closeIcon} loading="lazy" alt="Close Icon" onClick={onClose} />
    </div>
  );
};

export default Tab;
