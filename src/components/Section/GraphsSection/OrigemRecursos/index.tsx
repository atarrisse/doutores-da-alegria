import React from "react"
import { ResponsiveContainer, BarChart, Bar, Cell } from "recharts"

import { EColors } from "../../../../types.d.ts"
import Section from "../../../Section"
import Legenda from "../Legenda"

import * as styles from "./styles.module.scss"

interface IProps {}

const data = [
  {
    name: "Doações de empresas via leis de incentivo",
    value: 73,
    color: EColors.SALMAO,
  },
  {
    name:
      "Geração de recursos (produtos, serviços, intervenções em empresas e cursos)",
    value: 7.4,
    color: EColors.VERMELHO,
  },
  {
    name: "Doações de pessoas via leis de incentivo",
    value: 4.9,
    color: EColors.AZUL,
  },
  {
    name: "Fomento (FUMCAD e Funcultura)",
    value: 4.5,
    color: EColors.AZUL_ESCURO,
  },
  {
    name: "Doações de pessoas sem leis de incentivo",
    value: 3.5,
    color: EColors.ROSA,
  },
  {
    name: "Campanhas de marketing e licenciamento",
    value: 3.3,
    color: EColors.ROXO,
  },
  {
    name: "Parcerias com cartões de crédito",
    value: 2.3,
    color: EColors.VERDE,
  },
  {
    name: "Doações de empresas sem leis de incentivo (investimento social)",
    value: 1,
  },
]

const LabelValue = data => {
  const { x, y, offset, value } = data
  return (
    <text
      fontSize="1.2rem"
      fill={`var(--${data.color || "carbon"})`}
      x={x}
      y={y - offset}
      className={styles.label}
    >
      {`${value.toLocaleString("pt-br")}%`}
    </text>
  )
}
const OrigemRecursos = () => {
  return (
    <>
      <div className={styles.graph}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <Bar dataKey="value" label={<LabelValue />} radius={[2, 2, 0, 0]}>
              {data.map(entry => (
                <Cell
                  key={JSON.stringify(entry)}
                  fill={`var(--${entry.color || "carbon"})`}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <Legenda data={data} />
    </>
  )
}

export default OrigemRecursos
