// If you don't want to use TypeScript you can delete this file!
import * as React from "react"

import { EQUIPE } from "../../../content"
import Section from "../../Section"
import * as styles from "./styles.module.scss"
import { EColors } from "../../../types.d.ts"
import Accordion from "../../Accordion"


type Props = {}

const Equipe: React.FC<Props> = () => {
  const data = EQUIPE;
  return (
    <>
      {
        data.map((dpt) => (
          <React.Fragment key={JSON.stringify(dpt)}>
            <Accordion
              title={
                <>
                  <h3 className={styles.label}>{dpt.departamento}</h3>
                  {dpt.gestao && <h4 className={styles.gestao}>{dpt.gestao}</h4>}
                </>
              }
            >

              <ul className={styles.list}>
                {
                  Object.entries(dpt.pessoas).map(([key, value]) => (
                    <React.Fragment key={JSON.stringify(value)}>
                      {value.map(person => (
                        <li className={styles.nome} key={JSON.stringify(person)}>
                          {person.nome} <small className={styles.nota}>{person.nota}</small>
                        </li>))}
                      {key && key !== "" && <li className={styles.cargo}>{key}</li>}
                    </React.Fragment>
                  ))
                }
              </ul>

            </Accordion>
          </React.Fragment>
        ))
      }
    </>
  )
}

export default Equipe
