// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image"
import kebabCase from "lodash-es/kebabCase"

import Section from "../../Section"

import patrocinadores, { PATROCINIO_DISPLAY } from "./data"
import { COLORS } from "../../../types.d.ts"

import * as styles from "./styles.module.scss"

const getImages = () => {
  const images = useStaticQuery(graphql`
     query {
      bg: allFile(
        sort: { fields: name }
        filter: { relativeDirectory: { eq: "slides/bg" } }
        ) {
        edges {
          node {
            childImageSharp {
              original {
                src
              }
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
      after: allFile(
        sort: { fields: name }
        filter: { relativeDirectory: { eq: "slides/after" } }
        ) {
        edges {
          node {
            childImageSharp {
              original {
                src
              }
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  `)
  return images
}

const Parceria: React.FC = () => {
  return (
    <Section title="Parcerias e apoios" color={COLORS.SALMAO}>
      <h3>Parceiros via Lei de Incentivo à Cultura</h3>
      <div className={styles.grid}>
        {
          patrocinadores.map(patrocinio => (
            <section className={styles.section} data-tipo={patrocinio.tipo} key={kebabCase(patrocinio.categoria)}>
              <h4 className={styles.tituloCategoria}>{patrocinio.categoria}</h4>
              <ul className={styles.listaEmpresas} >
                {
                  patrocinio.tipo === PATROCINIO_DISPLAY.TXT &&
                  patrocinio.empresas.map(empresa => (
                    <li key={kebabCase(empresa.nome)}>
                      {empresa.nome}
                    </li>
                  ))
                }
              </ul>
            </section>
          ))
        }
      </div>
    </Section>
  )
}

export default Parceria
