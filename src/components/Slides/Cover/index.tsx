import React from "react";
import Ratio from "react-ratio";

import Image from "@/components/Image";
import Slide from "@/components/Slides/Slide";

import * as styles from "./styles.module.scss";

const Cover: React.FC = () => {
  return (
    <Slide id="cover">
      <div className={styles.cover}>
        <h1 className={styles.title}>
          Balanço
          <br />
          2020
        </h1>
        <Image filename="logo.png" alt="Logo do Doutores da Alegria" className={styles.logo} height={96} />
        <Ratio ratio={4098 / 2115} className={styles.bg}>
          <Image
            alt="Foto em estilo de colagem mostrando os rostos de diversos colaboradores do Doutores da Alegria"
            filename="cover_desktop.png"
            className={styles.logo} height={96} />
        </Ratio>
      </div>
    </Slide>
  );
};

export default Cover;
