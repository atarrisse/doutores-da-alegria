import * as React from "react";
import Section from "../../../Section";
import { EColors } from "../../../../types.d.ts"
import Legenda from "../Legenda";


interface IProps { }

const data = {
  "Projetos": [
    {
      name: "Palhaços em Hospitais",
      value: 30.3,
      color: EColors.VERMELHO,
    },
    {

      name: "Programa de Formação de Palhaço para Jovens",
      value: 6.1,
      color: "#66B6FF",
    },
    {
      name: "Escola",
      value: 4.9,
      color: "#771717",
    },
    {
      name: "Festival Miolo Mole",
      value: 5.8,
      color: "#75C675",
    },
    {
      name: "Espetáculos",
      value: 0.8,
      color: EColors.AZUL,
    },
    {
      name: "Encontro Nacional",
      value: 0.4,
      color: EColors.AZUL_ESCURO,
    },
    {
      name: "Centro Cultural",
      value: 0.1,
      color: "#FF8B66",
    },
  ],
  "Adm/Operacional": [
    {
      name: "Pessoal",
      value: 26.8,
      color: "#FF7300",
    },
    {

      name: "Tecnologia da informação",
      value: 6.5,
      color: "#8800FF",
    },
    {
      name: "Comunicação",
      value: 5.5,
      color: "#FF61B2",
    },
    {
      name: "Ocupação e conservação de imóveis ",
      value: 4.7,
      color: "#9BC125",
    },
    {
      name: "Agenciamento de captação de recursos",
      value: 2.6,
      color: "#000000",
    },
    {
      name: "Assessoria (auditoria, contábil e jurídica)",
      value: 0.4,
      color: "#0025DD",
    },
    {
      name: "Ações em empresas",
      value: 0.7,
      color: "#1D871D",
    },
    {
      name: "Despesas operacionais áreas de apoio",
      value: 0.9,
      color: "#93309E",
    },
    {
      name: "Outros",
      value: 1.6,
      color: "#FFB024",
    },
  ],
}

const AplicacaoRecursos = () => {
  return (
    <Section title="Aplicação dos Recursos" color={EColors.ROSA}>
      {
        Object.entries(data).map(([key, value]) => {
          return (<React.Fragment key={JSON.stringify(value)}>
            <h3>{key}</h3>
            <Legenda data={value} />
          </React.Fragment>)
        })
      }
    </Section>
  )
}

export default AplicacaoRecursos