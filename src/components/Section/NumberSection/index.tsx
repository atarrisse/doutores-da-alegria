import useOnScreen from "@/utils/useOnScreen";
import useWindowSize from "@/utils/useWindowSize";
import React, { useEffect, useRef, useState } from "react";
import CountUp from 'react-countup';

import * as styles from "./styles.module.scss";

interface IProps {
  comment?: string;
  label?: string;
  numbers: Array<any>;
  presencial: boolean;
}

const NumberSection: React.FC<IProps> = ({ label, numbers, presencial }) => {
  const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const slideRef = useRef();
  const [init, setInit] = useState(false);
  const isOnScreen = useOnScreen(slideRef);
  const { isMobile } = useWindowSize()

  useEffect(() => {
    if (init) return;
    if (!init && isOnScreen)
      setInit(isOnScreen);
  }, [isOnScreen])


  return (
    <>
      {label && <h4 className={styles.label}>{label}</h4>}
      <div
        className={styles.numberGrid}
        data-presencial={presencial}
        ref={slideRef}
      >
        {numbers.map((item, index) => {
          const { label, unit, size, value } = item;
          return (
            <React.Fragment key={JSON.stringify(item)}>
              <div
                key={JSON.stringify({ item, index })}
                className={styles.numberElement}
                data-size={size}
              >
                <p className={styles.numberLabel}>{label}</p>
                <p className={styles.number}>
                  {
                    isReducedMotion.matches ?
                      value.toLocaleString("pt-br") :
                      <>
                        {
                          isMobile
                            ? <CountUp
                              end={value}
                              duration={1.5}
                              separator="."
                            />
                            : <>
                              {
                                isOnScreen &&
                                <CountUp
                                  end={value}
                                  duration={1.5}
                                  separator="."
                                />
                              }
                            </>
                        }
                      </>
                  }
                  {unit && <small className={styles.unit}>{unit}</small>}
                </p>
              </div>
              {
                item.comment &&
                <div className={`${styles.numberElement} ${styles.comment}`}>
                  <p>{item.comment}</p>
                </div>
              }
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default NumberSection;
