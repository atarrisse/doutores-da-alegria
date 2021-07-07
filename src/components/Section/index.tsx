// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import ReactMarkdown from "react-markdown"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import kebabCase from "lodash-es/kebabCase"

import * as styles from "./styles.module.scss"
import { CONTENT_SECTION } from "../../types.d.ts"

type Props = CONTENT_SECTION

const Section: React.FC<Props> = ({ content, image, title }) => {
  return (
    <div className={styles.section}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.text}>
          {content.map(contnt => (
            <ReactMarkdown key={kebabCase(contnt)}>{contnt}</ReactMarkdown>
          ))}
        </div>
      <GatsbyImage image={getImage(image)} alt="" aria-hidden />
      </div>
  )
}

export default Section
