import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import Content from "../Content";

import * as styles from "./styles.module.scss";

type TExtra = React.HTMLAttributes<HTMLDivElement>;

type Props = {
  isActive: boolean,
  content: any[],
  color: string,
  handleClick: () => void
}

const Extra: React.FC<Props & TExtra> = ({ isActive, content, color, handleClick }) => {
  if (!content) return;
  const [init, setInit] = useState(false);

  useEffect(() => {
    setInit(true);
  }, []);

  return (
    <div
      className={styles.overlay}
      data-init={init}
      data-close={isActive === false}
      onClick={handleClick}
    >
      <dialog
        className={styles.extra}
        open={true}
        style={{ color: color }}
      >
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
