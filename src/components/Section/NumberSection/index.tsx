import React from "react"

import * as styles from "./styles.module.scss"

interface IProps {
  comment?: string;
  label?: string
  numbers: Array<any>
}

const NumberSection: React.FC<IProps> = ({ label, numbers }) => {
  return (
    <>
      {label && <h4 className={styles.label}>{label}</h4>}
      <div
        className={styles.numberGrid}
        data-presencial={label?.includes("presenciais")}
      >
        {numbers.map(item => {
          return (
            <div
              key={JSON.stringify(item)}
              className={styles.numberElement}
              data-size={item.size}
            >
              <p className={styles.numberLabel}>{item.label}</p>
              <p className={styles.number}>
                {item.value.toLocaleString("pt-br")}
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default NumberSection
