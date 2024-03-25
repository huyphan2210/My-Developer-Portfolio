import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Main.scss";
import HomePage from "../../pages/home/HomePage";

const Main: FC = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<HomePage />}></Route>
          <Route path="/projects" element={<HomePage />}></Route>
          <Route path="/contact" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default Main;
