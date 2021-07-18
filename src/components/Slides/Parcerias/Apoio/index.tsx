// If you don't want to use TypeScript you can delete this file!
import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import kebabCase from "lodash/kebabCase"

import ApoioGovernamental from "../ApoioGovernamental"
import ListaEmpresas from "../ListaEmpresas"
import { IApoio } from "../../../types.d.ts"

import * as styles from "./styles.module.scss"

const Apoio: React.FC<IApoio> = ({ parceria, governamental }) => {
  const { tipo, categoria } = parceria
  console.log("apoio", parceria)
  return (
    <section className={styles.section} data-tipo={tipo} key={JSON.stringify(parceria)}>
      <h4 className={styles.tituloCategoria}>{categoria}</h4>
      {
        governamental
          ? <ApoioGovernamental />
          : <ListaEmpresas {...parceria} />
      }
    </section>
  )
}

export default Apoio
