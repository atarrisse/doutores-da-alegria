import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { CONTENT_SECTION } from "./components/Section"

const CONTENT: Array<CONTENT_SECTION> = [
  {
    title: "Oi!",
    color: "PINK",
    content: [
      {
        tag: "p",
        text:
          "Esta é a primeira edição online do Balanço dos Doutores da Alegria, publicação que há 12 anos cumpre o papel de prestar contas das atividades anuais da associação. Para navegar por ela, siga os passos:",
      },
      { tag: "p", text: "[tutorial + acessibilidade + índice]" },
      {
        tag: "p",
        text:
          "Escondemos uma surpresinha em uma das páginas. Você consegue descobrir?",
      },
    ],
    img: "1",
  },
  {
    title: "Sobre viver!",
    color: "RED",
    img: "2",
    content: [
      {
        tag: "p",
        text:
          'Foram 300 dias absolutamente diferentes de tudo o que já vivemos em quase 30 anos. Mais do que contar como a organização se reinventou em 2020, este balanço procura mostrar como Doutores da Alegria sobreviveu em um ano em que o <a href="">inimaginável se tornou realidade.</a>',
      },
      {
        tag: "p",
        text:
          "Os textos, fotos e vídeos desta edição respondem a uma pergunta: de que maneira uma associação de palhaços que fazem intervenções presenciais dentro de hospitais públicos se mostrou relevante em uma pandemia?",
      },
    ],
  },
  {
    title: "Spoiler",
    color: "CYAN",
    img: "3",
    content: [
      {
        tag: "p",
        text:
          "Sem querer estragar a surpresa do que vem pela frente, podemos dizer que, diante dos impactos do coronavírus na sociedade e, principalmente, no sistema público de saúde, Doutores da Alegria criou uma série de ações virtuais para seguir oferecendo arte como antídoto potente para profissionais de saúde e crianças hospitalizadas.",
      },
    ],
  },
]

export default CONTENT
