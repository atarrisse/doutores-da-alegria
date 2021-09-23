import { useState, useEffect } from "react";

const getWindowDimensions = (w) => {
  if (!w) return {};
  const { innerWidth: width, innerHeight: height } = w;
  const isMobile = width < 1024;

  return {
    isMobile,
    width,
    height,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState<any>();

  const handleResize = () => {
    if (window !== undefined)
      setWindowDimensions(getWindowDimensions(window));
  };

  useEffect(() => {
    setWindowDimensions(getWindowDimensions(window));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
