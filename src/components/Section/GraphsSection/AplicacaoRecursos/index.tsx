import React, { useEffect, useRef, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

import Legenda from "../Legenda";

import { getColor } from "@/utils";
import useOnScreen from "@/utils/useOnScreen";
import useWindowDimensions from "@/utils/useWindowDimension";

import * as styles from "./styles.module.scss";

import { EColors } from "@/types.d.ts";


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
      value: 5.8,
      color: "#771717",
    },
    {
      name: "Festival Miolo Mole",
      value: 5.1,
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
};

const legenda = (data) => {
  return Object.entries(data).map(([key, value]) => {
    return (<React.Fragment key={JSON.stringify(value)}>
      <h3 className={styles.labelTitle}>{key}</h3>
      <Legenda data={value} />
    </React.Fragment>);
  })
}

const graficoMobile = (allValues) => {
  return (<ResponsiveContainer>
    <PieChart>
      <Pie
        data={allValues}
        dataKey="value"
        nameKey="name"
        outerRadius={"100%"}
        innerRadius={"70%"}
        cx="50%"
        cy="50%"
        fill="#6b6a6d"
      >
        {allValues.map((entry) => (
          <Cell key={JSON.stringify(entry)} fill={getColor(entry.color)} />
        ))
        }
      </Pie>
    </PieChart>
  </ResponsiveContainer>)
}
const graficoDesktop = (allValues) => {
  return (<ResponsiveContainer>
    <PieChart>
      <Pie
        data={allValues}
        dataKey="value"
        nameKey="name"
        outerRadius={"100%"}
        innerRadius={"70%"}
        cx="50%"
        cy="50%"
        fill="#6b6a6d"
        animationBegin={1500}
      >
        {allValues.map((entry) => (
          <Cell key={JSON.stringify(entry)} fill={getColor(entry.color)} />
        ))
        }
      </Pie>
    </PieChart>
  </ResponsiveContainer>)
}
const AplicacaoRecursos = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const { isMobile } = useWindowDimensions();
  const [init, setInit] = useState(false);

  const allValues = Object.values(data).map(item => item).flat();

  useEffect(() => {
    if (window.innerWidth < 1024) {
      const timer = setTimeout(() => {
        setInit(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  });

  useEffect(() => {
    if (window.innerWidth < 1024 || init) return;
    setInit(isVisible === true);
  }, [isVisible]);

  return (
    <>
      <div className={styles.graph} ref={ref}>
        {isMobile ? init && graficoMobile(allValues) : graficoDesktop(allValues)}
      </div>
      {legenda(data)}
    </>
  );
};

export default AplicacaoRecursos;