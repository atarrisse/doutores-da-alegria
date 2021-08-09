import kebabCase from "lodash-es/kebabCase"
import React from "react"

import { EApoioDisplay } from "../../../../types.d.ts"
import Image from "../../../Image"

import * as styles from "./styles.module.scss"

const ListaEmpresas = ({ tipo, destaque, empresas, governamental }) => {
  return (
    <ul className={styles.listaEmpresas} data-governamental={governamental}>
      {tipo === EApoioDisplay.TXT &&
        empresas.map(empresa => (
          <li key={kebabCase(empresa.nome)}>{empresa.nome}</li>
        ))}
      {tipo === EApoioDisplay.IMG &&
        empresas.map(empresa => {
          return (
            <li
              data-destaque={empresa.destaque || destaque}
              key={kebabCase(empresa.nome)}
            >
              {empresa.site ? (
                <a
                  className="no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={empresa.site}
                >
                  <Image filename={empresa.filename} alt={empresa.nome} />
                </a>
              ) : (
                <Image filename={empresa.filename} alt={empresa.nome} />
              )}
            </li>
          )
        })}
    </ul>
  )
}

export default ListaEmpresas
