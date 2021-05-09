// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import kebabCase from "lodash-es/kebabCase"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "./styles.module.scss"

export interface CONTENT_TEXT {
  tag: "a" | "p"
  text: string
}

export interface CONTENT_SECTION {
  title: string
  img?: string
  color: string
  content: Array<CONTENT_TEXT>
}

type Props = CONTENT_SECTION

const Section: React.FC<Props> = ({ color, content, img, title }) => {
  const { fileName } = useStaticQuery(
    graphql`
      query {
        fileName: file(relativePath: { eq: "rodape/rodape-1-3x.png" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  )

  const image = getImage(fileName.childImageSharp.gatsbyImageData)

  return (
    <article data-theme={kebabCase(color)}>
      <h2 className={styles.title}>{title}</h2>
      {content.map(({ text }) => (
        <p key={kebabCase(text)} dangerouslySetInnerHTML={{ __html: text }} />
      ))}
      {image && <GatsbyImage image={image} alt="" aria-hidden />}
    </article>
  )
}

export default Section
