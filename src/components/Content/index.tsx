import React from "react"
import ReactMarkdown from "react-markdown"

import Image from "../Image"
import Parcerias from "../Parcerias"
import EquipeSection from "../Section/EquipeSection"
import GallerySection from "../Section/GallerySection"
import AplicacaoRecursos from "../Section/GraphsSection/AplicacaoRecursos"
import OrigemRecursos from "../Section/GraphsSection/OrigemRecursos"
import RecursosArrecadados from "../Section/GraphsSection/RecursosArrecadados"
import NumberSection from "../Section/NumberSection"
import QuoteSection from "../Section/QuoteSection"
import SearchSection from "../Section/SearchSection"

import * as styles from "./styles.module.scss"

import { ETipoConteudo } from "../../types.d.ts"

const Content = ({ content }) => {
  return (
    <>
      <div className={styles.text}>
        {content.map(ctnt => {
          if (typeof ctnt === "string" || ctnt instanceof String) {
            return (
              <ReactMarkdown
                key={JSON.stringify(ctnt)}
                components={{
                  a: ({ node, ...props }) => (
                    <a target="_blank" rel="noopener noreferrer" {...props} />
                  ),
                }}
              >
                {ctnt}
              </ReactMarkdown>
            )
          }

          switch (ctnt.type) {
            case ETipoConteudo.NUM:
              return <NumberSection key={JSON.stringify(ctnt)} {...ctnt} />
            case ETipoConteudo.IMG:
              return <Image key={JSON.stringify(ctnt)} {...ctnt} />
            case ETipoConteudo.HTML:
              return (
                <div
                  key={JSON.stringify(ctnt)}
                  dangerouslySetInnerHTML={{ __html: ctnt.source }}
                ></div>
              )
            case ETipoConteudo.QUOTE:
              return (
                <QuoteSection key={JSON.stringify(ctnt)} autor={ctnt.autor}>
                  {ctnt.text}
                </QuoteSection>
              )
            case ETipoConteudo.PARTNERS:
              return (
                <GallerySection key={JSON.stringify(ctnt)} content={ctnt} />
              )
            // RECURSOS
            case ETipoConteudo.REC_ARRECADADOS:
              return <RecursosArrecadados key={JSON.stringify(ctnt)} />
            case ETipoConteudo.REC_ORIGEM:
              return <OrigemRecursos key={JSON.stringify(ctnt)} />
            case ETipoConteudo.REC_APLICACAO:
              return <AplicacaoRecursos key={JSON.stringify(ctnt)} />
            // EQUIPE
            case ETipoConteudo.EQUIPE:
              return <EquipeSection key={JSON.stringify(ctnt)} {...ctnt} />
            // APOIO
            case ETipoConteudo.APOIO:
              return <Parcerias key={JSON.stringify(ctnt)} {...ctnt} />
            case ETipoConteudo.BUSCA:
              return <SearchSection {...ctnt} />
            default:
              return <></>
          }
        })}
      </div>
    </>
  )
}

export default Content
