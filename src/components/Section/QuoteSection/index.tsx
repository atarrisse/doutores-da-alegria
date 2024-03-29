import React from "react";

import * as styles from "./styles.module.scss";

const QuoteSection = ({ autor, children }) => {
  return (
    <figure className={styles.figure}>
      <blockquote className={styles.blockquote}>
        <p>{children}</p>
      </blockquote>
      <figcaption>
        <cite className={styles.autor} title={autor}>
          {autor}
        </cite>
      </figcaption>
    </figure>
  );
};

export default QuoteSection;
