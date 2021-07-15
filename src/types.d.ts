declare module "*.scss"
declare module "*.module.scss"

export enum COLORS {
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

export enum TAMANHO_NUM {
  GDE = "grande",
  PEQ = "pequeno"
}

export enum CONTENT_TYPE {
  NUM = "numbers"
}

export interface CONTENT_TEXT {
  tag: "a" | "p"
  text: string
}

export interface CONTENT_SECTION {
  title: string
  img?: string
  color: string
  content: Array<CONTENT_TEXT>
}
