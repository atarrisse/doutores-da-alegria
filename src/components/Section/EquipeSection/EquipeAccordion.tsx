import React from "react";

import ArrowDown from "../../../../static/icons/ArrowDown.svg";
import Equipe from "./Equipe";

import Accordion from "@/components/Accordion";

import * as styles from "./styles.module.scss";

interface Props {
  dpt: any;
}


const EquipeSection: React.FC<Props> = ({ dpt }) => {
  return (
    <Accordion
      className={styles.dpt}
      key={`${dpt.departamento}-${JSON.stringify(dpt.pessoas)}`}
      title={
        <>
          <div className={styles.title}>
            <h3 className={styles.label}>
              {dpt.departamento}
            </h3>
            {dpt.gestao && <h4 className={styles.gestao}>{dpt.gestao}</h4>}
          </div>

        </>
      }
    >
      <ul className={styles.list}>
        {dpt.pessoas && Object.entries(dpt.pessoas).map(([key, value]: [string, any], idx) => (
          <React.Fragment key={JSON.stringify(idx, key, value)}>
            {
              value.map((person, i) => (
                <Equipe key={JSON.stringify(value)} cargo={key} person={person} index={i} />
              ))
            }
          </React.Fragment>
        ))}
      </ul>

      {dpt.programas && dpt.programas.map(programa => {
        return (
          <>
            {programa.nome && <h5 className={styles.programa}>{programa.nome}</h5>}
            {
              programa.organizacao.map(org => (
                <>
                  <h6 className={styles.grupo}>{org.grupo}</h6>
                  <ul className={styles.list}>
                    {
                      org.pessoas && Object.entries(org.pessoas).map(([key, value]: [string, any]) => (
                        <React.Fragment key={JSON.stringify(value)}>
                          {value.map((person) => (<Equipe key={JSON.stringify(value)} cargo={key} person={person} />))}
                        </React.Fragment>
                      ))
                    }
                  </ul>
                </>
              ))
            }
          </>
        );
      })}
    </Accordion>
  );
};

export default EquipeSection;
