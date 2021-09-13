import React from "react";

import Image from "@/components/Image";

import * as styles from "./styles.module.scss";

const ImageDesktop: React.FC = () => {

  return (
    <Image
      alt="Foto em estilo de colagem mostrando os rostos de diversos colaboradores do Doutores da Alegria"
      className={styles.image}
      filename="cover_desktop.png"
    />
  );
};

export default ImageDesktop;


