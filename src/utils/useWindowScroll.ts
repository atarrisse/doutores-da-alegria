import debounce from "lodash/debounce";
import { useState, useEffect } from "react";

interface IProps {
  top: number;
}

const useWindowScroll: () => IProps = () => {
  const [scrollData, setScrollData] = useState<any>({});

  const handleScroll = debounce(() => {
    setScrollData({
      bottom: window.scrollY + window.innerHeight,
      top: window.scrollY
    });
  });

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll));
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollData;
};

export default useWindowScroll;