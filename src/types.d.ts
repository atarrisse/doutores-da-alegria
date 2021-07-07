declare module "*.scss"
declare module "*.module.scss"

export enum COLORS {
  PINK = "rosa",
  RED = "vermelho",
  CYAN = "azul",
  BLUE = "azul-escuro",
  GREEN = "verde",
  SALMON = "salmao",
  PURPLE = "roxo",
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
