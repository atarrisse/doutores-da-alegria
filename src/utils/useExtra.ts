import { useEffect, useState } from "react";

const useExtra = () => {
  const [isExtraOpen, setIsExtraOpen] = useState(false);

  useEffect(() => {
    isExtraOpen ? console.log("extra open") : console.log("extra closed");
  }, [isExtraOpen]);

  return { isExtraOpen, setIsExtraOpen };
};

export default useExtra;