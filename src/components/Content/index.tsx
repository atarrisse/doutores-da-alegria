// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import ReactMarkdown from "react-markdown"

import NumberSection from "../Section/NumberSection"
import QuoteSection from "../Section/QuoteSection"
import GallerySection from "../Section/GallerySection"
import ImageSection from "../Section/ImageSection";
import Equipe from "../Section/Equipe"
import RecursosArrecadados from "../Section/GraphsSection/RecursosArrecadados"
import OrigemRecursos from "../Section/GraphsSection/OrigemRecursos"
import AplicacaoRecursos from "../Section/GraphsSection/AplicacaoRecursos"

import { ETipoConteudo } from "../../types.d.ts";

import * as styles from "./styles.module.scss";


const Content = ({ content }) => {
  return <>
    <div className={styles.text}>
      {content.map(ctnt => {

        if ((typeof ctnt === 'string' || ctnt instanceof String)) {
          return <ReactMarkdown
            key={JSON.stringify(ctnt)}
            components={{
              a: ({ node, ...props }) => <a target="_blank" rel="noopener noreferrer" {...props} />,
            }}
          >
            {ctnt}
          </ReactMarkdown>
        }

        switch (ctnt.type) {
          case ETipoConteudo.NUM:
            return <NumberSection key={JSON.stringify(ctnt)} {...ctnt} />
          case ETipoConteudo.QUOTE:
            return <QuoteSection key={JSON.stringify(ctnt)} autor={ctnt.autor}>{ctnt.text}</QuoteSection>
          case ETipoConteudo.IMG:
            return <ImageSection key={JSON.stringify(ctnt)} {...ctnt} />
          case ETipoConteudo.PARTNERS:
            return <GallerySection key={JSON.stringify(ctnt)} content={ctnt} />
          case ETipoConteudo.REC_ARRECADADOS:
            return <RecursosArrecadados key={JSON.stringify(ctnt)} />
          case ETipoConteudo.REC_ORIGEM:
            return <OrigemRecursos key={JSON.stringify(ctnt)} />
          case ETipoConteudo.REC_APLICACAO:
            return <AplicacaoRecursos key={JSON.stringify(ctnt)} />
          case ETipoConteudo.EQUIPE:
            return <Equipe key={JSON.stringify(ctnt)} />
          case ETipoConteudo.HTML:
            return <div
              key={JSON.stringify(ctnt)}
              dangerouslySetInnerHTML={{ "__html": ctnt.source }}
            ></div>
          default:
            return <></>
        }
      })}
    </div>
  </>


}

export default Content
