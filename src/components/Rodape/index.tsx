import { getImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

import Image from "../Image";

import ArtDirectionImage from "@/components/ArtDirectionImage";

import { queryImage } from "@/utils/images";

import * as styles from "./styles.module.scss";

import { IConteudoSecao } from "@/types.d.ts";


type Props = IConteudoSecao

const Rodape: React.FC<Props> = ({ id, links }) => {
  const i = parseInt(id, 10) + 1;
  const filename = `${i.toString().padStart(2, "0")}.png`;
  const defaultImg: IGatsbyImageData | undefined =
    getImage(queryImage(`slides/bg/mobile/${filename}`).node);
  const breakpoints = [
    {
      media: "(min-width: 1024px)",
      image: getImage(queryImage(`slides/bg/desktop/${filename}`)?.node) as IGatsbyImageData
    }
  ];

  console.log(defaultImg, breakpoints)

  return (
    <div className={styles.rodape}>
      <ArtDirectionImage
        alt=""
        defaultImage={`slides/bg/mobile/${filename}`}
        images={{
          "(min-width: 1024px)": `slides/bg/desktop/${filename}`,
        }}
      />
      <Image
        alt=""
        aria-hidden
        className={styles.bg}
        filename={`slides/bg/${filename}}.png`}
      />
      {id !== "07" &&
        links &&
        links.map(link => {
          return (
            <a
              className={`${styles.people} no-underline`}
              data-front={link.front}
              href={link.url}
              key={link.image}
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
