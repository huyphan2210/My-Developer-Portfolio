import { FC, useEffect, useState } from "react";
import AboutStore, { AboutTab } from "../../../../../store/AboutStore";
import TypeWriter from "../../../../../components/TypeWriter";
import authorImg from "../../../../../assets/img/author.png";

interface BioProps {
  aboutStore: AboutStore;
  greetings: string;
  greetings2: string;
  greetings3: string;
}

const Bio: FC<BioProps> = ({
  aboutStore,
  greetings,
  greetings2,
  greetings3,
}) => {
  const [isGreetingsDone, setIsGreetingsDone] = useState(false);
  const [isGreetings2Done, setIsGreetings2Done] = useState(false);
  const speed = 10;

  useEffect(() => {
    if (aboutStore.currentTab === AboutTab.Bio) {
      setIsGreetingsDone(false);
      setIsGreetings2Done(false);
    }
  }, [aboutStore.openTabs]);
  return (
    <div
      className="about__content__page--bio"
      style={{
        display: aboutStore.currentTab === AboutTab.Bio ? "grid" : "none",
      }}
    >
      <p>
        <TypeWriter
          text={greetings}
          speed={speed}
          setIsDone={setIsGreetingsDone}
        />
        <br />
        <br />
        {isGreetingsDone && (
          <TypeWriter
            text={greetings2}
            speed={speed}
            setIsDone={setIsGreetings2Done}
          />
        )}
        <br />
        <br />
        {isGreetings2Done && <TypeWriter text={greetings3} speed={speed} />}
      </p>
      <img src={authorImg} alt="Author" loading="lazy" />
    </div>
  );
};

export default Bio;
