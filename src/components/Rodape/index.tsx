import * as React from "react"
import Image from "../Image"
import { IConteudoSecao, ETipoConteudo } from "../../types.d.ts"

import * as styles from "./styles.module.scss"

type Props = IConteudoSecao

const Rodape: React.FC<Props> = ({ id, index, links }) => {
  if (links) console.log(links)

  return (
    <div className={styles.rodape}>
      <Image
        alt=""
        aria-hidden
        className={styles.bg}
        filename={`slides/bg/${(index + 1).toString().padStart(2, '0')}.png`}
      />
      {
        id !== "00" &&
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
          )
        })
      }
      {
        id === "00" &&
        <Image className={styles.mosaic} alt="" filename={`slides/people/slide_1.png`} />
      }
    </div>
  )
}

export default Rodape
