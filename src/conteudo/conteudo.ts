import { EColors, IConteudoSecao, ETipoConteudo } from "@/types.d.ts";

const Conteudo: Array<IConteudoSecao> = [
  {
    id: "00",
    title: "Oi!",
    color: EColors.ROSA,
    content: [
      "Esta é a primeira edição online do Balanço dos Doutores da Alegria, publicação que há 12 anos cumpre o papel de prestar contas das atividades anuais da associação. Para navegar por ela, siga os passos:",
      "[tutorial + acessibilidade + índice]",
      "Escondemos uma surpresinha em uma das páginas. Você consegue descobrir?",
    ],
  },
  {
    id: "01",
    title: "Sobre<br/>viver!",
    color: EColors.VERMELHO,
    links: [{
      image: "slide_2_1.png",
      url: "https://doutoresdaalegria.org.br/blog/o-inimaginavel-para-doutores-da-alegria-se-tornou-realidade/",
    }],
    content: [
      "Foram 300 dias absolutamente diferentes de tudo o que já vivemos em quase 30 anos. Mais do que contar como a organização se reinventou em 2020, este balanço procura mostrar como Doutores da Alegria sobreviveu em um ano em que o [inimaginável se tornou realidade.](https://doutoresdaalegria.org.br/blog/o-inimaginavel-para-doutores-da-alegria-se-tornou-realidade/)",
      "Os textos, fotos e vídeos desta edição respondem a uma pergunta:  de que maneira uma associação que promove intervenções artísticas em hospitais e que ensina a linguagem do palhaço de maneira presencial pode se mostrar relevante em uma pandemia?",
    ],
  },
  {
    id: "02",
    title: "Spoiler",
    color: EColors.AZUL,
    content: [
      "Sem querer estragar a surpresa do que vem pela frente, podemos dizer que, diante dos impactos do coronavírus na sociedade e, principalmente, no sistema público de saúde, Doutores da Alegria criou uma série de ações virtuais para seguir oferecendo arte como antídoto potente para profissionais de saúde e crianças hospitalizadas.",
    ],
    extra: {
      content: [
        {
          type: ETipoConteudo.IMG,
          filename: "extras-02.png",
        },
      ],
    },
  },
  {
    id: "03",
    title: "A.C",
    color: EColors.VERDE,
    content: [
      "### Antes do coronavírus",
      "O vírus parecia distante das terras brasileiras em janeiro. Doutores da Alegria dava as boas-vindas ao novo ano com a pretensão de realizar um festival de música e arte. Seria um encontro de famílias com diversas atividades coletivas em um parque paulistano.",
      "No Recife, o elenco pernambucano apresentou o espetáculo Cenas Curtas ao festival Janeiro de Grandes Espetáculos. [Foram duas sessões](https://doutoresdaalegria.org.br/blog/cenas-curtas-e-apresentado-dia-19-em-festival-no-recife/) no Teatro Marco Camarotti, no Sesc Santo Amaro.",
      "Uma [edição única e gratuita](https://doutoresdaalegria.org.br/blog/conta-causos-em-apresentacao-unica-e-gratuita-em-marco/) do espetáculo Conta Causos tomou o Teatro Eva Herz, em São Paulo, com relatos dos besteirologistas durante as visitas a hospitais.",
    ],
    extra: {
      content: [
        "#### De onde vêm os narizes?",
        "[**Veja o nascimento deles neste vídeo belíssimo.**](https://www.youtube.com/watch?v=-tMLVINFL1Q)",
      ],
    },
  },
  {
    id: "04",
    title: "De outros Carnavais",
    color: EColors.AZUL_ESCURO,
    content: [
      "No palco do samba, Doutores da Alegria [foi homenageada pela Escola de Samba Dragões da Real](https://doutoresdaalegria.org.br/blog/escola-de-samba-dragoes-da-real-homenageia-doutores-da-alegria-em-2020/). No dia 21 de fevereiro, a agremiação do Grupo Especial levou o enredo “A Revolução do Riso: A Arte de Subverter O Mundo Pelo Divino Poder da Alegria” para o Sambódromo do Anhembi, em São Paulo.",
      "O carro alegórico capitaneado por Wellington Nogueira, nosso fundador, desfilou com parte da equipe e dos artistas cantando a plenos pulmões. Emoção única!",
      "Também colocamos nossos blocos na avenida. A 17ª edição do Bloco do Miolo Mole arrastou foliões pelo Recife Antigo no dia 20 de fevereiro. E dezenove hospitais públicos de São Paulo, Recife e Rio de Janeiro [receberam bloquinhos](https://doutoresdaalegria.org.br/blog/doutores-da-alegria-leva-blocos-de-carnaval-a-dezenove-hospitais-publicos/) compostos por palhaços e artistas convidados.",
    ],
  },
  {
    id: "05",
    title: "Paramos",
    color: EColors.VERMELHO,
    content: [
      "No dia 11 de março, a Organização Mundial da Saúde (OMS) anunciou que o planeta vivia uma pandemia com o novo coronavírus. No dia 17, Doutores da Alegria [suspendeu parte de suas atividades](https://doutoresdaalegria.org.br/blog/doutores-da-alegria-suspende-parte-de-suas-atividades/).",
      "Com os palhaços em quarentena, o desafio proposto era: Como entrar sem entrar nos hospitais?",
      {
        type: ETipoConteudo.QUOTE,
        autor: "Anderson Spada, palhaço em São Paulo",
        text:
          "Devíamos nos resguardar em casa? Proteger, de um lado, crianças hospitalizadas e profissionais de saúde e, de outro, nossos familiares? Mas se fazemos parte da equipe profissional do hospital, não deveríamos estar juntos neste momento?",
      },
    ],
  },
  {
    id: "06",
    title: "Delivery Besteirológico",
    color: EColors.ROSA,
    links: [
      {
        front: true,
        image: "slide_7_1.png",
        url: "https://www.youtube.com/watch?v=V8iO1RxMkYM",
      },
      {
        image: "slide_7_2.png",
        url: "https://www.youtube.com/watch?v=EMc5WjnYuWc",
      },
    ],
    content: [
      "Um comitê composto por diversos profissionais da organização, com apoio da diretoria, criou a série de vídeos Delivery Besteirológico. A ideia era aproximar os palhaços, em distanciamento social, das crianças hospitalizadas, profissionais de saúde e público nas redes sociais.",
      "Era dessa maneira que [entraríamos nos hospitais](https://www.youtube.com/watch?v=V8iO1RxMkYM) enquanto o vírus não desse régua e ainda com a possibilidade de mostrarmos nosso trabalho para além dos hospitais.",
    ],
    extra: {
      color: "#FFFFFF",
      content: [
        "#### Ué",
        "[Para que arte em tempos de pandemia? A gente explica neste vídeo.](https://doutoresdaalegria.org.br/blog/para-que-arte-em-tempos-de-pandemia/).",
      ],
    },
  },
  {
    id: "07",
    title: "Troca de Gestão",
    color: EColors.SALMAO,
    links: [
      {
        image: "slide_8_1.png",
        url: "https://doutoresdaalegria.org.br/blog/associacao-doutores-da-alegria-tem-nova-diretoria-estatutaria-ate-2022/"
      }
    ],
    content: [
      "Em abril, a associação Doutores da Alegria passou a contar [com uma nova diretoria estatutária para o biênio 2020-2022](https://doutoresdaalegria.org.br/blog/associacao-doutores-da-alegria-tem-nova-diretoria-estatutaria-ate-2022/). Quatro dos diretores se mantiveram no cargo: Luis Vieira da Rocha como diretor-presidente, Daiane Carina como diretora de Relações Institucionais, Ronaldo Aguiar como diretor Artístico e Simone Pimentel como diretora Financeira. A nova diretora de Formação, Lourdes Atié, substituiu Thaïs Ferrara.",
    ],
  },
  {
    id: "08",
    title: "Tem uma pessoa no hospital que...",
    color: EColors.ROXO,
    links: [
      {
        image: "slide_9_1.png",
        url: "https://www.youtube.com/watch?v=vYaqGTlhSEA",
        alt:
          "Assista ao video 'Doutores da Alegria homenageia profissionais dos hospitais' no youtube",
        front: true,
      },
      {
        image: "slide_9_2.png",
        url: "https://www.youtube.com/watch?v=vYaqGTlhSEA",
        alt:
          "Assista ao video 'Doutores da Alegria homenageia profissionais dos hospitais' no youtube",
      },
    ],
    content: [
      "... Cuida da música que toca dentro da gente. Que cuida do trânsito, organiza as macas. Que mexe com a gente por dentro. Que faz a gente pegar no sono. Que ajuda a respirar melhor...",
      "Em um dos momentos mais críticos da pandemia, em maio de 2020, Doutores da Alegria dedicou um vídeo aos profissionais de saúde. Prepara o lencinho...",
    ],
    extra: {
      color: "#FFFFFF",
      content: [
        "#### Homenagem",
        "[As super-heroínas usam jaleco e podemos provar. Veja no texto.](https://doutoresdaalegria.org.br/blog/as-super-heroinas-usam-jaleco/)",
      ],
    },
  },
  {
    id: "09",
    title: "O digital e o novo normal",
    color: EColors.VERMELHO,
    links: [
      {
        front: true,
        image: "slide_10_1.png",
        url: "https://www.youtube.com/watch?v=KITNK_Yh77M&t=1168s",
        alt:
          "Assista ao video 'Consultório Besteirológico - MonaLisa e Dus'Cuais' no youtube",
      },
      {
        image: "slide_10_2.png",
        url: "https://www.youtube.com/watch?v=ZLzdbl2Uu-o",
        alt:
          "Assista ao video 'Consultório Besteirológico - Nina Rosa e Lui' no youtube",
      },
    ],
    content: [
      "Utilizando o potencial das redes sociais para chegar ao público, a associação inaugurou uma série de conteúdos digitais em junho.",
      "### Consultório Besteirológico",
      "Transmitido ao vivo pelo canal dos Doutores no YouTube e pela página do Facebook, o consultório fictício trouxe um papo ao vivo entre palhaços –quase sempre um de São Paulo e um de Recife– e o público.",
      "A ação exigiu adaptação a ferramentas online, direção artística e ensaios entre as duplas, que muitas vezes nunca tinham atuado juntas.",
    ],
    extra: {
      color: "#FFFFFF",
      content: [
        "#### Ao vivo",
        "[A Pororoca começou a live em um pula-pula, a Svenza passou aspirador de pó na casa e o Cavaco fez com o Gonda uma improvisação musical ao vivo](https://www.youtube.com/watch?v=dI4wh6ZrEck&list=PLbGYBqIX5vabZ0KXMs0YNsUWvcN1emSAN&index=4)",
      ],
    },
  },
  {
    id: "10",
    title: "O digital e o novo normal",
    hideTitleOnDesktop: true,
    color: EColors.VERMELHO,
    links: [
      {
        image: "slide_11_1.png",
        alt: "Assista ao video 'Websérie de São João - Episódio Um' no youtube",
        url:
          "https://www.youtube.com/watch?v=TN3o_8WJySA&list=PLbGYBqIX5vabZXqd_6PMZ9Uo-5V74DzyQ",
      },
      {
        front: true,
        image: "slide_11_2.png",
        alt:
          "Assista ao video 'Auto de Natal dos Doutores da Alegria - Episódio 1: O Presépio de Papel' no youtube",
        url:
          "https://www.youtube.com/watch?v=rExGtym0xyk&list=PLbGYBqIX5vabBTAH3uQG_nW5wyFlO1fS8&index=2",
      },
    ],
    content: [
      "### Websérie de São João e de Natal",
      "O cortejo seguido de apresentação que celebra São João todos os anos nos hospitais também se adaptou à pandemia. A websérie “A peleja do noivo que tentou enganar a noiva na festa de São João ou vice e versa” foi ao ar nos canais da organização em cinco capítulos, gravados a distância e com participação de Dudu do Acordeon.",
      "Em dezembro, o cortejo de Natal seguiu o modelo de sucesso junino. Surgiu a websérie Auto de Natal. [Tem até bastidores.](https://www.youtube.com/watch?v=DjB9IL_Oakg&)",
    ],
  },
  {
    id: "11",
    title: "O digital e o novo normal",
    hideTitleOnDesktop: true,
    color: EColors.VERMELHO,
    links: [
      {
        front: true,
        image: "slide_12_1.png",
        alt: "Assista ao video 'A origem do baobá' no youtube",
        url:
          "https://www.youtube.com/watch?v=BFDA5CFUtIA&list=PLbGYBqIX5vaZIlh0Rg207ygr3UElbHpb4&index=20",
      },
      {
        image: "slide_12_2.png",
        alt:
          "Assista ao video 'Dom Quixote e a incrível batalha contra moinhos de vento' no youtube",
        url:
          "https://www.youtube.com/watch?v=RkSw8kN5tZ4&list=PLbGYBqIX5vaZIlh0Rg207ygr3UElbHpb4&index=8",
      },
    ],
    content: [
      "### Platéias Hospitalares Delivery",
      "Companhias participantes do projeto no Rio de Janeiro foram convidadas a produzir vídeos com adaptações de seus espetáculos. As apresentações que circulariam pelos hospitais foram veiculadas nas redes da organização durante o ano.",
    ],
  },
  {
    id: "12",
    title: "O digital e o novo normal",
    hideTitleOnDesktop: true,
    color: EColors.VERMELHO,
    links: [
      {
        front: true,
        image: "slide_13_1.png",
        alt:
          "Assista ao video 'Escola Doutores da Alegria em Obras #1 - Escola na pandemia' no youtube",
        url:
          "https://www.youtube.com/watch?v=A2s8FXhFo14&list=PLbGYBqIX5vaZ2A6ykvs2q0FccSuIMqt3n",
      },
      {
        image: "slide_13_2.png",
        alt:
          "Assista ao video 'Bate-papo com Lino de Macedo sobre saúde mental' no youtube",
        url: "https://www.youtube.com/watch?v=bYEek-HbRRk",
      },
    ],
    content: [
      "### Escola em Obras",
      "A reorganização dos programas da Escola Doutores da Alegria para o formato virtual ganhou uma série. Cada um dos cinco episódios trouxe questões debatidas pelos formadores da escola: sua pedagogia, a quem se destinam os cursos e os sistemas de formação.",
      "### Ciclo de Palestras",
      "As lives temáticas propostas pela Escola trouxeram profissionais da associação em debate com convidados. Entre os assuntos abordados, a importância do brincar, saúde mental em tempos de pandemia, arte e tecnologia, além do humor na crise.",
    ],
    extra: {
      color: "#FFFFFF",
      content: [
        {
          type: ETipoConteudo.IMG,
          filename: "extras-12.png",
        },
      ],
    },
  },
  {
    id: "13",
    title: "O digital e o novo normal",
    hideTitleOnDesktop: true,
    color: EColors.VERMELHO,
    links: [
      {
        image: "slide_14_1.png",
        alt:
          "Assista ao video 'Doutores em Casa #1 - Estamos em casa' no youtube",
        url:
          "https://www.youtube.com/watch?v=4fvLuLx1zeE&list=PLbGYBqIX5vabke0Aq7Y8st1bzj4q3Gy0H",
      },
      {
        front: true,
        image: "slide_14_2.png",
        alt:
          "Assista ao video 'Doutores em Casa #1 - Estamos em casa' no youtube",
        url:
          "https://www.youtube.com/watch?v=4fvLuLx1zeE&list=PLbGYBqIX5vabke0Aq7Y8st1bzj4q3Gy0H",
      },
    ],
    content: [
      "### Doutores em Casa",
      "O boletim quinzenal fez a prestação de contas da associação durante o isolamento social. Apresentado por integrantes da equipe técnica, os oito episódios contaram em primeira mão os projetos desenvolvidos durante o ano.",
    ],
    extra: {
      color: "#FFFFFF",
      content: [
        "#### Au-Au:",
        "[Uma das diretoras precisou ir até a sede gravar. É que ela mora em um sítio e seus cachorros queriam participar com latidos.](https://www.youtube.com/watch?v=4fvLuLx1zeE&list=PLbGYBqIX5vabke0Aq7Y8st1bzj4q3Gy0H)",
      ],
    },
  },
  {
    id: "14",
    title: "O digital e o novo normal",
    hideTitleOnDesktop: true,
    color: EColors.VERMELHO,
    links: [
      {
        image: "slide_15_1.png",
        alt: "Assista ao video 'Conta Causos ao Vivo' no youtube",
        url: "https://www.youtube.com/watch?v=8bBwVCvnL4s",
      },
      {
        front: true,
        image: "slide_15_2.png",
        alt: "Assista ao video 'Conta Causos ao Vivo' no youtube",
        url: "https://www.youtube.com/watch?v=3R48OMPJ9EM",
      },
    ],
    content: [
      "### Conta Causos",
      "O espetáculo com artistas contando histórias vivenciadas nos hospitais foi apresentado virtualmente pela primeira vez em agosto. Com duração de uma hora, trazia até seis palhaços na tela que, ao final, respondiam perguntas do público.",
      "A equipe de Comunicação ficava nos bastidores alternando as telas, cuidando do áudio e da interação nas redes sociais.",
    ],
    extra: {
      color: "#FFFFFF",
      content: [
        "#### Bastidores:",
        "“Gabi, tá chovendo aqui e pode cair a internet. Consegue ficar de apoio?”, disse Bruno Tavares, que cuidava da transmissão ao vivo enquanto chovia granizo na Bela Vista.",
      ],
    },
  },
  {
    id: "15",
    title: "Festival Miolo Mole",
    color: EColors.AZUL,
    links: [
      {
        front: true,
        image: "slide_16_1.png",
        alt: "Assista ao video 'Festival Miolo Mole' no youtube",
        url: "https://www.youtube.com/watch?v=6q7WssQx-P4",
      },
      {
        image: "slide_16_2.png",
        alt: "Assista ao video 'Festival Miolo Mole' no youtube",
        url: "https://www.youtube.com/watch?v=6q7WssQx-P4",
      },
    ],
    content: [
      "### A live das lives",
      "O Festival Miolo Mole, que seria oferecido à cidade de São Paulo em 2020, foi [adaptado para o formato digital](https://doutoresdaalegria.org.br/blog/festival-miolo-mole-confira-a-programacao-completa/), em uma live com sete horas de duração e atividades dedicadas a toda a família. Foi ao vivo, no dia 26 de julho, o dia dos avós.",
      {
        type: ETipoConteudo.QUOTE,
        autor: "Ronaldo Aguiar, diretor artístico",
        text:
          "Realizar um festival em plena pandemia foi um passo ousado, mas também é isso que nos faz uma instituição potente e que abraça os desafios que surgem com muita leveza.",
      },
      "Com intenção de arrecadar doações para a causa, Doutores da Alegria convidou artistas como Toquinho, Beatles para Crianças e Palavra Cantada, que envolveram o público com sua arte. Os artistas palhaços conduziram o festival, que foi veiculado nos canais da associação e na TV Claro.",
      "### Parceiros do Festival",
      {
        type: ETipoConteudo.PARTNERS,
      },
    ],
    extra: {
      color: "#FFFFFF",
      content: [
        {
          type: ETipoConteudo.IMG,
          filename: "extras-15.png",
        },
      ],
    },
  },
  {
    id: "16",
    title: "Entrada pelo... Tablet!",
    color: EColors.VERDE,
    content: [
      "Com cenário incerto ainda no meio do ano, Doutores da Alegria ofereceu a possibilidade de realizar visitas dos palhaços virtualmente nas pediatrias. Em agosto de 2020, o projeto piloto Plantão Besteirológico teve início no Hospital M’boi Mirim (SP) e, algum tempo depois, [foi se ampliando para todos os hospitais parceiros](https://doutoresdaalegria.org.br/blog/doutores-da-alegria-leva-palhacos-a-hospitais-publicos-por-meio-de-tablets/) da organização em São Paulo e Recife.",
      "Foram mais de 4.600 visitas virtuais no ano passado, com uso de tablets e apoio de profissionais de saúde.",
      {
        type: ETipoConteudo.QUOTE,
        autor: "Val Pires",
        text:
          "Em um tempo tão louco, o contato com o outro é essencial para a saúde e a sanidade.",
      },
    ],
    extra: {
      content: [
        {
          type: ETipoConteudo.IMG,
          filename: "extras-16.png",
        },
      ],
    },
  },
  {
    id: "17",
    title: "Os nossos 29 anos",
    color: EColors.AZUL_ESCURO,
    links: [
      {
        front: true,
        image: "slide_18_1.png",
        alt: "Assista ao video '29 anos de Doutores da Alegria' no youtube",
        url: "https://www.youtube.com/watch?v=4CudlN3XKUc",
      },
      {
        image: "slide_18_2.png",
        alt: "Assista ao video '29 anos de Doutores da Alegria' no youtube",
        url: "https://www.youtube.com/watch?v=4CudlN3XKUc",
      },
    ],
    content: [
      "Assim como os aniversários de todos os brasileiros em 2020, a comemoração dos 29 anos da Doutores da Alegria foi a distância. Duas lives celebraram o marco, uma delas ancorada por Wellington Nogueira.",
      "Em um vídeo coletivo, colaboradores, artistas e o fundador Wellington Nogueira contaram pedacinhos de suas histórias com a organização.",
      "“E não é exagero nenhum dizer que aquilo mudou a minha vida e determinou boa parte das coisas que faço até hoje”, diz Nereu Afonso, relembrando sua entrada na Doutores em 1996.",
    ],
  },
  {
    id: "18",
    title: "Uma nova rede de palhaços",
    color: EColors.ROSA,
    links: [
      {
        front: true,
        image: "slide_19_1.png",
        alt:
          "Assista ao video 'Papo entre Wellington Nogueira e Michael Christensen [Doutores da Alegria + The Clown Care Unit]' no youtube",
        url: "https://www.youtube.com/watch?v=p183OuhoH6Q",
      },
      {
        image: "slide_19_2.png",
        alt:
          "Assista ao video 'Papo entre Wellington Nogueira e Michael Christensen [Doutores da Alegria + The Clown Care Unit]' no youtube",
        url: "https://www.youtube.com/watch?v=p183OuhoH6Q",
      },
    ],
    content: [
      " O Encontro Nacional de Palhaços que Atuam em Hospitais aconteceu em 7 e 8 de novembro. Houve mesas de debate com convidados, oficinas, rodas de conversa e um espetáculo. Tudo gratuito e por transmissão ao vivo, em função da pandemia.",
      "Teve até um simbólico reencontro entre o ator que criou e sistematizou a atividade de palhaço em hospital no mundo — o americano Michael Christensen do The Clown Care Unit — e o ator que trouxe esse trabalho para o Brasil — Wellington Nogueira, fundador da Doutores da Alegria.",
      "A sexta edição do encontro marcou a [descentralização da rede](), que terá autonomia própria e será gerida por um coletivo de organizações.",
    ],
    extra: {
      color: "#FFFFFF",
      content: [
        "#### O Grande Encontro",
        "[Bate-papo entre os mestres Wellington Nogueira e Michael Christensen. Assista!](https://www.youtube.com/watch?v=p183OuhoH6Q)",
      ],
    },
  },
  {
    id: "19",
    title: "Programa de formação de jovens",
    color: EColors.SALMAO,
    content: [
      "As aulas presenciais diárias na sede da Doutores foram para as casas dos alunos por meio das telas até outubro de 2020, quando puderam retornar à sede em pequenos grupos. Foi a adaptação possível na busca de caminhos para seguir na formação de jovens palhaços e palhaças.",
      "No final do ano, os alunos apresentaram seus ‘exercícios artísticos’, que corresponderam à formatura do curso, em formato audiovisual. Chegaram ao vídeo ‘Quatro Noites’, com filmagem e montagem de Nereu Afonso.",
    ],
  },
  {
    id: "20",
    title: "Boca<br/>laaaarga",
    color: EColors.VERMELHO,
    content: [
      "Na última semana do ano [lançamos o quinto volume da série Boca Larga](https://doutoresdaalegria.org.br/blog/doutores-da-alegria-lanca-boca-larga-tempos-de-pandemia-em-edicao-virtual/), em edição virtual e gratuita. O livro compila textos de diversos colaboradores da associação, entre artistas e profissionais multidisciplinares, sobre os impactos do novo coronavírus nos ofícios de cada área.",
      {
        type: ETipoConteudo.QUOTE,
        autor: "Lourdes Atié, diretor de Formação",
        text:
          "A ideia foi abraçada por muitos que, corajosamente, expuseram como se sentem, aprendem e desfrutam, buscando caminhos para viver em tempos tão difíceis.",
      },
    ],
  },
];

export default Conteudo;
