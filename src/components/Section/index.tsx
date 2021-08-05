import * as React from "react"
import ReactMarkdown from "react-markdown"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Content from "../Content";

import { IConteudoSecao, ETipoConteudo } from "../../types.d.ts"

import * as styles from "./styles.module.scss"

type Props = IConteudoSecao

const Section: React.FC<Props> = ({ children, content, extra, images, title, color, ...others }) => {
  const img = {
    parcerias: getImage(images?.bg?.childImageSharp?.gatsbyImageData),
    bg: getImage(images?.bg?.childImageSharp?.gatsbyImageData),
    people: images?.people?.map(person => {
      if (!person) return;
      return <GatsbyImage alt="" image={getImage(person.childImageSharp?.gatsbyImageData)} />
    })
  }

  return (
    <div
      className={styles.section}
      {...others}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {children ? children : content && <Content content={content} img={img} />}
      </div>
      {
        images &&
        <div className={styles.rodape}>
          {
            img.bg &&
            (<GatsbyImage
              alt=""
              aria-hidden
              className={styles.bg}
              image={img.bg}
            />)
          }
          {img.people &&
            img.people.map(person => person && <GatsbyImage image={person} alt="" />)
          }
        </div>
      }
    </div>
  )
}

export default Section
