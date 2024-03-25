import { useState, useEffect, FC } from "react";

interface TypeWriterProps {
  text: string;
  speed: number;
  setIsDone?: React.Dispatch<React.SetStateAction<boolean>>;
}
const TypeWriter: FC<TypeWriterProps> = ({ text, speed, setIsDone }) => {
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
        if (setIsDone) setIsDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayText}
      {isTyping && "|"}
    </span>
  );
};

export default TypeWriter;
