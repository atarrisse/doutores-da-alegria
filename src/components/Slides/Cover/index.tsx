import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Ratio from "react-ratio"
import Slide from "@/components/Slides/Slide"

import * as styles from "./styles.module.scss"

const Cover: React.FC = () => {
  return (
    <Slide>
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
        <Ratio ratio={4098 / 2115} className={styles.bg}>
          <StaticImage
            alt="Foto em estilo de colagem mostrando os rostos de diversos colaboradores do Doutores da Alegria"
            placeholder="blurred"
            src="../../../images/cover_desktop.png"
          />
        </Ratio>
      </div>
    </Slide>
  )
}

export default Cover
