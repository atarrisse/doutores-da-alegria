// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import ReactMarkdown from "react-markdown"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import kebabCase from "lodash-es/kebabCase"

import * as styles from "./styles.module.scss"
import { IConteudoSecao, ETipoConteudo } from "../../types.d.ts"
import NumberSection from "./NumberSection"

type Props = IConteudoSecao

const Section: React.FC<Props> = ({ children, content, images, title, color, ...others }) => {
  return (
    <div className={styles.section} style={{ "--theme-color": `var(--${kebabCase(color)})` }} {...others}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {
          children ? children :
            <div className={styles.text}>
              {content.map(contnt => {
                if (contnt.type === ETipoConteudo.NUM)
                  return <NumberSection {...contnt} />
                return (
                  <ReactMarkdown key={kebabCase(contnt)}>{contnt}</ReactMarkdown>
                )
              })}
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
