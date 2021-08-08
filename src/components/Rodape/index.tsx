import * as React from "react"
import Image from "../Image"
import { IConteudoSecao, ETipoConteudo } from "../../types.d.ts"

import * as styles from "./styles.module.scss"

type Props = IConteudoSecao

const Rodape: React.FC<Props> = ({ index, links }) => {
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
        links &&
        links.map(link => {
          return (
            <a
              className={styles.people}
              data-front={link.front}
              href={link.url}
              key={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt={link.alt}
                title={link.alt}
                filename={`slides/people/${link.image}`}
              />
            </a>
          )
        })
      }
    </div>
  )
}

export default Rodape
