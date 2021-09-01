import React from "react";

import Image from "../Image";

import useWindowSize from "@/utils/useWindowSize";

import * as styles from "./styles.module.scss";

import { IConteudoSecao } from "@/types.d.ts";


type Props = IConteudoSecao

const Rodape: React.FC<Props> = ({ id, links }) => {
  const i = parseInt(id, 10) + 1;
  const filename = `${i.toString().padStart(2, "0")}.png`;
  const { width } = useWindowSize();

  return (
    <div className={styles.rodape} >
      {
        width && width < 1024
          ? <Image alt="" className={styles.bg} filename={`slides/bg/mobile/${filename}`} />
          : <Image alt="" className={styles.bg} filename={`slides/bg/desktop/${filename}`} />
      }
      {/* people */}
      {links &&
        links.map(link => {
          return (
            <a
              className={`${styles.people} no-underline`}
              data-unique={links?.length === 1}
              data-front={link.front}
              href={link.url}
              key={link.image}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt={link.alt}
                className="no-underline"
                filename={`slides/people/${width < 1024 ? "mobile" : "desktop"}/${link.image}`}
                objectFit="contain"
                title={link.alt}
              />
            </a>
          );
        })}
      {/* elemento na frente  */}
      <Image
        alt=""
        aria-hidden
        className={styles.overlay}
        filename={`slides/overlay/${i.toString().padStart(2, "0")}.png`}
      />
    </div>
  );
};

export default Rodape;
