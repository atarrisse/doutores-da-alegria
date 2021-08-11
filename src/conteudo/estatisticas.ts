import { EColors, IConteudoSecao, ETipoConteudo } from "@/types.d.ts"

const Estatisticas: Array<IConteudoSecao> = [
  // {
  //   id: "26",
  //   title: "Prestação de contas e impacto social",
  //   color: EColors.ROXO,
  //   links: [
  //     {
  //       image: "slide_27_1.png",
  //       alt:
  //         "Assista ao video 'Doutores em Casa #8 - Reputação e credibilidade' no youtube",
  //       url: "https://www.youtube.com/watch?v=8SDUI9-46PQ&t=10s",
  //     },
  //     {
  //       front: true,
  //       image: "slide_27_2.png",
  //       alt:
  //         "Assista ao video 'Doutores em Casa #8 - Reputação e credibilidade' no youtube",
  //       url: "https://www.youtube.com/watch?v=8SDUI9-46PQ&t=10s",
  //     },
  //   ],
  //   content: [
  //     "Neste ano, os números de impacto da organização estão bastante relacionados às atividades virtuais. Sem as visitas aos hospitais e as pessoas nas plateias e nos eventos da sede, o público se envolveu com Doutores da Alegria nas telas de celulares e tablets.",
  //     "### Reputação e credibilidade",
  //     "Foi um ano difícil e intenso, mas conseguimos manter a arrecadação em um bom patamar.",
  //   ],
  //   extra: {
  //     color: "#FFFFFF",
  //     content: [
  //       "#### Reputação e credibilidade",
  //       "[https://www.youtube.com/watch?v=8SDUI9-46PQ](https://www.youtube.com/watch?v=8SDUI9-46PQ)",
  //     ],
  //   },
  // },
  {
    id: "27",
    title: "Recursos Arrecadados",
    color: EColors.VERDE,
    content: [
      "Em mil reais, inclusive resultados de aplicações financeiras",
      {
        type: ETipoConteudo.REC_ARRECADADOS,
      },
      "Nossas contas são auditadas anualmente por auditorias independentes. Em 2020, a Singolare Consultoria e Auditoria realizou este trabalho.",
      {
        type: ETipoConteudo.HTML,
        source:
          "<small>* Em 2016, o evento Gala Doutores da Alegria mobilizou empresas e pessoas, gerando recursospela venda de convites, cotas de patrocínio e leilão. Os recursos foram utilizados na produção do próprio evento e seu superávit foi integralmente aplicado nos projetos da associação.</small>",
      },
    ],
  },
  {
    id: "28",
    title: "Origem dos Recursos",
    color: EColors.AZUL_ESCURO,
    content: [
      "Período de janeiro a dezembro de 2020",
      {
        type: ETipoConteudo.REC_ORIGEM,
      },
    ],
  },
  {
    id: "29",
    title: "Aplicação dos Recursos",
    color: EColors.ROSA,
    content: [
      "Período de janeiro a dezembro de 2020",
      {
        type: ETipoConteudo.REC_APLICACAO,
      },
    ],
    extra: {
      color: "#FFFFFF",
      content: ["#### Quase lá", "Falta pouco pra você chegar na surpresa."],
    },
  },
]

export default Estatisticas
