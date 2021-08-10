import React from "react"

import Content from "../Content"
import Rodape from "../Rodape"

import * as styles from "./styles.module.scss"

import { IConteudoSecao } from "../../types.d.ts"

type Props = IConteudoSecao

const Section: React.FC<Props> = ({
  children,
  content,
  id,
  index,
  links,
  title,
  ...others
}) => {
  return (
    <div className={styles.section} {...others}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {children ? children : content && <Content content={content} />}
      </div>
      {/* <Rodape index={index} links={links} id={id} /> */}
    </div>
  )
}

export default Section
