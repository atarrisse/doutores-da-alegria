import * as React from "react"
import ReactMarkdown from "react-markdown"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Rodape from "../Rodape";

import Content from "../Content";

import { IConteudoSecao } from "../../types.d.ts"

import * as styles from "./styles.module.scss"

type Props = IConteudoSecao

const Section: React.FC<Props> = ({
  children,
  color,
  content,
  extra,
  images,
  index,
  title,
  ...others
}) => {

  return (
    <div
      className={styles.section}
      {...others}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {children ? children : content && <Content content={content} />}
      </div>
      <Rodape index={index} />
    </div>
  )
}

export default Section
