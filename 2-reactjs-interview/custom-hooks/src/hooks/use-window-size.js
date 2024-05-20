import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResizes = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => { 
    // addEventListener is a method that registers the specified
    //  listener (handleResize) to execute whenever the event (resize) occurs.
    window.addEventListener("resize", handleResizes);
    return () => window.removeEventListener("resize", handleResizes);
  }, []);

  return windowSize;
};
export default useWindowSize;
