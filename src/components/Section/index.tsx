// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import kebabCase from "lodash-es/kebabCase"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"

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
  const p: string = "rodape/rodape-1-3x.png"
  console.log(p)

  const { fileName } = useStaticQuery(
    graphql`
      query {
        fileName: file(relativePath: { eq: "rodape/rodape-1-3x.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )

  const image = getImage(fileName.childImageSharp.gatsbyImageData)
  console.log(image)

  return (
    <article data-color={kebabCase(color)}>
      <h2 className={styles.title}>{title}</h2>
      {content.map(({ text }) => (
        <p key={kebabCase(text)}>{text}</p>
      ))}
      {image && <GatsbyImage image={image} alt="" aria-hidden />}
    </article>
  )
}

export default Section
