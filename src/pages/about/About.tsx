import { FC } from "react";
import "./About.scss";
import TypeWriter from "../../components/TypeWriter";

const About: FC = () => {
  const paragraph = `Hi there! I'm Huy Phan, a passionate web developer born and raised in the beautiful country of Vietnam. With over ${
    new Date().getFullYear() - 2022
  } years of hands-on experience in the field, I've had the opportunity to work on various web development projects, honing my skills and expertise along the way.`;
  return (
    <section className="about-page">
      <TypeWriter text={paragraph} color="var(--text-color-1)" speed={25} />
    </section>
  );
};

export default About;
