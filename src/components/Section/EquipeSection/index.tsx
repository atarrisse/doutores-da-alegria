import React from "react";

import Accordion from "@/components/Accordion";

import * as styles from "./styles.module.scss";

interface Props {
  teams: any[]
}

const Equipe = ({ person, cargo }) => {
  return (
    <React.Fragment key={JSON.stringify(person)}>
      <li className={styles.nome}>
        {person.nome}{" "}
        {person.nota && <small className={styles.nota}>{person.nota}</small>}
      </li>
      {cargo && cargo !== "" && <li className={styles.cargo}>{cargo}</li>}
    </React.Fragment>
  );
};

const EquipeSection: React.FC<Props> = ({ teams }) => {
  return (
    <div className={styles.equipe}>
      {teams.map(dpt => (
        <Accordion
          className={styles.dpt}
          key={`${dpt.departamento}-${JSON.stringify(dpt.pessoas)}`}
          title={
            <>
              <h3 className={styles.label}>{dpt.departamento}</h3>
              {dpt.gestao && <h4 className={styles.gestao}>{dpt.gestao}</h4>}
            </>
          }
        >
          <ul className={styles.list}>
            {dpt.pessoas && Object.entries(dpt.pessoas).map(([key, value]: [string, any]) => (
              <React.Fragment key={JSON.stringify(value)}>
                {value.map(person => (<Equipe key={JSON.stringify(value)} cargo={key} person={person} />))}
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
      ))
      }
    </div >
  );
};

export default EquipeSection;
