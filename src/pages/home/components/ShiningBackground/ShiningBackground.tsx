import { FC } from "react";
import "./ShiningBackground.scss";
import { Property } from "csstype";
interface ShiningBackgroundProps {
  position?: Property.Position;
}

const ShiningBackground: FC<ShiningBackgroundProps> = ({ position }) => {
  return (
    <div className="shining-bg" style={{ position: position }}>
      <div className="shining-bg__green"></div>
      <div className="shining-bg__purple"></div>
    </div>
  );
};

ShiningBackground.defaultProps = {
  position: "absolute",
};

export default ShiningBackground;
