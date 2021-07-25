import * as React from "react";
import Section from "../../../Section";
import { EColors } from "../../../../types.d.ts"
import { ResponsiveContainer, BarChart, Bar, Cell } from "recharts";
import * as styles from "./styles.module.scss"


interface IProps { }

const data = [
  {
    name: "Doações de empresas via leis de incentivo",
    value: 73,
    color: EColors.SALMAO
  },
  {

    name: "Geração de recursos (produtos, serviços, intervenções em empresas e cursos)",
    value: 7.4,
    color: EColors.VERMELHO
  },
  {
    name: "Doações de pessoas via leis de incentivo",
    value: 4.9,
    color: EColors.AZUL
  },
  {
    name: "Fomento (FUMCAD e Funcultura)",
    value: 4.5,
    color: EColors.AZUL_ESCURO
  },
  {
    name: "Doações de pessoas sem leis de incentivo",
    value: 3.5,
    color: EColors.ROSA
  },
  {
    name: "Campanhas de marketing e licenciamento",
    value: 3.3,
    color: EColors.ROXO
  },
  {
    name: "Parcerias com cartões de crédito",
    value: 2.3,
    color: EColors.VERDE
  },
  {
    name: "Doações de empresas sem leis de incentivo (investimento social)",
    value: 1
  },
]

const LabelValue = (data) => {
  const { x, y, offset, value } = data
  return <text
    font-size="1.2rem"
    fill={`var(--${data.color || "carbon"})`}
    x={x}
    y={y - offset}
    className={styles.label}>
    {`${(value).toLocaleString("pt-br")}%`}
  </text>
}
const OrigemRecursos = () => {
  return (
    <Section title="Origem dos Recursos" color={EColors.AZUL_ESCURO}>
      <p>Período de janeiro a dezembro de 2020</p>
      <div className={styles.graph}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <Bar
              dataKey="value"
              label={<LabelValue />}
              radius={[2, 2, 0, 0]}
            >
              {
                data.map((entry) => (
                  <Cell key={JSON.stringify(entry)} fill={`var(--${entry.color || "carbon"})`} />
                ))
              }
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <ul className={styles.origens}>
        {
          data.map(recurso => {
            var style = { "--theme-color": `var(--${recurso.color || "carbon"})` } as React.CSSProperties
            return (
              <li className={styles.legenda} key={JSON.stringify(recurso)} style={style}>
                <p className={styles.legendaValor}>{recurso.value}%</p>
                <p className={styles.legendaOrigem}>{recurso.name}</p>
              </li>
            )
          })
        }
      </ul>
    </Section >
  )
}

export default OrigemRecursos