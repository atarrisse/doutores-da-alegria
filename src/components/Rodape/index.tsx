import * as React from "react"
import Image from "../Image"
import { IConteudoSecao, ETipoConteudo } from "../../types.d.ts"

import * as styles from "./styles.module.scss"

type Props = IConteudoSecao

const Rodape: React.FC<Props> = ({ index }) => {

  return (
    <div className={styles.rodape}>
      <Image
        alt=""
        aria-hidden
        className={styles.bg}
        filename={`slides/bg/${(index + 1).toString().padStart(2, '0')}.png`}
      />
    </div>
  )
}

export default Rodape
