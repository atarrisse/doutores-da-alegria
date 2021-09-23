import React from "react";

import Image from "@/components/Image";

import * as styles from "./styles.module.scss";

type TFourOuFour = React.HTMLAttributes<HTMLDivElement>;

type Props = {
  className?: string;
}

const FourOuFour: React.FC<Props & TFourOuFour> = () => {
  return (
    <div className={styles.fourOuFour}>
      <h1>Erro 404!</h1>
      <p>Iiiiii deu erro!</p>
      <a href="https://balanco.doutoresdaalegria.org.br/">
        <p>Mas só clicar aqui para voltar à tela inicial</p>
        <Image filename="404.png" alt="palhaço com uma mão acima dos olhos, como quem busca por algo perdido." />
      </a>
    </div>
  );
};

export default FourOuFour;