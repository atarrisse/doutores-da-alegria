import {
  ENumeroTamanho,
  EColors,
  IConteudoSecao,
  ETipoConteudo,
} from "@/types.d.ts"

const CONTEUDO: Array<IConteudoSecao> = [
  {
    id: "20",
    title: "Impacto Social",
    color: EColors.AZUL,
    content: [
      {
        label: "Projetos presenciais",
        type: ETipoConteudo.NUM,
        numbers: [
          {
            label: "Hospital",
            value: 39941,
            size: ENumeroTamanho.GDE,
          },
          {
            label: "São Paulo",
            value: 20859,
          },
          {
            label: "Recife",
            value: 19082,
          },
          {
            label: "Carnaval",
            value: 6564,
            size: ENumeroTamanho.GDE,
          },
          {
            label: "São Paulo",
            value: 4064,
          },
          {
            label: "Recife",
            value: 2500,
          },
          {
            label: "Rio de Janeiro",
            value: 2150,
          },
          {
            label: "Conta Causos",
            value: 158,
            size: ENumeroTamanho.GDE,
          },
        ],
      },
      "Crianças, acompanhantes, equipe hospitalar e outros beneficiados nos atendimentos presenciais que aconteceram até o dia 31/3/2020.",
    ],
  },
  {
    id: "21",
    title: "Impacto Social",
    hideTitleOnDesktop: true,
    links: [
      {
        front: true,
        image: "slide_23_1.png",
        alt:
          "Assista ao video 'Conta Causos - Histórias de palhaços ao vivo' no youtube",
        url: "https://www.youtube.com/watch?v=QEu1pwU_MTE&t=785s",
      },
      {
        image: "slide_23_2.png",
        alt: "Assista ao video 'Solte seus dragões' no youtube",
        url:
          "https://www.youtube.com/watch?v=UlKJsCet284&list=PLbGYBqIX5vaYy6znwWtYPO9F50gF1CCDl&index=10",
      },
    ],
    color: EColors.AZUL,
    content: [
      "A partir de abril, iniciamos uma série de vídeos e lives para diminuir a distância dos palhaços nos hospitais e manter a programação prevista para o ano em todas as áreas.",
      {
        section: "Projetos digitais:",
        label: "Delivery Besteirológico",
        type: ETipoConteudo.NUM,
        numbers: [
          {
            label: "Alcance",
            value: 12139163,
          },
          {
            label: "Visualizações",
            value: 8509401,
          },
          {
            label: "Interações",
            value: 459495,
          },
        ],
      },
      {
        label: "Consultório Besteirológico",
        type: ETipoConteudo.NUM,
        numbers: [
          {
            label: "Alcance",
            value: 358469,
          },
          {
            label: "Visualizações",
            value: 157933,
          },
          {
            label: "Interações",
            value: 33179,
          },
        ],
      },
    ],
  },
  {
    id: "22",
    title: "Impacto Social",
    color: EColors.AZUL,
    hideTitleOnDesktop: true,
    links: [
      {
        front: true,
        image: "slide_24_1.png",
        alt: "Assista ao video 'Websérie de São João - Episódio Um' no youtube",
        url:
          "https://www.youtube.com/watch?v=TN3o_8WJySA&list=PLbGYBqIX5vabZXqd_6PMZ9Uo-5V74DzyQ",
      },
      {
        image: "slide_24_2.png",
        alt:
          "Assista ao video 'Vem aí a websérie Auto de Natal dos Doutores da Alegria' no youtube",
        url:
          "https://www.youtube.com/watch?v=NBkJs_K3Jbc&list=PLbGYBqIX5vabBTAH3uQG_nW5wyFlO1fS8",
      },
    ],
    content: [
      {
        section: "Projetos digitais:",
        label: "Websérie São João",
        type: ETipoConteudo.NUM,
        numbers: [
          {
            label: "Alcance",
            value: 125330,
          },
          {
            label: "Visualizações",
            value: 70026,
          },
          {
            label: "Interações",
            value: 3615,
          },
        ],
      },
      {
        label: "Conta Causos",
        type: ETipoConteudo.NUM,
        numbers: [
          {
            label: "Alcance",
            value: 173966,
          },
          {
            label: "Visualizações",
            value: 59667,
          },
          {
            label: "Interações",
            value: 8181,
          },
        ],
      },
      {
        label: "Auto de Natal",
        type: ETipoConteudo.NUM,
        numbers: [
          {
            label: "Alcance",
            value: 394489,
          },
          {
            label: "Visualizações",
            value: 63876,
          },
          {
            label: "Interações",
            value: 3857,
          },
        ],
      },
    ],
  },
  {
    id: "23",
    title: "Impacto Social",
    color: EColors.AZUL,
    hideTitleOnDesktop: true,
    links: [
      {
        image: "slide_25_1.png",
        alt: "Assista ao video 'A importância do brincar' no youtube",
        url: "https://www.youtube.com/watch?v=TxCdS_vhT-A&t=2598s",
      },
      {
        front: true,
        image: "slide_25_2.png",
        alt:
          "Assista ao video 'Escola Doutores da Alegria em Obras #5 - Nosso público' no youtube",
        url: "https://www.youtube.com/watch?v=dKx6S0S8g2M&t=36s",
      },
    ],
    content: [
      "### Projetos digitais:",
      {
        label: "Delivery Platéias Hospitalares",
        type: ETipoConteudo.NUM,
        numbers: [
          {
            label: "Alcance",
            value: 287053,
          },
          {
            label: "Visualizações",
            value: 107621,
          },
          {
            label: "Interações",
            value: 744,
          },
        ],
      },
      {
        label: "Entrevista Besteirológica",
        type: ETipoConteudo.NUM,
        numbers: [
          {
            label: "Alcance",
            value: 53904,
          },
          {
            label: "Visualizações",
            value: 17436,
          },
          {
            label: "Interações",
            value: 3629,
          },
        ],
      },
      {
        label: "Escola em Obras",
        type: ETipoConteudo.NUM,
        numbers: [
          {
            label: "Alcance",
            value: 43130,
          },
          {
            label: "Visualizações",
            value: 18578,
          },
          {
            label: "Interações",
            value: 1173,
          },
        ],
      },
    ],
  },
  {
    id: "24",
    title: "Impacto Social",
    color: EColors.AZUL,
    hideTitleOnDesktop: true,
    content: [
      "### Projetos digitais:",
      {
        label: "Centro Cultural",
        type: ETipoConteudo.NUM,
        numbers: [
          {
            label: "Alcance",
            value: 32574,
          },
          {
            label: "Visualizações",
            value: 12551,
          },
          {
            label: "Interações",
            value: 857,
          },
        ],
      },
      "#### Plantão Besteirológico",
      "Em agosto, começamos as intervenções, ao vivo, porém virtuais nos hospitais de São Paulo e Recife, por meio de tablets conduzidos por profissionais de saúde.",
      {
        type: ETipoConteudo.NUM,
        numbers: [
          {
            label: "São Paulo",
            value: 3113,
          },
          {
            label: "Recife",
            value: 1493,
          },
        ],
      },
    ],
  },
]

