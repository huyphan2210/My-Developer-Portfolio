import { FC, useEffect, useState, useRef } from "react";
import "./HomePage.scss";
import TypeWriter from "../../components/TypeWriter";
import ShiningBackground from "./components/ShiningBackground/ShiningBackground";
// import codeImg from "../../assets/img/code.png";

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

  const codeRef = useRef<HTMLDivElement>(null);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const speed = 40;

  const setIsDone = (key: keyof State) => {
    setState((prevState) => ({
      ...prevState,
      [key]: true,
    }));
  };

  // const [listOfCode, setListOfCode] = useState([
  //   <img src={codeImg} alt="code" loading="lazy" />,
  //   <img src={codeImg} alt="code" loading="lazy" />,
  //   <img src={codeImg} alt="code" loading="lazy" />,
  //   <img src={codeImg} alt="code" loading="lazy" />,
  //   <img src={codeImg} alt="code" loading="lazy" />,
  // ]);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", () =>
        setWindowSize(window.innerWidth)
      );
    };
  }, []);

  // useEffect(() => {
  //   if (codeRef.current && state.isEqualDone) {
  //     const interval = setInterval(() => {
  //       const codes = codeRef.current!.getElementsByTagName("img");
  //       setListOfCode((prev) => [
  //         <img src={codeImg} alt="code" loading="lazy" />,
  //         ...prev,
  //       ]);
  //       for (let i = 0; i < codes.length; i++) {
  //         codes[i].style.transform = "translateY(100%)";
  //       }
  //       setListOfCode((prev) => {
  //         prev.pop();
  //         return prev;
  //       });
  //     }, 1000);

  //     return () => clearInterval(interval);
  //   }
  // }, [state.isEqualDone, listOfCode]);

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
        {windowSize < 1024 && <ShiningBackground />}
      </div>
      <div className="home-page__img" ref={codeRef}>
        {/* {listOfCode.map((code) => code)} */}
        <ShiningBackground />
      </div>
    </section>
  );
};

export default HomePage;
