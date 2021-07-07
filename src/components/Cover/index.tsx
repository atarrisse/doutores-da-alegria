// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import kebabCase from "lodash-es/kebabCase"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import { COLORS } from "../../types.d.ts"

import * as styles from "./styles.module.scss"
import { StaticImage } from "gatsby-plugin-image"

const Cover: React.FC = () => {

  const image = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "cover.png" }) {
      childImageSharp {
        fluid {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
  }
`)

  return (
    <div className={styles.cover}>
        <h1 className={styles.title}>Balanço<br />2020</h1>
        <StaticImage
          alt="Logo do Doutores da Alegria"
          className={styles.logo}
          layout="fixed"
          placeholder="blurred"
          src="../../images/logo.png"
          height={96}
        />
        <div className={styles.bg}>

        {/* <Img fluid={image.file.childImageSharp.fluid} alt="Colagem, preto e branca, de fotos dos rostos das pessoas que fazem parte do Doutores da Alegria" /> */}
        </div>
      </div>
  )
}

export default Cover
