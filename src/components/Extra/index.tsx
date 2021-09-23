import React, { useRef, useEffect, useState } from "react";

import Content from "../Content";

import useWindowScroll from "@/utils/useWindowScroll";
import useWindowSize from "@/utils/useWindowSize";

import * as styles from "./styles.module.scss";

type TExtra = React.HTMLAttributes<HTMLDivElement>;

type Props = {
  content: any[],
  color: string,
}

const Extra: React.FC<Props & TExtra> = ({ content, color, ...others }) => {
  if (!content) <></>;

  if (others.id !== "spoiler-02") return <></>;

  const cardRef = useRef<HTMLDivElement>();
  const { top } = useWindowScroll();
  const { isMobile } = useWindowSize();
  const [isOpen, setIsOpen] = useState<boolean | null>();

  const handleClick = () => {
    setIsOpen(false);
  };


  // mobile opens on init
  useEffect(() => {
    if (!isMobile) return;
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // desktop opens when visible
  useEffect(() => {
    const rect = cardRef?.current?.getBoundingClientRect();
    if (isMobile || isOpen) return;

    const windowBottom = top + window.innerHeight;
    const delta = top + rect.top - windowBottom;
    if (delta < 0) {
      setIsOpen(true);
    }
  }, [top]);

  return (
    <div
      className={styles.wrapper}
      data-open={isOpen}
      data-close={!isOpen}
    >
      <div ref={cardRef}>
        <dialog
          className={styles.extra}
          open={isOpen === true}
          style={{ color: color }}
        >
          <button
            className={styles.button}
            aria-label="Fechar curiosidade"
            onClick={handleClick}
          >
            X
          </button>
          <div className={styles.conteudo}>
            <Content content={content} />
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Extra;
