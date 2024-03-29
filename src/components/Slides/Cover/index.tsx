import React from "react";

import ImageDesktop from "./ImageDesktop";
import ImageMobile from "./ImageMobile";

import Image from "@/components/Image";
import MenuButton from "@/components/MenuButton";
import Slide from "@/components/Slides/Slide";

import useWindowSize from "@/utils/useWindowSize";


import * as styles from "./styles.module.scss";

const Cover: React.FC = () => {
  const { isMobile } = useWindowSize();

  return (
    <Slide className={styles.slide} id="cover">
      {!isMobile && <MenuButton className={styles.button} />}

      <div className={styles.cover}>
        <h1 className={styles.title}>
          Balanço 2020
        </h1>
        <Image filename="logo.png" alt="Logo do Doutores da Alegria" className={styles.logo} height={96} />
        <div className={styles.hero}>
          {!isMobile && <ImageDesktop />}
          {isMobile && <ImageMobile />}
        </div>
      </div>
    </Slide>
  );
};

export default Cover;


