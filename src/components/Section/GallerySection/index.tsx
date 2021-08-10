import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import * as styles from "./styles.module.scss"

const GallerySection = () => {
  console.log("here")
  return (
    <div className={styles.wrapper}>
      <ul className={styles.gallery}>
        <li>
          <StaticImage
            src="../../../images/galerias/miolo-mole/viacom.jpg"
            alt="Viacom"
          />
        </li>
        <li>
          <StaticImage
            src="../../../images/galerias/miolo-mole/sao-paulo-para-criancas.jpg"
            alt="São Paulo para Crianças"
          />
        </li>
        <li>
          <StaticImage
            src="../../../images/galerias/miolo-mole/bto.png"
            alt="B T O Mais"
          />
        </li>
        <li>
          <StaticImage
            src="../../../images/galerias/miolo-mole/cbn.png"
            alt="C B N"
          />
        </li>
        <li>
          <StaticImage
            src="../../../images/galerias/miolo-mole/correcta.jpg"
            alt="Correta"
          />
        </li>
        <li>
          <StaticImage
            src="../../../images/galerias/miolo-mole/instituto-claro.png"
            alt="Instituto Claro"
          />
        </li>
        <li>
          <StaticImage
            src="../../../images/galerias/miolo-mole/cartoon-network.png"
            alt="Cartoon Network"
          />
        </li>
      </ul>
    </div>
  )
}

export default GallerySection
