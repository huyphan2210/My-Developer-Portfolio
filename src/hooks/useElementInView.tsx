import { useState, useEffect, RefObject } from "react";

const useElementInView = (elementRef: RefObject<Element>) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const checkInView = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos && elementRef.current) {
        const inView = isTopOfElementInView(elementRef.current);
        if (inView) {
          setIsInView(true);
        }
      }
      prevScrollPos = currentScrollPos;
    };

    const isTopOfElementInView = (el: Element) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    window.addEventListener("scroll", checkInView);

    return () => {
      window.removeEventListener("scroll", checkInView);
    };
  }, [elementRef]);

  return isInView;
};

export default useElementInView;
