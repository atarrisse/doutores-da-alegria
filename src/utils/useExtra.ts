import { useState } from "react";

const useExtra = () => {
  const [isExtraOpen, setIsExtraOpen] = useState(false);

  return { isExtraOpen, setIsExtraOpen };
};

export default useExtra;