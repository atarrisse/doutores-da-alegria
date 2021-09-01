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
      title={
        <div className={styles.title}>
          <h3 className={styles.label}>
            {dpt.departamento}
            <span className={styles.icon}>
              <ArrowDown className={styles.arrow} />
            </span>
          </h3>
          {dpt.gestao && <h4 className={styles.gestao}>{dpt.gestao}</h4>}
        </div>
      }
    >
      {
        dpt.pessoas &&
        <ul className={styles.list}>
          {Object.entries(dpt.pessoas).map(([key, value]: [string, any], index_pessoas) => (
            <React.Fragment key={index_pessoas}>
              {value.map((person, index_pessoa) => (
                <Equipe key={index_pessoa} cargo={key} person={person} />
              ))}
            </React.Fragment>
          ))}
        </ul>
      }

      {dpt.programas && dpt.programas.map((programa, index_programas) => (
        <React.Fragment key={index_programas}>
          {programa.nome && <h5 className={styles.programa}>{programa.nome}</h5>}
          {programa.organizacao.map((org, index_org) => (
            <React.Fragment key={index_org}>
              <h6 className={styles.grupo}>{org.grupo}</h6>
              <ul className={styles.list}>
                {org.pessoas && Object.entries(org.pessoas).map(([key, val]: [string, any], index_pessoas) => (
                  <React.Fragment key={index_pessoas}>
                    {val.map((person, index_pessoa) => (<Equipe key={index_pessoa} cargo={key} person={person} />))}
                  </React.Fragment>
                ))}
              </ul>
            </React.Fragment>
          ))
          }
        </React.Fragment>
      ))}
    </Accordion>
  );
};

export default EquipeSection;
