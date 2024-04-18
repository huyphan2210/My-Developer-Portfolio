import { useState, useEffect, RefObject } from "react";

const useElementInView = (elementRef: RefObject<Element>) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4, // Trigger when at least half of the element is visible
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        setIsInView(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef]);

  return isInView;
};

export default useElementInView;
