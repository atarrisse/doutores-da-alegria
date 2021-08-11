import {
  EColors,
  IConteudoSecao,
  ETipoConteudo,
  EApoioDisplay,
  IApoio,
} from "@/types.d.ts"

const CONTEUDO: Array<IConteudoSecao> = [
  {
    id: "29",
    title: "A Equipe",
    color: EColors.VERMELHO,
    content: [
      "Doutores da Alegria conta com profissionais de várias formações. Essa multidisciplinaridade promove uma permanente e abrangente reflexão que envolve saúde, cultura e assistência social.",
      {
        type: ETipoConteudo.EQUIPE,
        teams: [
          {
            departamento: "Fundador",
            pessoas: {
              "": [{ nome: "Wellington Nogueira – Dr. Zinho" }],
            },
          },
          {
            departamento: "Diretoria Estaturária",
            gestao: "2020/21",
            pessoas: {
              "Diretor Presidente": [{ nome: "Luis Alberto Vieira da Rocha" }],
              "Diretora de Relações Institucionais": [
                { nome: "Daiane Carina Barbieri Ratão" },
              ],
              "Diretora de Formação": [{ nome: "Lourdes Atié" }],
              "Diretor Artístico - Dr. Charlito": [{ nome: "Ronaldo Aguiar" }],
              "Diretora Financeira": [{ nome: "Simone Pimentel" }],
            },
          },
          {
            departamento: "Marketing e Mobilização de Recursos",
            pessoas: {
              Analistas: [
                { nome: "Edilene Silva" },
                { nome: "Claudia Queliconi", nota: "(a partir de novembro)" },
                { nome: "Larissa Fernandes", nota: "(até setembro)" },
                { nome: "Leticia Jardim" },
              ],
            },
          },
          {
            departamento: "Comunicação",
            pessoas: {
              Coordenadora: [{ nome: "Cristina Cardoso" }],
              "Produção de Conteúdo": [{ nome: "Gabriela Caseff" }],
              Analistas: [{ nome: "Bruno Tavares" }, { nome: "Danilo Lima" }],
            },
          },
          {
            departamento: "Administrativo-Financeiro",
            pessoas: {
              Analistas: [
                { nome: "Patricia Santos Souza" },
                { nome: "Selma Soares" },
                { nome: "Thays Dias" },
              ],
            },
          },
          {
            departamento: "Tecnologia da Informação",
            pessoas: {
              Coordenadora: [{ nome: "Odete Peixoto" }],
            },
          },
          {
            departamento: "Planejamento e Jurídico",
            pessoas: {
              "Analista de Planejamento": [{ nome: "Carolina Kinoshita" }],
              Advogada: [
                { nome: "Fernanta Tessitore", nota: "(até setembro)" },
              ],
              "Assistente Social": [{ nome: "Olga Lembo" }],
            },
          },
          {
            departamento: "Escola",
            pessoas: {
              "Coordenador Pedagógico": [{ nome: "Moisés Batista" }],
              "Coordenador do Programa de Formação de Palhaço para Jovens - Dr. Severino ": [
                { nome: "Heraldo Firmino" },
              ],
              "Artista Formador - Dr. Zapata Lambada": [
                { nome: "Raul Figueiredo" },
              ],
              "Artista Formadora – Dra. Sakura": [{ nome: "Roberta Calza" }],
              "Artista Formadora – Dra. Ferrara": [{ nome: "Thais Ferrara" }],
              "Assistente da Escola": [{ nome: "Milena Barros" }],
              "Colaboradora da Escola": [{ nome: "Morgana Masetti" }],
            },
            programas: [
              {
                nome: "Programa de Formação de Palhaços para Jovens",
                organizacao: [
                  {
                    grupo: "Formadores",
                    pessoas: {
                      "": [
                        { nome: "Anelise Mayumi e Douglas Jesus" },
                        { nome: "Célio Colella" },
                        { nome: "Daiane Ratão" },
                        { nome: "Dario França" },
                        { nome: "Denise Guilherme" },
                        { nome: "Heraldo Firmino" },
                        { nome: "Monica Montenegro" },
                        { nome: "Nereu Afonso" },
                        { nome: "Thais Ferrara" },
                      ],
                    },
                  },
                  {
                    grupo: "Colaboradores",
                    pessoas: {
                      "Assistente social": [{ nome: "Olga Lembo" }],
                      "Produção cultural (na circulação)": [
                        { nome: "Marcella Casilho" },
                      ],
                    },
                  },
                  {
                    grupo: "Convidados Externos",
                    pessoas: {
                      "": [{ nome: "Grupo Wiriça dos Kariri – Xocó" }],
                    },
                  },
                  {
                    grupo: "Ciclo de Palestras",
                    pessoas: {
                      "": [
                        { nome: "Celso Frateschi" },
                        { nome: "Lino de Macedo" },
                        { nome: "Marcelo Laham" },
                        { nome: "Nelson Pretto" },
                      ],
                    },
                  },
                  {
                    grupo: "Formação Continuada",
                    pessoas: {
                      "": [
                        { nome: "Ana Olmos" },
                        { nome: "Denise Fraga" },
                        { nome: "Paulo Fochi" },
                      ],
                    },
                  },
                ],
              },
            ],
          },
          {
            departamento: "Unidade São Paulo",
            pessoas: {
              "Coordenador Artístico – Dr. Dadúvida": [{ nome: "David Tayiu" }],
              "Coordenadora de Produção": [{ nome: "Marcella Castilho" }],
              Recepcionista: [{ nome: "Juliana Bonatte" }],
              "Assistente de Produção": [{ nome: "Renato de Abreu" }],
              "Serviços Gerais": [
                { nome: "Elza Maria de Jesus" },
                { nome: "Maria Aparecida Sobrinho Lima" },
              ],
            },
            programas: [
              {
                organizacao: [
                  {
                    grupo: "Artistas",
                    pessoas: {
                      "": [
                        { nome: "Allan Benatti - Dr.Chabilson" },
                        { nome: "Anderson Machado -	Dr. Cavaco" },
                        { nome: "Anderson Spada -	Dr. De Dérson" },
                        { nome: "Angelo Brandini -	Dr. Zorinho" },
                        { nome: "Du Circo -	Dr. Pinheiro" },
                        { nome: "Dênis Goyos -	Dr. Fritz" },
                        { nome: "Duico Vasconcelos -	Dr. Pistolinha" },
                        { nome: "Henrique Rímoli -	Dr. Dus'Cuais" },
                        {
                          nome:
                            "Juliana Gontijo - in memorian -	Dra. Juca Pinduca",
                        },
                        { nome: "Filipe Bregantim -	Dr. Mendonça" },
                        { nome: "Gabi Zanola -	Dra. Pamplona" },
                        { nome: "Igor Canova -	Dr. Trillo" },
                        { nome: "Layla Ruiz - Dra. Pororoca" },
                        { nome: "Luciana Viacava -	Dra. Lola Brígida" },
                        { nome: "Márcio Douglas -	Dr. Mané Pereira" },
                        { nome: "Monique Franco -	Dra. Nina Rosa" },
                        { nome: "Nereu Afonso -	Dr. Zequim Bonito" },
                        { nome: "Nilson Domingues - Dr. Chicô Batavô" },
                        { nome: "Paola Musatti - Dra. Manela" },
                        { nome: "Raíssa Guimarães -	Dra. Faísca" },
                        { nome: "Roger Avanzi – in memorian -	Dr. Picolino" },
                        { nome: "Sandro Fontes -	Dr. Sandoval" },
                        { nome: "Sueli Andrade -	Dra. Greta Garboreta" },
                        { nome: "Suzana Aragão -	Dra. Bolot’s" },
                        { nome: "Tereza Gontijo -	Dra. Guadalupe" },
                        { nome: "Val Pires -	Dr. Valdisney" },
                        { nome: "Vera Abbud -	Dra. Emily" },
                      ],
                    },
                  },
                ],
              },
            ],
          },
          {
            departamento: "Unidade Recife",
            pessoas: {
              "Coordenador Artístico – Dr. Ado": [{ nome: "Arilson Lopes" }],
              "Coordenadora Administrativo e Produção": [
                { nome: "Nise Vasconcelos" },
              ],
              "Serviços Gerais": [{ nome: "Marinalva da Silva" }],
            },
            programas: [
              {
                organizacao: [
                  {
                    grupo: "Artistas",
                    pessoas: {
                      "": [
                        { nome: "Ana Flávia - Dra.Nana" },
                        { nome: "Eduardo Filho -	Dr. Dud Grud" },
                        { nome: "Fábio Caio -	Dr. Eu Zébio" },
                        { nome: "Greyce Braga -	Dra. Monalisa" },
                        { nome: "Juliana Almeida -	Dra. Baju" },
                        { nome: "Luciana Pontual -	Dra. Svenza" },
                        { nome: "Luciano Pontes -	Dr. Lui" },
                        { nome: "Marcelino Dias -	Dr. Micolino" },
                        { nome: "Marcelo Oliveira -Dr. Marmelo" },
                        { nome: "Olga Ferrario -	Dra. Musquita" },
                        { nome: "Thiago Gondim -	Dr. Gonda" },
                        { nome: "Wagner Oliveira -	Dr. Wago Ninguém" },
                      ],
                    },
                  },
                ],
              },
            ],
          },
          {
            departamento: "Unidade Rio de Janeiro",
            pessoas: {
              Coordenadora: [{ nome: "Silvia Contar" }],
              "Assistente de Produção": [{ nome: "Wallace Martins" }],
            },
          },
          {
            departamento: "Convidados Lives Entrevista Besteirológica - 2020",
            pessoas: {
              "": [
                { nome: "Fátima Pontes" },
                { nome: "Flavio Mitio Tamaguchi" },
                { nome: "Gustavo Ferreira" },
                { nome: "Jô Freitas" },
                { nome: "Laurice Siqueira" },
                { nome: "Luciano Mallmann" },
              ],
            },
          },
          {
            departamento: "Assessorias",
            pessoas: {
              "Gestão de pessoas": [{ nome: "Regina Leite" }],
              "": [
                { nome: "Editor: Edson Paes de Melo Filho e Lúcio Nunes (SP)" },
                { nome: "Edna Nunes e Pollyanna Diniz (Recife)" },
              ],
              Imprensa: [
                {
                  nome:
                    "Movimento Essencial: Pamina S. Milewski e Marcelle Braga (RJ)",
                },
              ],
              "Pesquisa e escola": [{ nome: "Morgana Masetti" }],
              "Tecnologia da informação": [
                {
                  nome:
                    "Knet – Carlos Sadao Eto, Jonathan Ribeiro Alves e Walter Karl Meyer",
                },
                { nome: "Kasi – Adriano Leite e Leandro Metropolo" },
                {
                  nome: "QS do Brasil – Cayo Souza, Marcio Dias, Vitor Lopes ",
                },
                { nome: "Focus Net – Fernando Luis Rodrigues" },
                {
                  nome:
                    "Interhome – Marcos Campos, Marcelo Campos, Nelson Lopes, Danilo Campos",
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: "30",
    title: "Parcerias e apoios",
    color: EColors.SALMAO,
    content: [
      {
        type: ETipoConteudo.APOIO,
        apoio: [
          {
            titulo: "Parceiros via Lei de Incentivo a Cultura",
            parcerias: [
              {
                categoria: "Gargalhada",
                destaque: true,
                tipo: EApoioDisplay.IMG,
                empresas: [
                  {
                    nome: "Drogasil",
                    site: "https://www.drogasil.com.br/",
                    filename: "parceiro-drogasil.png",
                  },
                  {
                    nome: "White Martins",
                    site: "https://www.praxair.com.br",
                    filename: "parceiro-white-martins.png",
                  },
                ],
              },
              {
                categoria: "Risada",
                destaque: true,
                tipo: EApoioDisplay.IMG,
                empresas: [
                  {
                    nome: "Blau farmacêutica",
                    site: "https://www.blau.com",
                    filename: "parceiro-blau.png",
                  },
                ],
              },
              {
                categoria: "Sorriso",
                destaque: false,
                tipo: EApoioDisplay.IMG,
                empresas: [
                  {
                    nome: "Aché",
                    site: "https://www.ache.com.br",
                    filename: "parceiro-ache.png",
                  },
                  {
                    nome: "Adient",
                    site: "https://www.adient.com",
                    filename: "parceiro-adient.png",
                  },
                  {
                    nome: "Bayer",
                    site: "https://www.bayer.com.br/pt/",
                    filename: "parceiro-bayer.png",
                  },
                  {
                    nome: "Visa",
                    site: "https://www.visa.com.br/",
                    filename: "parceiro-visa.png",
                  },
                ],
              },
              {
                categoria: "Narigada",
                destaque: false,
                tipo: EApoioDisplay.IMG,
                empresas: [
                  {
                    nome: "abbvie",
                    site: "https://www.abbvie.com/",
                    filename: "parceiro-abbvie.png",
                  },
                  {
                    nome: "Libbs",
                    site: "https://www.libbs.com.br/",
                    filename: "parceiro-libbs.png",
                  },
                  {
                    nome: "Torra",
                    site: "https://www.lojastorra.com.br/",
                    filename: "parceiro-torra.png",
                  },
                  {
                    nome: "UPL",
                    site: "https://www.upl-ltd.com/pt/open-ag",
                    filename: "parceiro-upl.png",
                  },
                ],
              },
              {
                categoria: "Cócegas",
                tipo: EApoioDisplay.TXT,
                empresas: [
                  { nome: "Onet" },
                  { nome: "Casa Santa Luzia" },
                  { nome: "Schott" },
                  { nome: "Grupo Combustran" },
                  { nome: "Embrastel" },
                ],
              },
              {
                categoria: "Narigada",
                tipo: EApoioDisplay.TXT,
                empresas: [
                  { nome: "Becton Dickson" },
                  { nome: "Ademilar Consórcio" },
                  { nome: "Transunion" },
                  { nome: "Metisa" },
                  { nome: "Razac" },
                  { nome: "Oliveira Trust" },
                  { nome: "Barão Distribuidora" },
                  { nome: "Galzerano" },
                  { nome: "Brtüv" },
                  { nome: "Bensis Health" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "31",
    title: "Parcerias e apoios",
    color: EColors.SALMAO,
    content: [
      {
        type: ETipoConteudo.APOIO,
        apoio: [
          {
            titulo: "Parceiros via Proac 2020/2021",
            parcerias: [
              {
                categoria: "Narigada",
                destaque: false,
                tipo: EApoioDisplay.IMG,
                empresas: [
                  {
                    nome: "EATON",
                    site: "https://www.eaton.com/br/pt-br.html",
                    filename: "parceiro-eaton.png",
                    destaque: true,
                  },
                  {
                    nome: "Premier Pet",
                    site: "https://www.premierpet.com.br/",
                    filename: "parceiro-premier-pet.png",
                  },
                  {
                    nome: "Tirolez",
                    site: "https://www.tirolez.com.br/",
                    filename: "parceiro-tirolez.png",
                  },
                ],
              },
              {
                categoria: "Cócegas",
                tipo: EApoioDisplay.TXT,
                empresas: [{ nome: "Intermed" }],
              },
              {
                categoria: "Narigada",
                tipo: EApoioDisplay.TXT,
                empresas: [
                  { nome: "Bufalo" },
                  { nome: "Julio Okubo" },
                  { nome: "Supermercado Barbosa" },
                ],
              },
            ],
          },
          {
            titulo: "Plantão Besteirológico",
            parcerias: [
              {
                tipo: EApoioDisplay.TXT,
                empresas: [{ nome: "B3" }, { nome: "Caterpillar" }],
              },
            ],
          },
          {
            titulo: "Parceiros Governamentais",
            parcerias: [
              {
                tipo: EApoioDisplay.IMG,
                empresas: [
                  {
                    nome: "Lei de incentivo à Cultura",
                    filename: "gov-lei-de-incentivo-a-cultura.png",
                  },
                  {
                    nome: "Prefeitura da Cidade de Recife",
                    filename: "gov-prefeitura-recife.png",
                  },
                  {
                    nome:
                      "Secretaria de cultura do Governo do Estado de Pernambuco",
                    filename: "gov-estado-pernambuco.png",
                  },
                  {
                    nome: "Prefeitura da Cidade do Rio de Janeiro",
                    filename: "gov-prefeitura-rio.png",
                  },
                  {
                    nome:
                      "Secretaria de Saúde da Prefeitura da Cidade do Rio de Janeiro",
                    filename: "gov-estado-rio.png",
                  },
                  {
                    nome:
                      "Secretaria de Saúde do Governo do Estado do Rio de Janeiro",
                    filename: "gov-saude-prefeitura-rio.png",
                  },
                  {
                    nome:
                      "Fundo Municipal dos Direitos da Criança e do Adolescente",
                    filename: "gov-funcad.png",
                  },
                  {
                    nome:
                      "Conselho Municipal dos Direitos da Criança e do Adolescente de So Paulo",
                    filename: "gov-cmdca.png",
                  },
                  {
                    nome: "Incentivo à Cultura do Estado de São Paulo",
                    filename: "gov-proac-sp.png",
                  },
                  {
                    nome:
                      "Secretaria de Direitos Humanos e Cidadania da Prefeitura da Cidade e São Paulo",
                    filename: "gov-direitos-humanos-sp.png",
                  },
                  {
                    nome:
                      "Secretaria da Cultura do Governo do Estado de São Paulo",
                    filename: "gov-estado-sp.png",
                  },
                  {
                    nome:
                      "Secretaria Especial da Cultura, Ministério da Cidadania, Governo Federal",
                    filename: "gov-federal.png",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "32",
    title: "Parcerias e apoios",
    color: EColors.SALMAO,
    content: [
      {
        type: ETipoConteudo.APOIO,
        apoio: [
          {
            titulo: "Marketing relacionado à causa",
            parcerias: [
              {
                categoria: "Campanhas regulares",
                destaque: false,
                tipo: EApoioDisplay.TXT,
                empresas: [{ nome: "Atacadão" }, { nome: "Visa Causas" }],
              },
              {
                categoria: "Nota fiscal paulista",
                destaque: false,
                tipo: EApoioDisplay.TXT,
                empresas: [
                  { nome: "Sorveteria Oggi" },
                  { nome: "Padaria Suil Bakery" },
                  { nome: "Iguatemi" },
                ],
              },
              {
                categoria: "Programas de milhagem",
                tipo: EApoioDisplay.TXT,
                destaque: false,
                empresas: [
                  { nome: "Dotz" },
                  { nome: "Latampass" },
                  { nome: "Livelo" },
                  { nome: "Sempre Presente Itaucard" },
                ],
              },
              {
                categoria: "Sites e Crowdfunding",
                destaque: false,
                tipo: EApoioDisplay.TXT,
                empresas: [{ nome: "Paypal" }, { nome: "Presente Consciente" }],
              },
            ],
          },
          {
            titulo: "Apoio técnico",
            parcerias: [
              {
                categoria: "Apoios Regulares de São Paulo",
                destaque: false,
                tipo: EApoioDisplay.TXT,
                empresas: [
                  { nome: "Acervo África" },
                  { nome: "Ambiente" },
                  { nome: "Artur Restaurante" },
                  { nome: "Bit Defender" },
                  { nome: "BTO +" },
                  { nome: "Café CAOC" },
                  { nome: "Site Blindado" },
                  { nome: "Clipping Service" },
                  { nome: "Cultura Inglesa" },
                  { nome: "FUNSAI - Espaço Quixote" },
                  { nome: "Gusmão & Labrunie" },
                  { nome: "Handtalk" },
                  { nome: "Hostgator" },
                  { nome: "Kasi" },
                  { nome: "Microsoft" },
                  { nome: "Navalha Studio" },
                  { nome: "QS do Brasil" },
                  { nome: "SBC Trans" },
                  { nome: "Symantec" },
                  { nome: "Trama" },
                  { nome: "UZMK Comunicação" },
                ],
              },
              {
                categoria: "Apoios Regulares de Recife",
                destaque: false,
                tipo: EApoioDisplay.TXT,
                empresas: [
                  { nome: "Água Mineral Santa Joana" },
                  { nome: "Luciana Raposo" },
                ],
              },
              {
                categoria: "Apoios Pontuais de Recife",
                destaque: false,
                tipo: EApoioDisplay.TXT,
                empresas: [{ nome: "Villa Vecchia Bar e Restaurante" }],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "33",
    title: "Parcerias e apoios",
    color: EColors.SALMAO,
    content: [
      "### Doadores Pessoa Física",
      {
        type: ETipoConteudo.BUSCA,
      },
    ],
  },
]

export default CONTEUDO