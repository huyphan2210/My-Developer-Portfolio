import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Main.scss";
import HomePage from "../../pages/home/HomePage";
import About from "../../pages/about/About";
import Projects from "../../pages/projects/Projects";
import Contact from "../../pages/contact/Contact";
import NotFound from "../../pages/not-found/NotFound";

const Main: FC = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default Main;
