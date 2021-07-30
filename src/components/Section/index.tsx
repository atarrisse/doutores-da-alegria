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

  console.log(images?.people);

  return (
    <div className={styles.section} style={{ "--theme-color": `var(--${kebabCase(color)})` }} {...others}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {
          children ? children : content &&
            <div className={styles.text}>
              {content.map(contnt => {
                if (contnt.type === ETipoConteudo.NUM)
                  return <NumberSection key={JSON.stringify(contnt)} {...contnt} />
                return (
                  <ReactMarkdown key={JSON.stringify(contnt)}>{contnt}</ReactMarkdown>
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
