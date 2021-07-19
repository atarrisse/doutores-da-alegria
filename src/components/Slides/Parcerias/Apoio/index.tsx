import React from "react"
import kebabCase from "lodash-es/kebabCase"

import ApoioGovernamental from "../ApoioGovernamental"
import ListaEmpresas from "../ListaEmpresas"
import { IApoio } from "../../../types.d.ts"

import * as styles from "./styles.module.scss"

const Apoio: React.FC<IApoio> = ({ parceria, governamental, logos }) => {
  const { tipo, categoria } = parceria
  let imgs = []
  if (!!logos) {
    imgs = Array.isArray(logos[1]) ? logos[1] : logos[1][kebabCase(categoria)]
  }

  return (
    <section className={styles.section} data-tipo={tipo} key={JSON.stringify(parceria)}>
      <h4 className={styles.tituloCategoria}>{categoria}</h4>
      <ListaEmpresas {...parceria} logos={imgs} governamental={governamental} />
    </section>
  )
}

export default Apoio
