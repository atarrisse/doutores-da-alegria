import kebabCase from "lodash-es/kebabCase";
import React from "react";

import { IApoio } from "../../types.d.ts";
import Apoio from "./Apoio";

import * as styles from "./styles.module.scss";

interface IProps {
  apoio: Array<IApoio>
}

const Parcerias: React.FC<IProps> = ({ apoio }) => {
  return (
    <>
      {apoio.map(ap => {
        const { titulo, parcerias } = ap;
        return (
          <React.Fragment key={kebabCase(titulo)}>
            {titulo && <h3 className={styles.titulo}>{titulo}</h3>}
            <div className={styles.grid}>
              {parcerias &&
                parcerias.map(parceria => {
                  return (
                    <Apoio
                      governamental={titulo.includes("Governamentais")}
                      key={JSON.stringify(parceria)}
                      parceria={parceria}
                    />
                  );
                })}
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Parcerias;
