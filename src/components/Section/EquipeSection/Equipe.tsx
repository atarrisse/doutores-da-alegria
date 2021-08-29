import React from "react";

import * as styles from "./styles.module.scss";


const Equipe = ({ person, cargo, index }) => {
  return (
    <React.Fragment key={JSON.stringify(index, person, cargo)}>
      <li className={styles.nome}>
        {person.nome}{" "}
        {person.nota && <small className={styles.nota}>{person.nota}</small>}
      </li>
      {cargo && cargo !== "" && <li className={styles.cargo}>{cargo}</li>}
    </React.Fragment>
  );
};


export default Equipe;
