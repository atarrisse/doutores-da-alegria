import React from "react";

import EquipeAccordion from "./EquipeAccordion";

import useWindowSize from "@/utils/useWindowSize";

import * as styles from "./styles.module.scss";

interface Props {
  teams: any[]
}


const EquipeSection: React.FC<Props> = ({ teams }) => {
  const { width } = useWindowSize();
  const isMobile = width ? width < 1024 : true;

  const left = teams.filter((_item, i) => i % 2 === 0);
  const right = teams.filter((_item, i) => i % 2 !== 0);

  return (
    <>
      {isMobile &&
        <div className={styles.equipe}>
          {teams.map((dpt, index) => (
            <EquipeAccordion dpt={dpt} key={JSON.stringify(index, dpt)} />
          ))
          }
        </div>
      }
      {
        !isMobile &&
        <div className={styles.wrapper}>
          <div className={styles.equipe}>
            {left.map((dpt, index) => (
              <EquipeAccordion dpt={dpt} key={JSON.stringify(index, dpt)} />
            ))
            }
          </div >
          <div className={styles.equipe}>
            {right.map((dpt, index) => (
              <EquipeAccordion dpt={dpt} key={JSON.stringify(index, dpt)} />
            ))
            }
          </div>
        </div>
      }
    </>

  );
};

export default EquipeSection;
