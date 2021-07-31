// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import ReactMarkdown from "react-markdown"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import kebabCase from "lodash-es/kebabCase"

import * as styles from "./styles.module.scss"
import { IConteudoSecao, ETipoConteudo } from "../../types.d.ts"
import NumberSection from "./NumberSection"
import Quote from "../Quote"

type Props = IConteudoSecao

const Section: React.FC<Props> = ({ children, content, images, title, color, ...others }) => {

  return (
    <div className={styles.section} style={{ "--theme-color": `var(--${kebabCase(color)})` }} {...others}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {
          children ? children : content &&
            <div className={styles.text}>
              {content.map(ctnt => {
                if (ctnt.type === ETipoConteudo.NUM)
                  return <NumberSection key={JSON.stringify(ctnt)} {...ctnt} />
                if (ctnt.type === ETipoConteudo.QUOTE) {
                  return <Quote autor={ctnt.autor}>{ctnt.text}</Quote>
                }
                return (
                  <ReactMarkdown key={JSON.stringify(ctnt)}>{ctnt}</ReactMarkdown>
                )
              })}
            </div>
        }
      </div>
      {
        images &&
        <div className={styles.rodape}>
          <GatsbyImage
            alt=""
            aria-hidden
            className={styles.bg}
            image={getImage(images.bg?.childImageSharp?.gatsbyImageData)}
          />
          {images.people &&
            images.people.map(person => <GatsbyImage image={getImage(person.childImageSharp?.gatsbyImageData)} alt="" />)
          }
        </div>
      }
    </div>
  )
}

export default Section
