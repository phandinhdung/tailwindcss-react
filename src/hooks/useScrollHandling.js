import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const useScrollHandling = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const previousScrollPosition = useRef(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollTracking = () => {
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition > previousScrollPosition.current) {
      setScrollDirection('down');
      //console.log("down");
    } else if (currentScrollPosition < previousScrollPosition.current) {
      setScrollDirection('up');
      //console.log("up");
    }

    previousScrollPosition.current = currentScrollPosition <= 0 ? 0 : currentScrollPosition;

    setScrollPosition(currentScrollPosition);
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollTracking);
    return () => window.removeEventListener('scroll', scrollTracking);
  }, []);

  return {
    scrollDirection,
    scrollPosition
  }
}

export default useScrollHandling
