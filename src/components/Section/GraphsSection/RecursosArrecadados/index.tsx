import React, { useEffect, useRef, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  LabelList,
  Cell,
} from "recharts";

import useOnScreen from "@/utils/useOnScreen";
import useWindowDimensions from "@/utils/useWindowDimension";

import * as styles from "./styles.module.scss";


const data = [
  { name: "2013", value: 4072 },
  { name: "2014", value: 5675 },
  { name: "2015", value: 5839 },
  { name: "2016", value: 8855 },
  { name: "2017", value: 7681 },
  { name: "2018", value: 8894 },
  { name: "2019", value: 8483 },
  { name: "2020", value: 7779 },
];

const LabelValue = data => {
  const { x, y, height, width, offset, value } = data;
  const win = useWindowDimensions();
  const posX = win?.isMobile ? x + width + 10 : x + width + 50;
  return (
    <text x={posX} y={y + offset + height / 2} className={styles.label}>
      {value.toLocaleString("pt-br")}
      {value === 8855 && "*"}
    </text>
  );
};
const LabelYear = data => {
  const { y, height, value } = data;
  return (
    <text x={46} y={y + 6 + height / 2} className={styles.label}>
      {value}
    </text>
  );
};

const graphMobile = () => (
  <BarChart
    data={data}
    barGap={9}
    barSize={38}
    maxBarSize={60}
    layout="vertical"
    margin={{ top: 0, right: 25, bottom: 0, left: 0 }}
  >
    <XAxis hide={true} type="number" />
    <YAxis hide={true} dataKey="name" type="category" />
    <Bar
      layout="vertical"
      dataKey="value"
      radius={[0, 7, 7, 0]}
      label={<LabelValue />}
    >
      <LabelList
        dataKey="name"
        position="insideLeft"
        offset={48}
        content={<LabelYear external={external} />}
      />
      {data.map((entry, index) => (
        <Cell
          key={JSON.stringify(entry)}
          fill={`rgba(95, 240, 101, ${0.3 + index * 0.1})`}
        />
      ))}
    </Bar>
  </BarChart>
);

const graphDesktop = (isVisible) => (
  <BarChart
    data={data}
    barGap={25}
    barSize={109}
    maxBarSize={860}
    layout="vertical"
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
  >
    <XAxis hide={true} type="number" />
    <YAxis hide={true} dataKey="name" type="category" />
    {
      isVisible &&
      <Bar
        layout="vertical"
        dataKey="value"
        radius={[0, 7, 7, 0]}
        label={<LabelValue />}
      >
        <LabelList
          dataKey="name"
          position="insideLeft"
          offset={48}
          content={<LabelYear />}
        />
        {data.map((entry, index) => (
          <Cell
            key={JSON.stringify(entry)}
            fill={`rgba(95, 240, 101, ${0.3 + index * 0.1})`}
          />
        ))}
      </Bar>
    }
  </BarChart>
);

const RecursosArrecadados = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const win = useWindowDimensions();
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) return;
    setInit(isVisible === true);
  }, [isVisible]);

  return (
    <div className={styles.graph} ref={ref}>
      <ResponsiveContainer>
        {win?.isMobile ? graphMobile() : graphDesktop(!init ? isVisible : true)}
      </ResponsiveContainer>
    </div>
  );
};

export default RecursosArrecadados;
