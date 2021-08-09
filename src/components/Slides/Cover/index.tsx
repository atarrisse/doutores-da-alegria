import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import * as styles from "./styles.module.scss"

const Cover: React.FC = () => {
  return (
    <div className={styles.cover}>
      <h1 className={styles.title}>
        Balanço
        <br />
        2020
      </h1>
      <StaticImage
        alt="Logo do Doutores da Alegria"
        className={styles.logo}
        layout="fixed"
        placeholder="blurred"
        src="../../../images/logo.png"
        height={96}
      />
      <div className={styles.bg}></div>
    </div>
  )
}

export default Cover
