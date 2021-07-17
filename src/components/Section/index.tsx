// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import ReactMarkdown from "react-markdown"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import kebabCase from "lodash-es/kebabCase"

import * as styles from "./styles.module.scss"
import { CONTENT_SECTION } from "../../types.d.ts"
import { useEffect } from "react"

type Props = CONTENT_SECTION

const Section: React.FC<Props> = ({ children, content, images, title, color, ...others }) => {
  return (
    <div className={styles.section} style={{ "--theme-color": `var(--${kebabCase(color)})` }} {...others}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {
          children ? children :
            <div className={styles.text}>
              {content.map(contnt => (
                <ReactMarkdown key={kebabCase(contnt)}>{contnt}</ReactMarkdown>
              ))}
            </div>
        }
      </div>
      {
        images &&
        <GatsbyImage image={getImage(images.bg?.node.childImageSharp.gatsbyImageData)} alt="" aria-hidden />
      }
    </div>
  )
}

export default Section
