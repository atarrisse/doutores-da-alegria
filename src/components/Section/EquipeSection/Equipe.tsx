import React from "react";

import * as styles from "./styles.module.scss";


const Equipe = ({ person, cargo }) => {
  return (
    <>
      <li className={styles.nome}>
        {person.nome}{" "}
        {person.nota && <small className={styles.nota}>{person.nota}</small>}
      </li>
      {cargo && cargo !== "" && <li className={styles.cargo}>{cargo}</li>}
    </>
  );
};


export default Equipe;
