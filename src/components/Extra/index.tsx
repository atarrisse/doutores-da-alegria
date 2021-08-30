import React from "react";

import Content from "../Content";

import * as styles from "./styles.module.scss";

type Props = {
  isActive: boolean,
  content: any[],
  color: string,
  handleClick: () => void
}

const Extra: React.FC<Props> = ({ isActive, content, color, handleClick }) => {
  if (!content) return;


  return (
    <div className={styles.overlay} >
      <dialog className={styles.extra} open={isActive} style={{ color: color }}>
        <button
          className={styles.button}
          aria-label="Fechar curiosidade"
          onClick={handleClick}
        >
          X
        </button>
        <Content content={content} />
      </dialog>
    </div>
  );
};

export default Extra;
