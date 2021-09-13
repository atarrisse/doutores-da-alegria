import debounce from "lodash/debounce";
import React, { useState } from "react";

import Image from "@/components/Image";
import Slide from "@/components/Slides/Slide";

import useWindowSize from "@/utils/useWindowSize";

import * as styles from "./styles.module.scss";
import ImageMobile from "./ImageMobile";
import ImageDesktop from "./ImageDesktop";

const Cover: React.FC = () => {
  const { isMobile } = useWindowSize();


  return (
    <Slide id="cover">
      <div className={styles.cover}>
        <h1 className={styles.title}>
          Balanço
          <br />
          2020
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


