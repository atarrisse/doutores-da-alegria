import debounce from "lodash/debounce";
import React, { useState } from "react";

import Image from "@/components/Image";

import * as styles from "./styles.module.scss";

const ImageMobile: React.FC = () => {
  const [isAtBeginning, setIsAtBeginning] = useState(true);

  const handleScroll = (e) => {
    setIsAtBeginning(e.target.scrollLeft === 0);
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.gradient} data-begin={isAtBeginning}>
          <div className={styles.scroll} onScroll={debounce(handleScroll, 10)}>
            <div className={styles.content}>
              <Image
                alt="Foto em estilo de colagem mostrando os rostos de diversos colaboradores do Doutores da Alegria"
                className={styles.image}
                filename="cover_desktop.png"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageMobile;


