
enum PATROCINIO_DISPLAY {
  IMG = "imagem",
  TXT = "texto"
}

const patrocinadores = [
  {
    categoria: "Gargalhada",
    tipo: PATROCINIO_DISPLAY.IMG,
    empresas: [
      { nome: "Drogasil", site: "https://www.drogasil.com.br/" },
      { nome: "White Martins", site: "https://www.praxair.com.br" }
    ]
  },
  {
    categoria: "Risada",
    tipo: PATROCINIO_DISPLAY.IMG,
    empresas: [
      { nome: "Blau farmacêutica", site: "https://www.blau.com" },
    ]
  },
  {
    categoria: "Sorriso",
    tipo: PATROCINIO_DISPLAY.IMG,
    empresas: [
      { nome: "Aché", site: "https://www.ache.com.br" },
      { nome: "Adient", site: "https://www.adient.com" },
      { nome: "Bayer", site: "https://www.bayer.com.br/pt/" },
      { nome: "Visa", site: "https://www.visa.com.br/" },
    ]
  },
  {
    categoria: "Narigada",
    tipo: PATROCINIO_DISPLAY.IMG,
    empresas: [
      { nome: "abbvie", site: "https://www.abbvie.com/" },
      { nome: "Libbs", site: "https://www.libbs.com.br/" },
      { nome: "Torra", site: "https://www.lojastorra.com.br/" },
      { nome: "UPL", site: "https://www.upl-ltd.com/pt/open-ag" },
    ]
  },
  {
    categoria: "Cócegas",
    tipo: PATROCINIO_DISPLAY.TXT,
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
    tipo: PATROCINIO_DISPLAY.TXT,
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

export { PATROCINIO_DISPLAY };
export default patrocinadores