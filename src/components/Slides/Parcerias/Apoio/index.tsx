import React from "react"
import kebabCase from "lodash-es/kebabCase"

import ApoioGovernamental from "../ApoioGovernamental"
import ListaEmpresas from "../ListaEmpresas"
import { IApoio } from "../../../types.d.ts"

import * as styles from "./styles.module.scss"

const Apoio: React.FC<IApoio> = ({ parceria, governamental, logos }) => {
  const { tipo, categoria } = parceria
  let imgs = []
  if (!!logos)
    imgs = Array.isArray(logos) ? logos : logos[kebabCase(categoria)]

  return (
    <section className={styles.section} data-tipo={tipo} key={JSON.stringify(parceria)}>
      <h4 className={styles.tituloCategoria}>{categoria}</h4>
      {
        governamental
          ? <ApoioGovernamental />
          : <ListaEmpresas {...parceria} logos={imgs} />
      }
    </section>
  )
}

export default Apoio
