import { FC, useState } from "react";
import "./HomePage.scss";
import TypeWriter from "../../components/TypeWriter";
import ShiningBackground from "./components/ShiningBackground/ShiningBackground";

interface State {
  isLabelDone: boolean;
  isNameDone: boolean;
  isTitleDone: boolean;
  isCommentDone: boolean;
  isConstDone: boolean;
  isVarDone: boolean;
  isEqualDone: boolean;
}

const HomePage: FC = () => {
  const [state, setState] = useState<State>({
    isLabelDone: false,
    isNameDone: false,
    isTitleDone: false,
    isCommentDone: false,
    isConstDone: false,
    isVarDone: false,
    isEqualDone: false,
  });

  const speed = 40;

  const setIsDone = (key: keyof State) => {
    setState((prevState) => ({
      ...prevState,
      [key]: true,
    }));
  };

  return (
    <section className="home-page">
      <div className="home-page__author">
        <hgroup className="home-page__author__info">
          <label className="home-page__author__info__label" htmlFor="author">
            <TypeWriter
              text="Hi, my name is"
              speed={speed}
              setIsDone={() => setIsDone("isLabelDone")}
            />
          </label>
          <h1 className="home-page__author__info__name" id="author">
            {state.isLabelDone && (
              <TypeWriter
                text="Huy Phan"
                speed={speed}
                setIsDone={() => setIsDone("isNameDone")}
              />
            )}
          </h1>
          <p className="home-page__author__info__title">
            {state.isNameDone && (
              <TypeWriter
                text="> Software Developer"
                speed={speed}
                setIsDone={() => setIsDone("isTitleDone")}
              />
            )}
          </p>
        </hgroup>
        <div className="home-page__author__github">
          <p>
            {state.isTitleDone && (
              <TypeWriter
                text="// find my profile on Github:"
                speed={speed}
                setIsDone={() => setIsDone("isCommentDone")}
              />
            )}
          </p>
          <p>
            {state.isCommentDone ? (
              <>
                <TypeWriter
                  text="const "
                  speed={speed}
                  color="var(--purple)"
                  setIsDone={() => setIsDone("isConstDone")}
                />
                {state.isConstDone && (
                  <TypeWriter
                    text="githubLink "
                    speed={speed}
                    color="var(--green)"
                    setIsDone={() => setIsDone("isVarDone")}
                  />
                )}
                {state.isVarDone && (
                  <TypeWriter
                    text="= "
                    speed={speed}
                    color="white"
                    setIsDone={() => setIsDone("isEqualDone")}
                  />
                )}
                {state.isEqualDone && (
                  <span
                    className="home-page__author__github__link"
                    onClick={() =>
                      window.open("https://github.com/huyphan2210", "_blank")
                    }
                  >
                    <TypeWriter
                      text=" “https://github.com/huyphan2210”"
                      speed={speed}
                      color="var(--orange-2)"
                      setIsDone={() => setIsDone("isEqualDone")}
                    />
                  </span>
                )}
              </>
            ) : (
              <span style={{ opacity: 0 }}>placeholder</span>
            )}
          </p>
        </div>
        {window.innerWidth < 1024 && <ShiningBackground />}
      </div>
      <div className="home-page__img">
        <ShiningBackground />
      </div>
    </section>
  );
};

export default HomePage;
