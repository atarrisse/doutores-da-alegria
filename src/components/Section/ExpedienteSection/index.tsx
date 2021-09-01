import React from "react";

import * as styles from "./styles.module.scss";

interface Props {
  escritorios: any[];
  time: any[];
  fechamento: "string";
}

const ExpedienteSection: React.FC<Props> = ({
  escritorios,
  fechamento,
  time
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.coluna}>
        <ul className={styles.list}>
          {
            time.map((person, index) => (
              <li className={styles.element} key={`${index}-${JSON.stringify(person)}`}>
                <p>{person.cargo}</p>
                <p>{person.nome}</p>
              </li>
            ))
          }
        </ul>
      </div>
      <div className={styles.coluna}>
        <div className={styles.element}>
          <strong>Fechamento desta edição:</strong>
          <p>{fechamento}</p>
        </div>
        <ul className={styles.list}>
          {
            escritorios.map((escritorio, index) => (
              <li className={styles.element} key={`${index}-${JSON.stringify(escritorio)}`}>
                <address>
                  <strong>{escritorio.cidade}</strong><br />
                  {escritorio.endereco.map((end, i) => {
                    return <React.Fragment key={JSON.stringify(end, i)}>{end}<br /> </React.Fragment>;
                  })}
                </address>
              </li>
            ))
          }
        </ul>
      </div>
    </div>

  );
};

export default ExpedienteSection;
