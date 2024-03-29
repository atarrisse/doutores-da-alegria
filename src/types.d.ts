declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

export enum EColors {
  AMARELO = "amarelo",
  AZUL = "azul",
  AZUL_ESCURO = "azul-escuro",
  ROSA = "rosa",
  ROXO = "roxo",
  SALMAO = "salmao",
  VERDE = "verde",
  VERMELHO = "vermelho",
  PRETO = "preto",
}

export enum ENumeroTamanho {
  GDE = "grande",
  PEQ = "pequeno"
}

export enum ETipoConteudo {
  TXT = "texto",
  NUM = "numbers",
  QUOTE = "quote",
  LIST = "list",
  PARTNERS = "parceiros",
  EQUIPE = "equipe",
  REC_ARRECADADOS = "recursos-arrecadados",
  REC_ORIGEM = "origem-dos-recursos",
  REC_APLICACAO = "aplicacao-dos-recursos",
  HTML = "html",
  APOIO = "apoio",
  BUSCA = "busca",
  EXPEDIENTE = "expediente",
}

export enum EApoioDisplay {
  IMG = "imagem",
  TXT = "texto"
}

export interface IConteudoTexto {
  tag: "a" | "p"
  text: string
}

export interface IConteudoSecao {
  title: string
  img?: string
  color: string
  content: Array<IConteudoTexto>
}

interface IEmpresa {
  nome: String;
  site?: String;
}

export interface IApoio {
  titulo: String;
  destaque: boolean;
  tipo: EApoioDisplay;
  empresas: IEmpresa;
}