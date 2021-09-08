import debounce from "lodash/debounce";
import React, { useState } from "react";

import Image from "@/components/Image";
import Slide from "@/components/Slides/Slide";

import * as styles from "./styles.module.scss";

const Cover: React.FC = () => {
  const [isAtBeginning, setIsAtBeginning] = useState(true);

  const handleScroll = (e) => {
    setIsAtBeginning(e.target.scrollLeft === 0);
  };

  return (
    <Slide id="cover">
      <div className={styles.cover}>
        <h1 className={styles.title}>
          Balanço
          <br />
          2020
        </h1>
        <Image filename="logo.png" alt="Logo do Doutores da Alegria" className={styles.logo} height={96} />
      </div>
      <div>
        <div className={styles.wrapper}>
          <div className={styles.gradient} data-begin={isAtBeginning}>
            <div className={styles.scroll} onScroll={debounce(handleScroll, 10)}>
              <div className={styles.content}>
                <Image
                  alt="Foto em estilo de colagem mostrando os rostos de diversos colaboradores do Doutores da Alegria"
                  filename="cover_desktop.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Cover;


