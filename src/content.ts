import { COLORS, CONTENT_SECTION } from "./types.d.ts"

const CONTENT: Array<CONTENT_SECTION> = [
  {
    title: "Oi!",
    color: COLORS.PINK,
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
  },
  {
    title: "Sobre viver!",
    color: COLORS.RED,
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
    color: COLORS.CYAN,
    content: [
      {
        tag: "p",
        text:
          "Sem querer estragar a surpresa do que vem pela frente, podemos dizer que, diante dos impactos do coronavírus na sociedade e, principalmente, no sistema público de saúde, Doutores da Alegria criou uma série de ações virtuais para seguir oferecendo arte como antídoto potente para profissionais de saúde e crianças hospitalizadas.",
      },
    ],
  },
  {
    title: "A.C",
    color: COLORS.GREEN,
    content: [
      {
        tag: "h3",
        text: "Antes do coronavírus",
      },
      {
        tag: "p",
        text:
          "O vírus parecia distante das terras brasileiras em janeiro. Doutores da Alegria dava as boas-vindas ao novo ano com a pretensão de realizar um festival de música e arte. Seria um encontro de famílias com diversas atividades coletivas em um parque paulistano.",
      },
      {
        tag: "p",
        text:
          'No Recife, o elenco pernambucano apresentou o espetáculo Cenas Curtas ao festival Janeiro de Grandes Espetáculos. <a href="">Foram duas sessões</a> no Teatro Marco Camarotti, no Sesc Santo Amaro.',
      },
      {
        tag: "p",
        text:
          'Uma <a href="">edição única e gratuita</a> do espetáculo Conta Causos tomou o Teatro Eva Herz, em São Paulo, com relatos dos besteirologistas durante as visitas a hospitais.',
      },
    ],
  },
  {
    title: "De outros Carnavais",
    color: COLORS.BLUE,
    content: [
      {
        tag: "p",
        text:
          'No palco do samba, Doutores da Alegria <a href="">foi homenageada pela Escola de Samba Dragões da Real</a>. No dia 21 de fevereiro, a agremiação do Grupo Especial levou o enredo “A Revolução do Riso: A Arte de Subverter O Mundo Pelo Divino Poder da Alegria” para o Sambódromo do Anhembi, em São Paulo.',
      },
      {
        tag: "p",
        text:
          "O carro alegórico capitaneado por Wellington Nogueira, nosso fundador, desfilou com parte da equipe e dos artistas cantando a plenos pulmões. Emoção única!",
      },
      {
        tag: "p",
        text:
          'Também colocamos nossos blocos na avenida. A 17ª edição do Bloco do Miolo Mole arrastou foliões pelo Recife Antigo no dia 20 de fevereiro. E dezenove hospitais públicos de São Paulo, Recife e Rio de Janeiro <a href="">receberam bloquinhos</a> compostos por palhaços e artistas convidados.',
      },
    ],
  },
  {
    title: "Paramos",
    color: COLORS.RED,
    content: [
      {
        tag: "p",
        text:
          'No palco do samba, Doutores da Alegria <a href="">foi homenageada pela Escola de Samba Dragões da Real</a>. No dia 21 de fevereiro, a agremiação do Grupo Especial levou o enredo “A Revolução do Riso: A Arte de Subverter O Mundo Pelo Divino Poder da Alegria” para o Sambódromo do Anhembi, em São Paulo.',
      },
      {
        tag: "p",
        text:
          "O carro alegórico capitaneado por Wellington Nogueira, nosso fundador, desfilou com parte da equipe e dos artistas cantando a plenos pulmões. Emoção única!",
      },
      {
        tag: "p",
        text:
          'Também colocamos nossos blocos na avenida. A 17ª edição do Bloco do Miolo Mole arrastou foliões pelo Recife Antigo no dia 20 de fevereiro. E dezenove hospitais públicos de São Paulo, Recife e Rio de Janeiro <a href="">receberam bloquinhos</a> compostos por palhaços e artistas convidados.',
      },
    ],
  },
  {
    title: "Delivery Besteirológico",
    color: COLORS.PINK,
    content: [
      {
        tag: "p",
        text:
          "Um comitê composto por diversos profissionais da organização, com apoio da diretoria, criou a série de vídeos Delivery Besteirológico. A ideia era aproximar os palhaços, em distanciamento social, das crianças hospitalizadas, profissionais de saúde e público nas redes sociais.",
      },
      {
        tag: "p",
        text:
          'Era dessa maneira que <a href="">entraríamos nos hospitais</a> enquanto o vírus não desse trégua.',
      },
    ],
  },
  {
    title: "Troca de Guarda",
    color: COLORS.SALMON,
    content: [
      {
        tag: "p",
        text:
          'Em abril, a associação Doutores da Alegria passou a contar <a href="">com uma nova diretoria estatutária para o biênio 2020-2022</a>. Quatro dos diretores se mantiveram no cargo: Luis Vieira da Rocha como diretor-presidente, Daiane Carina como diretora de Relações Institucionais, Ronaldo Aguiar como diretor Artístico e Simone Pimentel como diretora Financeira. A nova diretora de Formação, Lourdes Atié, substituiu Thaïs Ferrara.',
      },
    ],
  },
  {
    title: "Tem uma pessoa no hospital que...",
    color: COLORS.PURPLE,
    content: [
      {
        tag: "p",
        text:
          "... Cuida da música que toca dentro da gente. Que cuida do trânsito, organiza as macas. Que mexe com a gente por dentro. Que faz a gente pegar no sono. Que ajuda a respirar melhor...",
      },
      {
        tag: "p",
        text:
          "Em um dos momentos mais críticos da pandemia, em maio de 2020, Doutores da Alegria dedicou um vídeo aos profissionais de saúde. Prepara o lencinho...",
      },
    ],
  },
  {
    title: "O digital e o novo normal",
    color: COLORS.RED,
    content: [
      {
        tag: "p",
        text:
          "Utilizando o potencial das redes sociais para chegar ao público, a associação inaugurou uma série de conteúdos digitais em junho.",
      },
      {
        tag: "h3",
        text: "Consultório Besteirológico",
      },
      {
        tag: "p",
        text:
          "Transmitido ao vivo pelo canal dos Doutores no YouTube e pela página do Facebook, o consultório fictício trouxe um papo ao vivo entre palhaços –quase sempre um de São Paulo e um de Recife– e o público.",
      },
      {
        tag: "p",
        text:
          "A ação exigiu adaptação a ferramentas online, direção artística e ensaios entre as duplas, que muitas vezes nunca tinham atuado juntas.",
      },
    ],
  },
  {
    title: "O digital e o novo normal",
    color: COLORS.RED,
    content: [
      {
        tag: "h3",
        text: "Websérie de São João e de Natal",
      },
      {
        tag: "p",
        text:
          "O cortejo seguido de apresentação que celebra São João todos os anos nos hospitais também se adaptou à pandemia. A websérie “A peleja do noivo que tentou enganar a noiva na festa de São João ou vice e versa” foi ao ar nos canais da organização em cinco capítulos, gravados a distância e com participação de Dudu do Acordeon.",
      },
      {
        tag: "p",
        text:
          'Em dezembro, o cortejo de Natal seguiu o modelo de sucesso junino. Surgiu a websérie Auto de Natal. <a href="">Tem até bastidores.</a>',
      },
    ],
  },
  {
    title: "O digital e o novo normal",
    color: COLORS.RED,
    content: [
      {
        tag: "h3",
        text: "Plateias Hospitalares Delivery",
      },
      {
        tag: "p",
        text:
          "Companhias participantes do projeto no Rio de Janeiro foram convidadas a produzir vídeos com adaptações de seus espetáculos. As apresentações que circulariam pelos hospitais foram veiculadas nas redes da organização durante o ano.",
      },
    ],
  },
  {
    title: "O digital e o novo normal",
    color: COLORS.RED,
    content: [
      {
        tag: "h3",
        text: "Escola em Obras",
      },
      {
        tag: "p",
        text:
          "A reorganização dos programas da Escola Doutores da Alegria para o formato virtual ganhou uma série. Cada um dos cinco episódios trouxe questões debatidas pelos formadores da escola: sua pedagogia, a quem se destinam os cursos e os sistemas de formação.",
      },
      {
        tag: "h3",
        text: "Ciclo de Palestras",
      },
      {
        tag: "p",
        text:
          "As lives temáticas propostas pela Escola trouxeram profissionais da associação em debate com convidados. Entre os assuntos abordados, a importância do brincar, saúde mental em tempos de pandemia, arte e acessibilidade e humor na crise.",
      },
    ],
  },
  {
    title: "O digital e o novo normal",
    color: COLORS.RED,
    content: [
      {
        tag: "h3",
        text: "Conta Causos",
      },
      {
        tag: "p",
        text:
          "O espetáculo com artistas contando histórias vivenciadas nos hospitais foi apresentado virtualmente pela primeira vez em agosto. Com duração de uma hora, trazia até seis palhaços na tela que, ao final, respondiam perguntas do público.",
      },
      {
        tag: "p",
        text:
          "A equipe de Comunicação ficava nos bastidores alternando as telas, cuidando do áudio e da interação nas redes sociais.",
      },
    ],
  },
  {
    title: "Festival Miolo Mole",
    color: COLORS.CYAN,
    content: [
      {
        tag: "h3",
        text: "A live das lives",
      },
      {
        tag: "p",
        text:
          "O Festival Miolo Mole, que seria oferecido à cidade de São Paulo em 2020, foi adaptado para o formato digital, em uma live com sete horas de duração e atividades dedicadas a toda a família. Foi ao vivo, no dia 26 de julho, o dia dos avós.",
      },
      {
        tag: "blockquote",
        text:
          "Realizar um festival em plena pandemia foi um passo ousado, mas também é isso que nos faz uma instituição potente e que abraça os desafios que surgem com muita leveza.",
        author: "Ronaldo Aguiar, diretor artístico",
      },
    ],
  },
  {
    title: "Entrada pelo... Tablet!",
    color: COLORS.GREEN,
    content: [
      {
        tag: "h3",
        text: "A live das lives",
      },
      {
        tag: "p",
        text:
          'Com cenário incerto ainda no meio do ano, Doutores da Alegria ofereceu a possibilidade de realizar visitas dos palhaços virtualmente nas pediatrias. Em agosto de 2020, o projeto piloto Plantão Besteirológico teve início no Hospital M’boi Mirim (SP) e, algum tempo depois, <a href="">foi se ampliando para todos os hospitais parceiros</a> da organização em São Paulo e Recife.',
      },
      {
        tag: "p",
        text:
          "Foram mais de 4.600 visitas virtuais no ano passado, com uso de tablets e apoio de profissionais de saúde.",
      },
      {
        tag: "blockquote",
        text:
          "Em um tempo tão louco, o contato com o outro é essencial para a saúde e a sanidade.",
        author: "Val Pires",
      },
    ],
  },
  {
    title: "Os nossos 29 anos",
    color: COLORS.BLUE,
    content: [
      {
        tag: "p",
        text:
          "Assim como os aniversários de todos os brasileiros em 2020, a comemoração dos 29 anos da Doutores da Alegria foi a distância. Duas lives celebraram o marco, uma delas ancorada por Wellington Nogueira.",
      },
      {
        tag: "p",
        text:
          "Em um vídeo coletivo, colaboradores, artistas e o fundador Wellington Nogueira contaram pedacinhos de suas histórias com a organização.",
      },
      {
        tag: "p",
        text:
          "“E não é exagero nenhum dizer que aquilo mudou a minha vida e determinou boa parte das coisas que faço até hoje”, diz Nereu Afonso, relembrando sua entrada na Doutores em 1996..",
      },
    ],
  },
  {
    title: "Uma nova rede de palhaços",
    color: COLORS.PINK,
    content: [
      {
        tag: "p",
        text:
          "O Encontro Nacional de Palhaços que Atuam em Hospitais aconteceu em 7 e 8 de novembro. Houve mesas de debate com convidados, oficinas, rodas de conversa e um espetáculo. Tudo gratuito e por transmissão ao vivo, em função da pandemia.",
      },
      {
        tag: "p",
        text:
          "Teve até um simbólico reencontro entre o ator que criou e sistematizou a atividade de palhaço em hospital no mundo —o americano Michael Christensen do The Clown Care Unit— e o ator que trouxe esse trabalho para o Brasil —Wellington Nogueira, fundador da Doutores da Alegria.",
      },
      {
        tag: "p",
        text:
          'A sexta edição do encontro marcou a <a href="">descentralização da rede</a>, que terá autonomia própria e será gerida por um coletivo de organizações.',
      },
    ],
  },
  {
    title: "Programa de formação de jovens",
    color: COLORS.SALMON,
    content: [
      {
        tag: "p",
        text:
          "As aulas presenciais diárias na sede da Doutores se reduziram ao espaço virtual em 2020. Foi a adaptação possível na busca de caminhos para seguir na formação de jovens palhaços e palhaças.",
      },
      {
        tag: "p",
        text:
          "No final do ano, os alunos apresentaram seus ‘exercícios artísticos’, que corresponderam à formatura do curso, em formato audiovisual. Chegaram ao vídeo ‘Quatro Noites’, com com filmagem e montagem de Nereu Afonso.",
      },
    ],
  },
  {
    title: "Boca laaaarga",
    color: COLORS.RED,
    content: [
      {
        tag: "p",
        text:
          'Na última semana no ano <a href="">lançamos o quinto volume da série Boca Larga</a>, em edição virtual e gratuita. O livro compila textos de diversos colaboradores da associação, entre artistas e profissionais multidisciplinares, sobre os impactos do novo coronavírus nos ofícios de cada área.',
      },
      {
        tag: "blockquote",
        text:
          "A ideia foi abraçada por muitos que, corajosamente, expuseram como se sentem, aprendem e desfrutam, buscando caminhos para viver em tempos tão difíceis",
        author: "Lourdes Atié",
      },
    ],
  },
]

export default CONTENT
