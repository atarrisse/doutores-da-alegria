import React from "react";
import { useState } from "react";

import Extra from "../../Extra";

import * as styles from "./styles.module.scss";

const Slide = (data) => {
  const { children, className, style, extra, theme, ...others } = data;
  const [isExtraOpen, setIsExtraOppen] = useState<boolean | undefined>(
    extra !== undefined
  );
  const handleCloseExtra = () => {
    setIsExtraOppen(false);
  };

  return (
    <article
      className={`${styles.article} ${className && className}`}
      data-extra={isExtraOpen}
      style={{ ...style, ...theme }}
      {...others}
    >
      {extra && (
        <Extra
          isActive={isExtraOpen}
          {...extra}
          handleClick={handleCloseExtra}
          {...others}
        />
      )}
      <div className={styles.content}>{children}</div>
    </article>
  );
};

export default Slide;
