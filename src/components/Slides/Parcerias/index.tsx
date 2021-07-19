// If you don't want to use TypeScript you can delete this file!
import React from "react"
import kebabCase from "lodash-es/kebabCase"

import Apoio from "./Apoio"
import Section from "../../Section"

import { EColors, IApoio } from "../../../types.d.ts"

import * as styles from "./styles.module.scss"

interface IProps {
  apoio: Array<IApoio>;
  logos?: any;
};

const Parcerias: React.FC<IProps> = ({ apoio, logos }) => {
  return (
    <Section title="Parcerias e apoios" color={EColors.SALMAO}>
      {
        apoio.map((ap) => {
          const { titulo, parcerias } = ap;
          const slug = kebabCase(titulo)
          let imgs = Object.entries(logos).find(([key, value]) => slug.includes(key))
          return (
            <React.Fragment key={kebabCase(titulo)}>
              {titulo && <h3 className={styles.titulo}>{titulo}</h3>}
              <div className={styles.grid}>
                {parcerias &&
                  parcerias.map((parceria) => {
                    return (
                      <Apoio
                        governamental={titulo.includes("Governamentais")}
                        key={JSON.stringify(parceria)}
                        parceria={parceria}
                        logos={imgs}
                      />
                    )
                  })
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
