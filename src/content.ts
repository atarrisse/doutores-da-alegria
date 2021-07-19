import { ENumeroTamanho, EColors, IConteudoSecao, ETipoConteudo, EApoioDisplay, IApoio } from "./types.d.ts"

const CONTEUDO: Array<IConteudoSecao> = [
  {
    title: "Oi!",
    color: EColors.ROSA,
    content: [
      "Esta é a primeira edição online do Balanço dos Doutores da Alegria, publicação que há 12 anos cumpre o papel de prestar contas das atividades anuais da associação. Para navegar por ela, siga os passos:",
      "[tutorial + acessibilidade + índice]",
      "Escondemos uma surpresinha em uma das páginas. Você consegue descobrir?",
    ],
  },
  {
    title: "Sobre viver!",
    color: EColors.VERMELHO,
    content: [
      "Foram 300 dias absolutamente diferentes de tudo o que já vivemos em quase 30 anos. Mais do que contar como a organização se reinventou em 2020, este balanço procura mostrar como Doutores da Alegria sobreviveu em um ano em que o [inimaginável se tornou realidade.]()",
      "Os textos, fotos e vídeos desta edição respondem a uma pergunta: de que maneira uma associação de palhaços que fazem intervenções presenciais dentro de hospitais públicos se mostrou relevante em uma pandemia?",
    ],
  },
  {
    title: "Spoiler",
    color: EColors.AZUL,
    content: [
      "Sem querer estragar a surpresa do que vem pela frente, podemos dizer que, diante dos impactos do coronavírus na sociedade e, principalmente, no sistema público de saúde, Doutores da Alegria criou uma série de ações virtuais para seguir oferecendo arte como antídoto potente para profissionais de saúde e crianças hospitalizadas.",
    ],
    extra: [""]
  },
  {
    title: "A.C",
    color: EColors.VERDE,
    content: [
      "### Antes do coronavírus",
      "O vírus parecia distante das terras brasileiras em janeiro. Doutores da Alegria dava as boas-vindas ao novo ano com a pretensão de realizar um festival de música e arte. Seria um encontro de famílias com diversas atividades coletivas em um parque paulistano.",
      "No Recife, o elenco pernambucano apresentou o espetáculo Cenas Curtas ao festival Janeiro de Grandes Espetáculos. [Foram duas sessões]() no Teatro Marco Camarotti, no Sesc Santo Amaro.",
      "Uma [edição única e gratuita]() do espetáculo Conta Causos tomou o Teatro Eva Herz, em São Paulo, com relatos dos besteirologistas durante as visitas a hospitais.",
    ],
    extra: [
      "#### De onde vêm os narizes?",
      "[Veja o nascimento deles neste vídeo belíssimo. Linkar o vídeo.]"
    ]
  },
  {
    title: "De outros Carnavais",
    color: EColors.AZUL,
    content: [
      "No palco do samba, Doutores da Alegria [foi homenageada pela Escola de Samba Dragões da Real](). No dia 21 de fevereiro, a agremiação do Grupo Especial levou o enVERMELHOo “A Revolução do Riso: A Arte de Subverter O Mundo Pelo Divino Poder da Alegria” para o Sambódromo do Anhembi, em São Paulo.",
      "O carro alegórico capitaneado por Wellington Nogueira, nosso fundador, desfilou com parte da equipe e dos artistas cantando a plenos pulmões. Emoção única!",
      "Também colocamos nossos blocos na avenida. A 17ª edição do Bloco do Miolo Mole arrastou foliões pelo Recife Antigo no dia 20 de fevereiro. E dezenove hospitais públicos de São Paulo, Recife e Rio de Janeiro [receberam bloquinhos]() compostos por palhaços e artistas convidados.",
    ],
  },
  {
    title: "Paramos",
    color: EColors.VERMELHO,
    content: [
      "No palco do samba, Doutores da Alegria [foi homenageada pela Escola de Samba Dragões da Real](). No dia 21 de fevereiro, a agremiação do Grupo Especial levou o enVERMELHOo “A Revolução do Riso: A Arte de Subverter O Mundo Pelo Divino Poder da Alegria” para o Sambódromo do Anhembi, em São Paulo.",
      "O carro alegórico capitaneado por Wellington Nogueira, nosso fundador, desfilou com parte da equipe e dos artistas cantando a plenos pulmões. Emoção única!",
      "Também colocamos nossos blocos na avenida. A 17ª edição do Bloco do Miolo Mole arrastou foliões pelo Recife Antigo no dia 20 de fevereiro. E dezenove hospitais públicos de São Paulo, Recife e Rio de Janeiro [receberam bloquinhos]() compostos por palhaços e artistas convidados.",
    ],
  },
  {
    title: "Delivery Besteirológico",
    color: EColors.ROSA,
    content: [
      "Um comitê composto por diversos profissionais da organização, com apoio da diretoria, criou a série de vídeos Delivery Besteirológico. A ideia era aproximar os palhaços, em distanciamento social, das crianças hospitalizadas, profissionais de saúde e público nas VERMELHOes sociais.",
      "Era dessa maneira que [entraríamos nos hospitais]() enquanto o vírus não desse trégua.",
    ],
    extra: [
      "#### Ué",
      "Para que arte em tempos de pandemia? A gente explica neste vídeo."
    ]
  },
  {
    title: "Troca de Guarda",
    color: EColors.SALMAO,
    content: [
      "Em abril, a associação Doutores da Alegria passou a contar [com uma nova diretoria estatutária para o biênio 2020-2022](). Quatro dos diretores se mantiveram no cargo: Luis Vieira da Rocha como diretor-presidente, Daiane Carina como diretora de Relações Institucionais, Ronaldo Aguiar como diretor Artístico e Simone Pimentel como diretora Financeira. A nova diretora de Formação, Lourdes Atié, substituiu Thaïs Ferrara.",
    ],
  },
  {
    title: "Tem uma pessoa no hospital que...",
    color: EColors.PURPLE,
    content: [
      "... Cuida da música que toca dentro da gente. Que cuida do trânsito, organiza as macas. Que mexe com a gente por dentro. Que faz a gente pegar no sono. Que ajuda a respirar melhor...",
      "Em um dos momentos mais críticos da pandemia, em maio de 2020, Doutores da Alegria dedicou um vídeo aos profissionais de saúde. Prepara o lencinho...",
    ],
    extra: [
      "#### Homenagem",
      "As super-heroínas usam jaleco e podemos provar. Veja no texto."
    ]
  },
  {
    title: "O digital e o novo normal",
    color: EColors.VERMELHO,
    content: [
      "Utilizando o potencial das VERMELHOes sociais para chegar ao público, a associação inaugurou uma série de conteúdos digitais em junho.",
      "### Consultório Besteirológico",
      "Transmitido ao vivo pelo canal dos Doutores no YouTube e pela página do Facebook, o consultório fictício trouxe um papo ao vivo entre palhaços –quase sempre um de São Paulo e um de Recife– e o público.",
      "A ação exigiu adaptação a ferramentas online, direção artística e ensaios entre as duplas, que muitas vezes nunca tinham atuado juntas.",
    ],
  },
  {
    title: "O digital e o novo normal",
    color: EColors.VERMELHO,
    content: [
      "### Websérie de São João e de Natal",
      "O cortejo seguido de apresentação que celebra São João todos os anos nos hospitais também se adaptou à pandemia. A websérie “A peleja do noivo que tentou enganar a noiva na festa de São João ou vice e versa” foi ao ar nos canais da organização em cinco capítulos, gravados a distância e com participação de Dudu do Acordeon.",
      "Em dezembro, o cortejo de Natal seguiu o modelo de sucesso junino. Surgiu a websérie Auto de Natal. [Tem até bastidores.]()",
    ],
    extra: [
      "#### Ao vivo",
      "A Pororoca começou a live em um pula-pula, a Svenza passou aspirador de pó na casa e o Cavaco fez com o Gonda uma improvisação musical ao vivo"
    ]
  },
  {
    title: "O digital e o novo normal",
    color: EColors.VERMELHO,
    content: [
      "### Plateias Hospitalares Delivery",
      "Companhias participantes do projeto no Rio de Janeiro foram convidadas a produzir vídeos com adaptações de seus espetáculos. As apresentações que circulariam pelos hospitais foram veiculadas nas VERMELHOes da organização durante o ano.",
    ],
  },
  {
    title: "O digital e o novo normal",
    color: EColors.VERMELHO,
    content: [
      "### Escola em Obras",
      "A reorganização dos programas da Escola Doutores da Alegria para o formato virtual ganhou uma série. Cada um dos cinco episódios trouxe questões debatidas pelos formadores da escola: sua pedagogia, a quem se destinam os cursos e os sistemas de formação.",
      "### Ciclo de Palestras",
      "As lives temáticas propostas pela Escola trouxeram profissionais da associação em debate com convidados. Entre os assuntos abordados, a importância do brincar, saúde mental em tempos de pandemia, arte e acessibilidade e humor na crise.",
    ],
    extra: []
  },
  {
    title: "O digital e o novo normal",
    color: EColors.VERMELHO,
    content: [
      "### Doutores em Casa",
      "O boletim quinzenal fez a prestação de contas da associação durante o isolamento social. Apresentado por integrantes da equipe técnica, os oito episódios contaram em primeira mão os projetos desenvolvidos durante o ano.",
    ],
    extra: [
      "#### Au-Au:",
      "Uma das diretoras precisou ir até a sede gravar. É que ela mora em um sítio e seus cachorros queriam participar com latidos."
    ]
  },
  {
    title: "O digital e o novo normal",
    color: EColors.VERMELHO,
    content: [
      "### Conta Causos",
      "O espetáculo com artistas contando histórias vivenciadas nos hospitais foi apresentado virtualmente pela primeira vez em agosto. Com duração de uma hora, trazia até seis palhaços na tela que, ao final, respondiam perguntas do público.",
      "A equipe de Comunicação ficava nos bastidores alternando as telas, cuidando do áudio e da interação nas VERMELHOes sociais.",
    ],
    extra: [
      "Bastidores:",
      "“Gabi, tá chovendo aqui e pode cair a internet. Consegue ficar de apoio?”, disse Bruno Tavares, que cuidava da transmissão ao vivo enquanto chovia granizo na Bela Vista."
    ]
  },
  {
    title: "Festival Miolo Mole",
    color: EColors.AZUL,
    content: [
      "### A live das lives",
      "O Festival Miolo Mole, que seria oferecido à cidade de São Paulo em 2020, foi adaptado para o formato digital, em uma live com sete horas de duração e atividades dedicadas a toda a família. Foi ao vivo, no dia 26 de julho, o dia dos avós.",
      "> Realizar um festival em plena pandemia foi um passo ousado, mas também é isso que nos faz uma instituição potente e que abraça os desafios que surgem com muita leveza.",
      "> > Ronaldo Aguiar, diretor artístico",
      "Com intenção de arrecadar doações para a causa, Doutores da Alegria convidou artistas como Toquinho, Beatles para Crianças e Palavra Cantada, que envolveram o público com sua arte. Os artistas palhaços conduziram o festival, que foi veiculado nos canais da associação e na TV Claro.",
      "### Parceiros do Festival",
      "# incluir imagem"
    ],
    extra: []
  },
  {
    title: "Entrada pelo... Tablet!",
    color: EColors.VERDE,
    content: [
      "Com cenário incerto ainda no meio do ano, Doutores da Alegria ofereceu a possibilidade de realizar visitas dos palhaços virtualmente nas pediatrias. Em agosto de 2020, o projeto piloto Plantão Besteirológico teve início no Hospital M’boi Mirim (SP) e, algum tempo depois, [foi se ampliando para todos os hospitais parceiros]() da organização em São Paulo e Recife.",
      "Foram mais de 4.600 visitas virtuais no ano passado, com uso de tablets e apoio de profissionais de saúde.",
      "> Em um tempo tão louco, o contato com o outro é essencial para a saúde e a sanidade.",
      "> > Val Pires"
    ],
  },
  {
    title: "Os nossos 29 anos",
    color: EColors.AZUL,
    content: [
      "Assim como os aniversários de todos os brasileiros em 2020, a comemoração dos 29 anos da Doutores da Alegria foi a distância. Duas lives celebraram o marco, uma delas ancorada por Wellington Nogueira.",
      "Em um vídeo coletivo, colaboradores, artistas e o fundador Wellington Nogueira contaram pedacinhos de suas histórias com a organização.",
      "“E não é exagero nenhum dizer que aquilo mudou a minha vida e determinou boa parte das coisas que faço até hoje”, diz Nereu Afonso, relembrando sua entrada na Doutores em 1996.",
    ],
  },
  {
    title: "Uma nova rede de palhaços",
    color: EColors.ROSA,
    content: [
      " O Encontro Nacional de Palhaços que Atuam em Hospitais aconteceu em 7 e 8 de novembro. Houve mesas de debate com convidados, oficinas, rodas de conversa e um espetáculo. Tudo gratuito e por transmissão ao vivo, em função da pandemia.",
      "Teve até um simbólico reencontro entre o ator que criou e sistematizou a atividade de palhaço em hospital no mundo — o americano Michael Christensen do The Clown Care Unit — e o ator que trouxe esse trabalho para o Brasil — Wellington Nogueira, fundador da Doutores da Alegria.",
      "A sexta edição do encontro marcou a [descentralização da rede](), que terá autonomia própria e será gerida por um coletivo de organizações.",
    ],
    extra: [
      "#### O Grande Encontro",
      "[Bate-papo entre os mestres Wellington Nogueira e Michael Christensen. Assista!]()"
    ]
  },
  {
    title: "Programa de formação de jovens",
    color: EColors.SALMAO,
    content: [
      "As aulas presenciais diárias na sede da Doutores se reduziram ao espaço virtual em 2020. Foi a adaptação possível na busca de caminhos para seguir na formação de jovens palhaços e palhaças.",
      "No final do ano, os alunos apresentaram seus ‘exercícios artísticos’, que corresponderam à formatura do curso, em formato audiovisual. Chegaram ao vídeo ‘Quatro Noites’, com com filmagem e montagem de Nereu Afonso",
    ],
  },
  {
    title: "Boca laaaarga",
    color: EColors.VERMELHO,
    content: [
      "Na última semana no ano [lançamos o quinto volume da série Boca Larga](), em edição virtual e gratuita. O livro compila textos de diversos colaboradores da associação, entre artistas e profissionais multidisciplinares, sobre os impactos do novo coronavírus nos ofícios de cada área.",
      "> A ideia foi abraçada por muitos que, corajosamente, expuseram como se sentem, aprendem e desfrutam, buscando caminhos para viver em tempos tão difíceis",
      "> > Lourdes Atié",
    ],
  },
  {
    title: "Impacto Socal",
    color: EColors.AZUL,
    content: [
      {
        label: "### Projetos presenciais",
        type: ETipoConteudo.NUM,
        numbers: [
          {
            label: "Hospital",
            value: 36941,
            size: ENumeroTamanho.GDE
          },
          {
            label: "São Paulo",
            value: 20859,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Recife",
            value: 19082,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Carnaval",
            value: 6564,
            size: ENumeroTamanho.GDE
          },
          {
            label: "São Paulo",
            value: 4064,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Recife",
            value: 2500,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Rio de Janeiro",
            value: 2150,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Conta Causos",
            value: 158,
            size: ENumeroTamanho.GDE
          }
        ]
      },
      "Crianças, acompanhantes, equipe hospitalar e outros nos atendimentos presenciais que aconteceram até o dia 31/3 2020."
    ]
  },
  {
    title: "Impacto Socal",
    color: EColors.AZUL,
    content: [
      "A partir de abril, iniciamos uma série de vídeos e lives para diminuir a distância dos palhaços nos hospitais e manter a programação prevista para o ano em todas as áreas.",
      "#### Projetos digitais:",
      {
        label: "#### Delivery Besteirológico",
        type: ETipoConteudo.NUM,
        numbers: [
          {
            label: "Alcance",
            value: 12139163,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Visualizações",
            value: 8509401,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Interações",
            value: 459495,
            size: ENumeroTamanho.PQE
          },
        ]
      },
      {
        label: "#### Consultório Besteirológico",
        type: ETipoConteudo.NUM,
        numbers: [
          {
            label: "Alcance",
            value: 358469,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Visualizações",
            value: 157933,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Interações",
            value: 33179,
            size: ENumeroTamanho.PQE
          },
        ]
      },
    ]
  },
  {
    title: "Impacto Socal",
    color: EColors.AZUL,
    content: [
      "#### Projetos digitais:",
      {
        label: "#### Websérie São João",
        type: ETipoConteudo.NUM,
        numbers: [
          {
            label: "Alcance",
            value: 125330,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Visualizações",
            value: 70026,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Interações",
            value: 3615,
            size: ENumeroTamanho.PQE
          },
        ]
      },
      {
        label: "#### Conta Causos",
        type: ETipoConteudo.NUM,
        numbers: [
          {
            label: "Alcance",
            value: 173966,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Visualizações",
            value: 59667,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Interações",
            value: 8181,
            size: ENumeroTamanho.PQE
          },
        ]
      },
      {
        label: "#### Auto de Natal",
        type: ETipoConteudo.NUM,
        numbers: [
          {
            label: "Alcance",
            value: 394489,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Visualizações",
            value: 63876,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Interações",
            value: 3857,
            size: ENumeroTamanho.PQE
          },
        ]
      },
    ]
  },
  {
    title: "Impacto Socal",
    color: EColors.AZUL,
    content: [
      "#### Projetos digitais:",
      {
        label: "#### Delivery Platéias Hospitalares",
        type: ETipoConteudo.NUM,
        numbers: [
          {
            label: "Alcance",
            value: 287053,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Visualizações",
            value: 107621,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Interações",
            value: 744,
            size: ENumeroTamanho.PQE
          },
        ]
      },
      {
        label: "#### Entrevista Besteirológica",
        type: ETipoConteudo.NUM,
        numbers: [
          {
            label: "Alcance",
            value: 53904,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Visualizações",
            value: 17436,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Interações",
            value: 3629,
            size: ENumeroTamanho.PQE
          },
        ]
      },
      {
        label: "#### Escola em Obras",
        type: ETipoConteudo.NUM,
        numbers: [
          {
            label: "Alcance",
            value: 43130,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Visualizações",
            value: 18578,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Interações",
            value: 1173,
            size: ENumeroTamanho.PQE
          },
        ]
      },
    ]
  },
  {
    title: "Impacto Socal",
    color: EColors.AZUL,
    content: [
      "#### Projetos digitais:",
      {
        label: "#### Centro Cultural",
        type: ETipoConteudo.NUM,
        numbers: [
          {
            label: "Alcance",
            value: 32574,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Visualizações",
            value: 12551,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Interações",
            value: 857,
            size: ENumeroTamanho.PQE
          },
        ]
      },
      "#### Plantão Besteirológico",
      "Em agosto, começamos as intervenções, ao vivo, porém virtuais nos hospitais de São Paulo e Recife, por meio de tablets conduzidos por profissionais de saúde.",
      {
        label: "#### Escola em Obras",
        type: ETipoConteudo.NUM,
        numbers: [
          {
            label: "Alcance",
            value: 53904,
            size: ENumeroTamanho.PQE
          },
          {
            label: "Visualizações",
            value: 17436,
            size: ENumeroTamanho.PQE
          },
        ]
      },
    ]
  },
  {
    title: "Prestação de contas e impacto social",
    color: EColors.ROXO,
    content: [
      "Neste ano, os números de impacto da organização estão bastante relacionados às atividades virtuais. Sem as visitas aos hospitais e as pessoas nas plateias e nos eventos da sede, o público se envolveu com Doutores da Alegria nas telas de celulares e tablets.",
      "### Reputação e credibilidade",
      "Foi um ano difícil e intenso, mas conseguimos manter a arrecadação em um bom patamar."
    ],
    extra: [
      "#### Reputação e credibilidade",
      "[https://www.youtube.com/watch?v=8SDUI9-46PQ](https://www.youtube.com/watch?v=8SDUI9-46PQ)"
    ]
  }
]

