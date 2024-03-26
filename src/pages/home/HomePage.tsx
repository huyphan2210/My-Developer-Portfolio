import { FC, useState } from "react";
import "./HomePage.scss";
import TypeWriter from "../../components/TypeWriter";

const HomePage: FC = () => {
  const [isLabelDone, setIsLabelDone] = useState(false);
  const [isNameDone, setIsNameDone] = useState(false);

  const speed = 50;
  return (
    <section className="home-page">
      <hgroup className="home-page__author">
        <label className="home-page__author__label" htmlFor="author">
          <TypeWriter
            text="Hi, my name is"
            speed={speed}
            setIsDone={setIsLabelDone}
          />
        </label>
        <h1 className="home-page__author__name" id="author">
          {isLabelDone && (
            <TypeWriter text="Huy Phan" speed={speed} setIsDone={setIsNameDone} />
          )}
        </h1>
        <p className="home-page__author__title">
          {isNameDone && <TypeWriter text="> Software Developer" speed={speed} />}
        </p>
      </hgroup>
    </section>
  );
};

export default HomePage;
