import * as React from "react"

import * as styles from "./styles.module.scss"

const Legenda = ({ data }) => {
  if (!data) return null;

  return (
    <ul className={styles.lista}>
      {
        data?.map(item => {
          const isHexColor = item.color.includes("#");
          var style = { "--theme-color": isHexColor ? item.color : `var(--${item.color || "carbon"})` } as React.CSSProperties
          return (
            <li className={styles.legenda} key={JSON.stringify(item)} style={style}>
              <p className={styles.legendaValor}>{item.value}%</p>
              <p className={styles.legendaNome}>{item.name}</p>
            </li>
          )
        })
      }
    </ul>
  )

}

export default Legenda