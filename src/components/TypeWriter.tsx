import { useState, useEffect, FC } from "react";

interface TypeWriterProps {
  text: string;
  speed: number;
}
const TypeWriter: FC<TypeWriterProps> = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [currentIndex, text, speed]);

  useEffect(() => {
    if (!isTyping) return;

    const cursorInterval = setInterval(() => {
      setIsTyping(true);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [isTyping]);

  return (
    <span>
      {displayText}
      {isTyping && "|"}
    </span>
  );
};

export default TypeWriter;
