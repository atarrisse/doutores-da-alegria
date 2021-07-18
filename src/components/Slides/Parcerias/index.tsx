// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import kebabCase from "lodash-es/kebabCase"

import Section from "../../Section"
import ListaEmpresas from "./ListaEmpresas"
import ApoioGovernamental from "./ApoioGovernamental"

// import patrocinadores from "./data"

import { EColors, IApoio } from "../../../types.d.ts"

import * as styles from "./styles.module.scss"
import { parseImages } from "../../../utils"
import Apoio from "./Apoio"

interface IProps {
  apoio: Array<IApoio>
  logos: Array<any>
};

const Parcerias = ({ apoio, logos }) => {

  // React.useEffect(() => {
  //   if (!!logos) console.log(logos)

  // }, [logos])

  return (
    <Section title="Parcerias e apoios" color={EColors.SALMAO}>
      {
        apoio.map((ap) => {
          const { titulo, parcerias } = ap;
          const slug = kebabCase(titulo)
          return (
            <React.Fragment key={kebabCase(titulo)}>
              {titulo && <h3 className={styles.titulo}>{titulo}</h3>}
              <div className={styles.grid}>
                {parcerias &&
                  parcerias.map((parceria) => {
                    Object.keys(logos).forEach((key => {
                      if (kebabCase(titulo).includes(key))
                        parceria.logos = logos[slug]
                    }))
                    // console.log("parcerias", parceria)
                    return (
                      <Apoio
                        governamental={titulo.includes("governamentais")}
                        key={JSON.stringify(parceria)}
                        parceria={parceria}
                      />
                    )
                  }
                  )
                }
              </div>
            </React.Fragment>
          )
        })
      }
    </Section>
  )
}

export default Parcerias
