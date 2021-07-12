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
