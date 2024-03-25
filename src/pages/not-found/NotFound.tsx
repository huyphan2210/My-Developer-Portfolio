import { FC } from "react";
import "./NotFound.scss";
import TypeWriter from "../../components/TypeWriter";

const NotFound: FC = () => {
  return (
    <>
      <h1>
        <TypeWriter text="Sorry, this page doesn't exist" speed={50} />
      </h1>
    </>
  );
};

export default NotFound;
