import { EColors, IConteudoSecao, ETipoConteudo } from "@/types.d.ts";

const Estatisticas: Array<IConteudoSecao> = [
  {
    id: "35",
    title: "Expediente",
    color: EColors.AZUL,
    content: [
      {
        type: ETipoConteudo.EXPEDIENTE,
        fechamento: "Julho 2021",
        time: [
          { cargo: "Coordenação", nome: "Cristina Cardoso" },
          { cargo: "Redação e edição", nome: "Gabriela Caseff" },
          { cargo: "Projeto Gráfico e Diagramação", nome: "Danilo Lima" },
          { cargo: "Programação", nome: "Ana Tarrisse" },
          { cargo: "Colaboração", nome: "Arilson Lopes, Bruno Tavares, Carolina Kinoshita, Claudia Queliconi, Daiane Carina, Edilene Silva, Leticia Jardim, Lourdes Atiê, Luis Vieira da Rocha, Marcella Castilho, Nice Vasconcelos, Odete Peixoto, Ronaldo Aguiar, Silvia Contar, Simone Pimentel." },
        ],
        escritorios: [
          {
            cidade: "São Paulo",
            endereco: [
              "Rua Alves Guimarães, 73", "Pinheiros – 05410-000", "São Paulo – SP",
            ],
            tels: ["(11) 3061-5523"]
          },
          {
            cidade: "Recife",
            endereco: [
              "Rua Dona Maria César, 170", "Edifício Luciano Costa", "Sala 201B – 2º. Andar", "Bairro do Recife – 50030-140", "Recife – PE"
            ],
            tels: [
              "(81) 3466-2373",
              "(81) 3463-0866",
              "(81) 99112-4676"
            ]
          },
          {
            cidade: "Rio de Janeiro",
            endereco: [
              "Rua Sebastião de Lacerda, 47", "Laranjeiras – 22240-110", "Rio de Janeiro – RJ",
            ],
            tels: [
              "(21) 2297-4176",
            ]
          }
        ]
      }
    ],
  },
];


export default Estatisticas;
