import React from "react";

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
        <div className={styles.title}>
          <h3 className={styles.label}>
            {dpt.departamento}
          </h3>
          {dpt.gestao && <h4 className={styles.gestao}>{dpt.gestao}</h4>}
        </div>
      }
    >
      {/* idx */}
      {
        dpt.pessoas &&
        <ul className={styles.list}>
          {Object.entries(dpt.pessoas).map(([key, value]: [string, any], idx) => (
            <React.Fragment key={JSON.stringify({ idx, key, value })}>
              {
                value.map((person, i) => {
                  return (
                    <Equipe key={JSON.stringify(person, i)} cargo={key} person={person} />
                  );
                })
              }
            </React.Fragment>
          ))}
        </ul>
      }

      {dpt.programas && dpt.programas.map(programa => {
        return (
          <>
            {programa.nome && <h5 className={styles.programa}>{programa.nome}</h5>}
            {
              programa.organizacao.map((org, index) => (
                <React.Fragment key={JSON.stringify(org, index)}>
                  <h6 className={styles.grupo}>{org.grupo}</h6>
                  <ul className={styles.list}>
                    {
                      org.pessoas && Object.entries(org.pessoas).map(([key, val]: [string, any]) => (
                        <React.Fragment key={JSON.stringify(val)}>
                          {val.map((person) => (<Equipe key={JSON.stringify(val)} cargo={key} person={person} />))}
                        </React.Fragment>
                      ))
                    }
                  </ul>
                </React.Fragment>
              ))
            }
          </>
        );
      })}
    </Accordion>
  );
};

export default EquipeSection;
