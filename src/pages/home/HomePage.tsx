import { FC, useState } from "react";
import "./HomePage.scss";
import TypeWriter from "../../components/TypeWriter";

const HomePage: FC = () => {
  const [isLabelDone, setIsLabelDone] = useState(false);
  const [isNameDone, setIsNameDone] = useState(false);
  return (
    <section className="home-page">
      <hgroup className="home-page__author">
        <label className="home-page__author__label" htmlFor="author">
          <TypeWriter
            text="Hi, my name is"
            speed={100}
            setIsDone={setIsLabelDone}
          />
        </label>
        <h1 className="home-page__author__name" id="author">
          {isLabelDone && (
            <TypeWriter text="Huy Phan" speed={100} setIsDone={setIsNameDone} />
          )}
        </h1>
        <p className="home-page__author__title">
          {isNameDone && <TypeWriter text="> Software Developer" speed={100} />}
        </p>
      </hgroup>
    </section>
  );
};

export default HomePage;
