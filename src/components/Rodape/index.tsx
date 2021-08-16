import React from "react";

import { IConteudoSecao } from "../../types.d.ts";
import Image from "../Image";

import * as styles from "./styles.module.scss";


type Props = IConteudoSecao

const Rodape: React.FC<Props> = ({ id, links }) => {
  const i = parseInt(id, 10) + 1;

  return (
    <div className={styles.rodape}>
      <Image
        alt=""
        aria-hidden
        className={styles.bg}
        filename={`slides/bg/${i.toString().padStart(2, "0")}.png`}
      />
      {id !== "07" &&
        links &&
        links.map(link => {
          return (
            <a
              className={`${styles.people} no-underline`}
              data-front={link.front}
              href={link.url}
              key={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt={link.alt}
                clasName="no-underline"
                title={link.alt}
                filename={`slides/people/${link.image}`}
              />
            </a>
          );
        })}
      {id === "07" && (
        <Image
          className={styles.mosaic}
          alt=""
          filename={`slides/people/slide_1.png`}
        />
      )}
    </div>
  );
};

export default Rodape;
