import React from "react"

import { IApoio } from "../../../types.d.ts"
import ListaEmpresas from "./ListaEmpresas"

import * as styles from "./styles.module.scss"

const Apoio: React.FC<IApoio> = ({ parceria, governamental }) => {
  const { tipo, categoria } = parceria

  return (
    <section
      className={styles.section}
      data-tipo={tipo}
      key={JSON.stringify(parceria)}
    >
      <h4 className={styles.tituloCategoria}>{categoria}</h4>
      <ListaEmpresas {...parceria} governamental={governamental} />
    </section>
  )
}

export default Apoio
