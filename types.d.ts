declare module "*.scss"

declare enum COLORS {
  PINK,
  RED,
  CYAN,
  GREEN,
  SALMON,
  LILAC,
}

interface CONTENT_TEXT {
  tag: "a" | "p"
  text: string
}

interface CONTENT_SECTION {
  title: string
  img: string
  content: Array<CONTENT_TEXT>
}
