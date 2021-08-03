// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import ReactMarkdown from "react-markdown"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import kebabCase from "lodash-es/kebabCase"

import { IConteudoSecao, ETipoConteudo } from "../../types.d.ts"
import NumberSection from "./NumberSection"
import QuoteSection from "./QuoteSection"
import GallerySection from "./GallerySection"
import Equipe from "./Equipe"
import RecursosArrecadados from "./GraphsSection/RecursosArrecadados"
import OrigemRecursos from "./GraphsSection/OrigemRecursos"
import AplicacaoRecursos from "./GraphsSection/AplicacaoRecursos"


import * as styles from "./styles.module.scss"

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

                if ((typeof ctnt === 'string' || ctnt instanceof String)) {
                  return <ReactMarkdown
                    key={JSON.stringify(ctnt)}

                    components={{
                      a: ({ node, ...props }) => <a target="_blank" rel="noopener noreferrer" {...props} />,
                    }}
                  >{ctnt}</ReactMarkdown>
                }

                switch (ctnt.type) {
                  case ETipoConteudo.NUM:
                    return <NumberSection key={JSON.stringify(ctnt)} {...ctnt} />
                  case ETipoConteudo.QUOTE:
                    return <QuoteSection autor={ctnt.autor}>{ctnt.text}</QuoteSection>
                  case ETipoConteudo.PARTNERS:
                    return <GallerySection content={ctnt} />
                  case ETipoConteudo.REC_ARRECADADOS:
                    return <RecursosArrecadados />
                  case ETipoConteudo.REC_ORIGEM:
                    return <OrigemRecursos />
                  case ETipoConteudo.REC_APLICACAO:
                    return <AplicacaoRecursos />
                  case ETipoConteudo.EQUIPE:
                    return <Equipe />
                  case ETipoConteudo.HTML:
                    return <div dangerouslySetInnerHTML={{ "__html": ctnt.source }}></div>
                  default:
                    return <></>
                }
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