export default CONTEUDO

// import { ENumeroTamanho, EColors, IConteudoSecao, ETipoConteudo, EApoioDisplay, IApoio } from "./types.d.ts"

// const ImpactoSocial = {
//   "presenciais": {
//     titulo: "Projetos presenciais",
//     projetos: [
//       {
//         label: "Hospital",
//         value: 39941,
//         data: [
//           {
//             label: "São Paulo",
//             value: 20859,
//           },
//           {
//             label: "Recife",
//             value: 19082,
//           },
//         ]
//       },
//       {
//         label: "Carnaval",
//         value: 6564,
//         data: [
//           {
//             label: "São Paulo",
//             value: 4064,
//           },
//           {
//             label: "Recife",
//             value: 2500,
//           },
//           {
//             label: "Rio de Janeiro",
//             value: 2150,
//           },
//         ]
//       },
//       {
//         label: "Conta Causos",
//         value: 158,
//         comment: "Crianças, acompanhantes, equipe hospitalar e outros nos atendimentos presenciais que aconteceram até o dia 31/3 2020."
//       }
//     ],
//     "digitais": {
//       projetos: [
//         {
//           label: "Delivery Besteirológico",
//           data: [
//             {
//               label: "Alcance",
//               value: 12139163,
//             },
//             {
//               label: "Visualizações",
//               value: 8509401,
//             },
//             {
//               label: "Interações",
//               value: 459495,
//             },
//           ]
//         },
//         {
//           label: "Consultório Besteirológico",
//           type: ETipoConteudo.NUM,
//           numbers: [
//             {
//               label: "Alcance",
//               value: 358469,
//             },
//             {
//               label: "Visualizações",
//               value: 157933,
//             },
//             {
//               label: "Interações",
//               value: 33179,
//             },
//           ]
//         },
//       ]
//     }
//   }
// }

// export default ImpactoSocial
