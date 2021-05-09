declare module "*.scss"

declare enum COLORS {
  PINK,
  RED,
  CYAN,
  GREEN,
  SALMON,
  LILAC,
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
