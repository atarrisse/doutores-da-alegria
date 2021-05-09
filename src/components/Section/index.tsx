// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import kebabCase from "lodash-es/kebabCase"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "./styles.module.scss"
import { CONTENT_SECTION } from "../../../types.d.ts"

type Props = CONTENT_SECTION

const Section: React.FC<Props> = ({ color, content, image, title }) => {
  return (
    <article className={styles.article} data-theme={kebabCase(color)}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {content.map(({ text }) => (
          <p key={kebabCase(text)} dangerouslySetInnerHTML={{ __html: text }} />
        ))}
      </div>
      <GatsbyImage image={getImage(image)} alt="" aria-hidden />
    </article>
  )
}

export default Section
