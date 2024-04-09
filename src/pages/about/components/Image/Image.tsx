import { FC, useRef, CSSProperties } from "react";
import "./Image.scss";
import useElementInView from "../../../../hooks/useElementInView";

interface ImageProps {
  src: string;
  originalStyle: CSSProperties;
  inViewStyle: CSSProperties;
  className: string;
  name: string;
  isFromDesktop?: boolean;
}

const Image: FC<ImageProps> = ({
  src,
  originalStyle,
  inViewStyle,
  className,
  name,
  isFromDesktop,
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const isImageInView = isFromDesktop
    ? isFromDesktop
    : useElementInView(imageRef);

  return (
    <div className="image-wrapper" ref={imageRef}>
      <img
        className={className}
        src={src}
        alt="Image"
        loading="lazy"
        style={isImageInView ? inViewStyle : originalStyle}
      />
      <p style={isImageInView ? inViewStyle : originalStyle}>{name}</p>
    </div>
  );
};

Image.defaultProps = {
  isFromDesktop: false,
};

export default Image;
