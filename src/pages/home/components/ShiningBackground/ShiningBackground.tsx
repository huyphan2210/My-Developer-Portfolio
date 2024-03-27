import { FC } from "react";
import "./ShiningBackground.scss";

const ShiningBackground: FC = () => {
  return (
    <div className="shining-bg">
      <div className="shining-bg__green"></div>
      <div className="shining-bg__purple"></div>
    </div>
  );
};

export default ShiningBackground;
