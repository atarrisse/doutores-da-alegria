import React from "react";

import * as styles from "./styles.module.scss";

interface IProps {
  comment?: string;
  label?: string;
  numbers: Array<any>;
  presencial: boolean;
}

const NumberSection: React.FC<IProps> = ({ label, numbers, presencial }) => {
  return (
    <>
      {label && <h4 className={styles.label}>{label}</h4>}
      <div
        className={styles.numberGrid}
        data-presencial={presencial}
      >
        {numbers.map(item => {
          const { label, unit, size, value } = item;
          return (
            <>
              <div
                key={JSON.stringify(item)}
                className={styles.numberElement}
                data-size={size}
              >
                <p className={styles.numberLabel}>{label}</p>
                <p className={styles.number}>
                  {value.toLocaleString("pt-br")}
                  <small className={styles.unit}>{unit && unit}</small>
                </p>
              </div>
              {
                item.comment &&
                <div className={`${styles.numberElement} ${styles.comment}`}>
                  <p>{item.comment}</p>
                </div>
              }
            </>
          );
        })}
      </div>
    </>
  );
};

export default NumberSection;
