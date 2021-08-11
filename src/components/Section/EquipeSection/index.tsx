import React from "react"

import Accordion from "@/components/Accordion"

import * as styles from "./styles.module.scss"

interface Props {
  teams: any[]
  title: string
}

const EquipeSection: React.FC<Props> = ({ teams }) => {
  return (
    <div className={styles.equipe}>
      {teams.map(dpt => (
        <Accordion
          className={styles.dpt}
          key={JSON.stringify(dpt)}
          title={
            <>
              <h3 className={styles.label}>{dpt.departamento}</h3>
              {dpt.gestao && <h4 className={styles.gestao}>{dpt.gestao}</h4>}
            </>
          }
        >
          <ul className={styles.list}>
            {Object.entries(dpt.pessoas).map(([key, value]) => (
              <React.Fragment key={JSON.stringify(value)}>
                {value.map(person => (
                  <li className={styles.nome} key={JSON.stringify(person)}>
                    {person.nome}{" "}
                    <small className={styles.nota}>{person.nota}</small>
                  </li>
                ))}
                {key && key !== "" && <li className={styles.cargo}>{key}</li>}
              </React.Fragment>
            ))}
          </ul>
        </Accordion>
      ))}
    </div>
  )
}

export default EquipeSection