export const APOIO: Array<IApoio> = [
  [
    {
      titulo: "Parceiros via Lei de Incentivo a Cultura",
      pasta: "parceiros-via-lei-de-incentivo-a-cultura",
      parcerias: [
        {
          categoria: "Gargalhada",
          destaque: true,
          tipo: EApoioDisplay.IMG,
          empresas: [
            { nome: "Drogasil", site: "https://www.drogasil.com.br/" },
            { nome: "White Martins", site: "https://www.praxair.com.br" }
          ]
        },
        {
          categoria: "Risada",
          destaque: true,
          tipo: EApoioDisplay.IMG,
          empresas: [
            { nome: "Blau farmacêutica", site: "https://www.blau.com" },
          ]
        },
        {
          categoria: "Sorriso",
          destaque: false,
          tipo: EApoioDisplay.IMG,
          empresas: [
            { nome: "Aché", site: "https://www.ache.com.br" },
            { nome: "Adient", site: "https://www.adient.com" },
            { nome: "Bayer", site: "https://www.bayer.com.br/pt/" },
            { nome: "Visa", site: "https://www.visa.com.br/" },
          ]
        },
        {
          categoria: "Narigada",
          destaque: false,
          tipo: EApoioDisplay.IMG,
          empresas: [
            { nome: "abbvie", site: "https://www.abbvie.com/" },
            { nome: "Libbs", site: "https://www.libbs.com.br/" },
            { nome: "Torra", site: "https://www.lojastorra.com.br/" },
            { nome: "UPL", site: "https://www.upl-ltd.com/pt/open-ag" },
          ]
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
          ]
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
          ]
        },
      ]
    }
  ],
  [
    {
      titulo: "Parceiros via Proac 2020/2021",
      pasta: "parceiros-via-proac",
      parcerias: [
        {
          categoria: "Narigada",
          destaque: false,
          tipo: EApoioDisplay.IMG,
          empresas: [
            { nome: "EATON", site: "https://www.eaton.com/br/pt-br.html", destaque: true },
            { nome: "Premier Pet", site: "https://www.premierpet.com.br/" },
            { nome: "Tirolez", site: "https://www.tirolez.com.br/" },
          ]
        },
        {
          categoria: "Cócegas",
          tipo: EApoioDisplay.TXT,
          empresas: [
            { nome: "Intermed" },
          ]
        },
        {
          categoria: "Narigada",
          tipo: EApoioDisplay.TXT,
          empresas: [
            { nome: "Bufalo" },
            { nome: "Julio Okubo" },
            { nome: "Supermercado Barbosa" },
          ]
        },
      ]
    },
    {
      titulo: "Plantão Besteirológico",
      parcerias: [
        {
          tipo: EApoioDisplay.TXT,
          empresas: [
            { nome: "B3" },
            { nome: "Caterpillar" },
          ]
        },
      ]
    },
    {
      titulo: "Parceiros Governamentais",
      parcerias: [
        {
          tipo: EApoioDisplay.IMG,
          empresas: [
            { nome: "Lei de incentivo à Cultura" },
            { nome: "Prefeitura da Cidade de Recife" },
            { nome: "Secretaria de cultura do Governo do Estado de Pernambuco" },
            { nome: "Prefeitura da Cidade do Rio de Janeiro" },
            { nome: "Secretaria de Saúde da Prefeitura da Cidade do Rio de Janeiro" },
            { nome: "Secretaria de Saúde do Governo do Estado do Rio de Janeiro" },
            { nome: "Fundo Municipal dos Direitos da Criança e do Adolescente" },
            { nome: "Conselho Municipal dos Direitos da Criança e do Adolescente de São Paulo" },
            { nome: "Incentivo à Cultura do Estado de São Paulo" },
            { nome: "Secretaria de Direitos Humanos e Cidadania da Prefeitura da Cidade de São Paulo" },
            { nome: "Secretaria da Cultura do Governo do Estado de São Paulo" },
            { nome: "Secretaria Especial da Cultura, Ministério da Cidadania, Governo Federal" },
          ]
        }
      ]
    },
  ],
  [
    {
      titulo: "Marketing relacionado à causa",
      parcerias: [
        {
          categoria: "Campanhas regulares",
          destaque: false,
          tipo: EApoioDisplay.TXT,
          empresas: [
            { nome: "Atacadão" },
            { nome: "Visa Causas" },
          ]
        },
        {
          categoria: "Nota fiscal paulista",
          destaque: false,
          tipo: EApoioDisplay.TXT,
          empresas: [
            { nome: "Sorveteria Oggi" },
            { nome: "Padaria Suil Bakery" },
            { nome: "Iguatemi" },
          ]
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
          ]
        },
        {
          categoria: "Sites e Crowdfunding",
          destaque: false,
          tipo: EApoioDisplay.TXT,
          empresas: [
            { nome: "Paypal" },
            { nome: "Presente Consciente" },
          ]
        },
      ]
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
          ]
        },
        {
          categoria: "Apoios Regulares de Recife",
          destaque: false,
          tipo: EApoioDisplay.TXT,
          empresas: [
            { nome: "Água Mineral Santa Joana" },
            { nome: "Luciana Raposo" },
          ]
        },
        {
          categoria: "Apoios Pontuais de Recife",
          destaque: false,
          tipo: EApoioDisplay.TXT,
          empresas: [
            { nome: "Villa Vecchia Bar e Restaurante" },
          ]
        },
      ]
    }
  ]
]

