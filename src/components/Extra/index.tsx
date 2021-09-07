import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";

import Content from "../Content";

import useExtra from "@/utils/useExtra";
import useWindowScroll from "@/utils/useWindowScroll";
import useWindowSize from "@/utils/useWindowSize";

import * as styles from "./styles.module.scss";

type TExtra = React.HTMLAttributes<HTMLDivElement>;

type Props = {
  isActive: boolean,
  content: any[],
  color: string,
  handleClick: () => void
}

const Extra: React.FC<Props & TExtra> = ({ isActive, content, color, handleClick: onClick }) => {
  if (!content) return;

  const windowHeight = window.innerHeight;
  const overlayRef = useRef<HTMLDivElement>();
  const { top } = useWindowScroll();
  const { isMobile } = useWindowSize();
  const { isExtraOpen, setIsExtraOpen } = useExtra();
  const [init, setInit] = useState(false);
  const [delta, setDelta] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [midScreen, setMidScreen] = useState<number | null>(0);
  const [aboveMidScreen, setAboveMidScreen] = useState(false);
  const rect = useMemo(() => {
    return overlayRef?.current?.getBoundingClientRect();
  }, [overlayRef.current]);

  const handleClick = () => {
    setIsExtraOpen(false);
    onClick?.();
  };

  useEffect(() => {
    setInit(true);
  }, []);

  useEffect(() => {
    if (!delta) return;
    if (delta < 0) setIsVisible(true);
    else setIsVisible(false);
  }, [delta]);

  useEffect(() => {
    const top = window.scrollY;
    const screenSize = window.innerHeight;
    setMidScreen((top + screenSize / 2) - 300);
  }, [isVisible]);

  useEffect(() => {
    if (isMobile || !rect) return;

    const windowBottom = top + windowHeight;
    const delta = rect.top - windowBottom;
    setDelta(delta);

    if (delta > 0) return;

    if (rect.top >= midScreen) {
      setAboveMidScreen(true);
    }

  }, [top]);

  // triggers entrance
  useEffect(() => {
    if (!aboveMidScreen || !isActive) return;
    const r = overlayRef.current.getBoundingClientRect();
    const pieceTop = Math.abs(Math.round(r?.top));
    const pieceBottom = Math.abs(Math.round(window.innerHeight - r?.bottom));
    const difference = Math.abs(pieceTop - pieceBottom);
    if (difference < 100 && !isExtraOpen) {
      setIsExtraOpen(true);
      document.querySelector("html").style.overflow = "hidden";
    }
  }, [top, aboveMidScreen, isExtraOpen]);

  //overflow back
  useEffect(() => {
    if (!isActive)
      document.querySelector("html").style.overflow = "auto";
  }, [isActive]);

  // if (isExtraOpen) return <></>;

  return (
    <>
      {
        isMobile
          ? <div
            className={styles.overlay}
            data-init={init}
            data-close={isActive === false}
            ref={overlayRef}
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
          :
          <div className={styles.wrapper}>
            <dialog
              className={styles.extra}
              data-init={aboveMidScreen}
              data-close={isActive === false}
              open={true}
              ref={overlayRef}
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
            <div
              className={styles.overlayDesktop}
              data-visible={isVisible}
              data-close={isActive === false}
              aria-hidden
            />
          </div>
      }
    </>
  );
};

export default Extra;
