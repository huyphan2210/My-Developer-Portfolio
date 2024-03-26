import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Main.scss";
import HomePage from "../../pages/home/HomePage";
import About from "../../pages/about/About";
import Projects from "../../pages/projects/Projects";
import Contact from "../../pages/contact/Contact";
import NotFound from "../../pages/not-found/NotFound";
import RouteURLs from "../../RouteUrls";

const Main: FC = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path={RouteURLs.HOME} element={<HomePage />}></Route>
          <Route path={RouteURLs.ABOUT} element={<About />}></Route>
          <Route path={RouteURLs.PROJECTS} element={<Projects />}></Route>
          <Route path={RouteURLs.CONTACT} element={<Contact />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default Main;
