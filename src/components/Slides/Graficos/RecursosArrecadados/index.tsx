import * as React from "react";
import Section from "../../../Section";
import { EColors } from "../../../../types.d.ts"
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar, LabelList, Cell } from "recharts";
import * as styles from "./styles.module.scss"

interface IProps { }

const data = [
  { name: "2013", value: 4072 },
  { name: "2014", value: 5675 },
  { name: "2015", value: 5839 },
  { name: "2016", value: 8855 },
  { name: "2017", value: 7681 },
  { name: "2018", value: 8894 },
  { name: "2019", value: 8483 },
  { name: "2020", value: 7779 },
]

const LabelValue = (data) => {
  const { x, y, height, width, offset, value } = data
  return <text
    x={x + width + 10}
    y={y + offset + height / 2}
    className={styles.label}>
    {value.toLocaleString("pt-br")}{value === 8855 && "*"}
  </text>
}
const LabelYear = (data) => {
  const { y, height, value } = data
  return <text x={46} y={y + 6 + height / 2} className={styles.label}>{value}</text>
}

const RecursosArrecadados = () => {
  return (
    <Section title="Recursos Arrecadados" color={EColors.VERDE}>
      <p>Em mil reais, inclusive resultados de aplicações financeiras</p>
      <div className={styles.graph}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            barSize={38}
            maxBarSize={200}
            layout="vertical"
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <XAxis hide={true} type="number" />
            <YAxis hide={true} dataKey="name" type="category" />
            <Bar
              layout="vertical"
              dataKey="value"
              fill="#8884d8"
              radius={[0, 7, 7, 0]}
              label={<LabelValue />}
            >
              <LabelList dataKey="name" position="insideLeft" offset={48} content={<LabelYear external={external} />} />
              {
                data.map((entry, index) => (
                  <Cell key={JSON.stringify(entry)} fill={`rgba(95, 240, 101, ${0.3 + index * 0.1})`} />
                ))
              }
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p>Nossas contas são auditadas anualmente por auditorias independentes. Em 2020, a Singolare Consultoria e Auditoria realizou este trabalho.</p>
      <small>* Em 2016, o evento Gala Doutores da Alegria mobilizou empresas e pessoas, gerando recursospela venda de convites, cotas de patrocínio e leilão. Os recursos foram utilizados na produção do próprio evento e seu superávit foi integralmente aplicado nos projetos da associação.</small>
    </Section>
  )
}

export default RecursosArrecadados