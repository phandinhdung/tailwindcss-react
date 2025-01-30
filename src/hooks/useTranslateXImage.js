import useScrollHandling from "@/hooks/useScrollHandling";
import { useState } from "react";
import { useEffect } from "react";

const useTranslateXImage = () => {
  const {scrollPosition, scrollDirection} = useScrollHandling();
  const [translateXPosition, setTranslateXPosition] = useState(80);
  
    const handleTranslateX = () => {
      if (scrollDirection === 'down' && scrollPosition >= 1812) {
        setTranslateXPosition(translateXPosition <= -20 ? -20 : translateXPosition - 3);
  
      } else if (scrollDirection === 'up') {
        setTranslateXPosition(translateXPosition >= 80 ? 80 : translateXPosition + 1)
  
      }
    };
  
    useEffect(() => {
      handleTranslateX();
    }, [scrollPosition]);
  
    return { translateXPosition };
}

export default useTranslateXImage;