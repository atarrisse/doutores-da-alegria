import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import kebabCase from "lodash-es/kebabCase"
import { EApoioDisplay, IApoio } from "../../../../types.d.ts"

import * as styles from "./styles.module.scss"

interface IProps extends IApoio {
  logos: Array<any>
}

const ListaEmpresas: React.FC<IProps> = ({ tipo, destaque, empresas, logos }) => {
  if (tipo === "texto") console.log(empresas)
  return (
    <ul className={styles.listaEmpresas} >
      {
        tipo === EApoioDisplay.TXT &&
        empresas.map(empresa => (
          <li key={kebabCase(empresa.nome)}>
            {empresa.nome}
          </li>
        ))
      }
      {
        !!logos &&
        tipo === EApoioDisplay.IMG &&
        empresas.map((empresa, i) => (
          <li data-destaque={destaque} key={kebabCase(empresa.nome)}>
            {
              empresa.site
                ? <a className="no-underline" target="_blank" rel="noopener noreferrer" href={empresa.site}>
                  {logos && logos[i] && <GatsbyImage image={logos[i]} alt={empresa.nome} />}
                </a>
                : <>{logos && logos[i] && <GatsbyImage image={logos[i]} alt={empresa.nome} />}</>
            }
          </li>
        ))
      }
    </ul>
  )
}

export default ListaEmpresas
