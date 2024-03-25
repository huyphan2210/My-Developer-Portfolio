import { FC } from "react";
import "./HomePage.scss";
import TypeWriter from "../../components/TypeWriter";

const HomePage: FC = () => {
  return (
    <hgroup>
      <label htmlFor="author">
        <TypeWriter text="Hi, my name is" speed={30} />
      </label>
      <h1 id="author">
        <TypeWriter text="Huy Phan" speed={50} />
      </h1>
    </hgroup>
  );
};

export default HomePage;
