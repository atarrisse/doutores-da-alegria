import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import kebabCase from "lodash-es/kebabCase"
import { EApoioDisplay, IApoio } from "../../../../types.d.ts"

import * as styles from "./styles.module.scss"

interface IProps extends IApoio {
  logos: Array<any>
}

const ListaEmpresas: React.FC<IProps> = ({ tipo, destaque, empresas, logos, governamental }) => {
  return (
    <ul className={styles.listaEmpresas} data-governamental={governamental}>
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
          <li data-destaque={empresa.destaque || destaque} key={kebabCase(empresa.nome)}>
            {
              empresa.site
                ? <a className="no-underline" target="_blank" rel="noopener noreferrer" href={empresa.site}>
                  {logos[i] && <GatsbyImage objectFit="contain" className={styles.img} image={logos[i].childImageSharp.gatsbyImageData} alt={empresa.nome} title={empresa.nome} />}
                </a>
                : <>{logos[i] && <GatsbyImage objectFit="contain" className={styles.img} image={logos[i].childImageSharp.gatsbyImageData} alt={empresa.nome} title={empresa.nome} />}</>
            }
          </li>
        ))
      }
    </ul>
  )
}

export default ListaEmpresas
