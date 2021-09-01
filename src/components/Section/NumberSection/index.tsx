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
                  {value.toLocaleString("pt-br")}
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
