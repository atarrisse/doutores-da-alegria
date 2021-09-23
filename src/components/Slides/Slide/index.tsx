import React from "react";

import Extra from "../../Extra";

import * as styles from "./styles.module.scss";

const Slide = (data) => {
  const { children, className, style, extra, theme, ...others } = data;

  return (
    <article
      className={`${styles.article} ${className && className}`}
      style={{ ...style, ...theme }}
      {...others}
    >
      {extra && (
        <Extra
          {...extra}
          {...others}
        />
      )}
      <div className={styles.content}>{children}</div>
    </article>
  );
};

export default Slide;