export const EQUIPE = [
  {
    departamento: "Fundador",
    pessoas: [
      { nome: "Wellington Nogueira – Dr. Zinho" }
    ]
  },
  {
    departamento: "Diretoria Estaturária",
    gestao: "2020/21",
    pessoas: {
      "Diretor Presidente": [{ nome: "Luis Alberto Vieira da Rocha" }],
      "Diretora de Relações Institucionais": [{ nome: "Daiane Carina Barbieri Ratão" }],
      "Diretora de Formação": [{ nome: "Lourdes Atié" }],
      "Diretor Artístico - Dr. Charlito": [{ nome: "Ronaldo Aguiar" }],
      "Diretora Financeira": [{ nome: "Simone Pimentel" }],
    }
  },
  {
    departamento: "Marketing e Mobilização de Recursos",
    pessoas: {
      "Analistas": [
        { nome: "Edilene Silva" },
        { nome: "Claudia Queliconi", nota: "(a partir de novembro)" },
        { nome: "Larissa Fernandes", nota: "(até setembro)" },
        { nome: "Leticia Jardim" }
      ]
    }
  },
  {
    departamento: "Comunicação",
    pessoas: {
      "Coordenadora": [
        { nome: "Cristina Cardoso" },
      ],
      "Produção de Conteúdo": [
        { nome: "Gabriela Caseff" },
      ],
      "Analistas": [
        { nome: "Bruno Tavares" },
        { nome: "Danilo Lima" },
      ],
    }
  },
  {
    departamento: "Administrativo-Financeiro",
    pessoas: {
      "Analistas": [
        { nome: "Patricia Santos Souza" },
        { nome: "Selma Soares" },
        { nome: "Thays Dias" },
      ],
    }
  },
  {
    departamento: "Tecnologia da Informação",
    pessoas: {
      "Coordenadora": [
        { nome: "Odete Peixoto" },
      ],
    }
  },
  {
    departamento: "Planejamento e Jurídico",
    pessoas: {
      "Analista de Planejamento": [
        { nome: "Carolina Kinoshita" },
      ],
      "Advogada": [
        { nome: "Fernanta Tessitore", nota: "(até setembro)" },
      ],
      "Assistente Social": [
        { nome: "Olga Lembo" },
      ],
    }
  },
  {
    departamento: "Escola",
    pessoas: {
      "Coordenador Pedagógico": [
        { nome: "Moisés Batista" },
      ],
      "Coordenador do Programa de Formação de Palhaço para Jovens - Dr. Severino ": [
        { nome: "Heraldo Firmino" },
      ],
      "Artista Formador - Dr. Zapata Lambada": [
        { nome: "Raul Figueiredo" },
      ],
      "Artista Formadora – Dra. Sakura": [
        { nome: "Roberta Calza" },
      ],
      "Artista Formadora – Dra. Ferrara": [
        { nome: "Thais Ferrara" },
      ],
      "Assistente da Escola": [
        { nome: "Milena Barros" },
      ],
      "Colaboradora da Escola": [
        { nome: "Morgana Masetti" },
      ],
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
              ]
            }
          },
          {
            grupo: "Colaboradores",
            pessoas: {
              "Assistente social": [
                { nome: "Olga Lembo" },
              ],
              "Produção cultural (na circulação)": [
                { nome: "Marcella Casilho" },
              ],
            }
          },
          {
            grupo: "Convidados Externos",
            pessoas: {
              "": [
                { nome: "Grupo Wiriça dos Kariri – Xocó" },
              ],
            }
          },
          {
            grupo: "Ciclo de Palestras",
            pessoas: {
              "": [
                {nome: "Celso Frateschi"},
                {nome: "Lino de Macedo"},
                {nome: "Marcelo Laham"},
                {nome: "Nelson Pretto"},
              ],
            }
          },
          {
            grupo: "Formação Continuada",
            pessoas: {
              "": [
                {nome: "Ana Olmos"},
                {nome: "Denise Fraga"},
                {nome: "Paulo Fochi"},
              ],
            }
          },
        ]
      }
    ]
  },
  {
    departamento: "Unidade São Paulo",
    pessoas: {
      "Coordenador Artístico – Dr. Dadúvida": [
        { nome: "David Tayiu" },
      ],
      "Coordenadora de Produção": [
        { nome: "Marcella Castilho" },
      ],
      "Recepcionista": [
        { nome: "Juliana Bonatte" },
      ],
      "Assistente de Produção": [
        { nome: "Renato de Abreu" },
      ],
      "Serviços Gerais": [
         { nome: "Elza Maria de Jesus" },
          {nome: "Maria Aparecida Sobrinho Lima" },
      ],
    },
    programas: [
      {
        organizacao: [
          {
            grupo: "Artistas",
            pessoas: {
              "": [
                {nome: "Allan Benatti - Dr.Chabilson"},
                {nome: "Anderson Machado -	Dr. Cavaco"},
                {nome: "Anderson Spada -	Dr. De Dérson"},
                {nome: "Angelo Brandini -	Dr. Zorinho"},
                {nome: "Du Circo -	Dr. Pinheiro"},
                {nome: "Dênis Goyos -	Dr. Fritz"},
                {nome: "Duico Vasconcelos -	Dr. Pistolinha"},
                {nome: "Henrique Rímoli -	Dr. Dus'Cuais"},
                {nome: "Juliana Gontijo - in memorian -	Dra. Juca Pinduca"},
                {nome: "Filipe Bregantim -	Dr. Mendonça"},
                {nome: "Gabi Zanola -	Dra. Pamplona"},
                {nome: "Igor Canova -	Dr. Trillo"},
                {nome: "Layla Ruiz - Dra. Pororoca"},
                {nome: "Luciana Viacava -	Dra. Lola Brígida"},
                {nome: "Márcio Douglas -	Dr. Mané Pereira"},
                {nome: "Monique Franco -	Dra. Nina Rosa"},
                {nome: "Nereu Afonso -	Dr. Zequim Bonito"},
                {nome: "Nilson Domingues - Dr. Chicô Batavô"},
                {nome: "Paola Musatti - Dra. Manela"},
                {nome: "Raíssa Guimarães -	Dra. Faísca"},
                {nome: "Roger Avanzi – in memorian -	Dr. Picolino"},
                {nome: "Sandro Fontes -	Dr. Sandoval"},
                {nome: "Sueli Andrade -	Dra. Greta Garboreta"},
                {nome: "Suzana Aragão -	Dra. Bolot’s"},
                {nome: "Tereza Gontijo -	Dra. Guadalupe"},
                {nome: "Val Pires -	Dr. Valdisney"},
                {nome: "Vera Abbud -	Dra. Emily"},
              ] 
            } 
          }, 
        ] 
      } 
    ] 
  }, 
  {
    departamento: "Unidade Recife",
    pessoas: {
      "Coordenador Artístico – Dr. Ado": [
        { nome: "Arilson Lopes" },
      ],
      "Coordenadora Administrativo e Produção": [
        { nome: "Nise Vasconcelos" },
      ],
      "Serviços Gerais": [
         { nome: "Marinalva da Silva" },
      ],
    },
    programas: [
      {
        organizacao: [
          {
            grupo: "Artistas",
            pessoas: {
              "": [
                {nome: "Ana Flávia - Dra.Nana"},
                {nome: "Eduardo Filho -	Dr. Dud Grud"},
                {nome: "Fábio Caio -	Dr. Eu Zébio"},
                {nome: "Greyce Braga -	Dra. Monalisa"},
                {nome: "Juliana Almeida -	Dra. Baju"},
                {nome: "Luciana Pontual -	Dra. Svenza"},
                {nome: "Luciano Pontes -	Dr. Lui"},
                {nome: "Marcelino Dias -	Dr. Micolino"},
                {nome: "Marcelo Oliveira -Dr. Marmelo"},
                {nome: "Olga Ferrario -	Dra. Musquita"},
                {nome: "Thiago Gondim -	Dr. Gonda"},
                {nome: "Wagner Oliveira -	Dr. Wago Ninguém"},
              ] 
            } 
          }, 
        ] 
      } 
    ] 
  }, 
  {
    departamento: "Unidade Rio de Janeiro",
    pessoas: {
      "Coordenadora": [
        { nome: "Silvia Contar" },
      ],
      "Assistente de Produção": [
        { nome: "Wallace Martins" },
      ],
    },
  }, 
  {
    departamento: "Convidados Lives Entrevista Besteirológica - 2020",
    pessoas: {
      "": [
        {nome: "Fátima Pontes"},
        {nome: "Flavio Mitio Tamaguchi"},
        {nome: "Gustavo Ferreira"},
        {nome: "Jô Freitas"},
        {nome: "Laurice Siqueira"},
        {nome: "Luciano Mallmann"},
      ],
    },
  }, 
  {
    departamento: "Assessorias",
    pessoas: {
      "Gestão de pessoas": [
        { nome: "Regina Leite" },
      ],
      "": [
        { nome: "Editor: Edson Paes de Melo Filho e Lúcio Nunes (SP)" },
        { nome: "Edna Nunes e Pollyanna Diniz (Recife)" },
      ],
      "Imprensa": [
        { nome: "Movimento Essencial: Pamina S. Milewski e Marcelle Braga (RJ)" },
      ],
      "Pesquisa e escola": [
        { nome: "Morgana Masetti" },
      ],
      "Tecnologia da informação": [
        {nome: "Knet – Carlos Sadao Eto, Jonathan Ribeiro Alves e Walter Karl Meyer"},
        {nome: "Kasi – Adriano Leite e Leandro Metropolo"},
        {nome: "QS do Brasil – Cayo Souza, Marcio Dias, Vitor Lopes "},
        {nome: "Focus Net – Fernando Luis Rodrigues"},
        {nome: "Interhome – Marcos Campos, Marcelo Campos, Nelson Lopes, Danilo Campos"},
      ],
      
    },
  },
] 
 
export default CONTEUDO
             