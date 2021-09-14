import React, { useState } from "react";
import kebabCase from "lodash/kebabCase";

import Conteudo from "@/conteudo/conteudo";
import Estatisticas from "@/conteudo/estatisticas";
import Expediente from "@/conteudo/expediente";
import ImpactoSocial from "@/conteudo/impactoSocial";
import Parcerias from "@/conteudo/parcerias";

import MenuButton from "@/components/MenuButton";

import * as styles from "./styles.module.scss";

const Menu = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const slides = [...Conteudo, ...Estatisticas, ...Expediente, ...ImpactoSocial, ...Parcerias].reduce((acc, curr) => {
    if (curr.title !== acc[acc.length - 1]?.title)
      acc.push(curr);
    return acc
  }, [])

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={className}>
      <MenuButton isOpen={isOpen} onClick={handleClick} />
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {slides.map(item => (
            <li
              className={styles.item}
              style={{ "--theme-color": `var(--${kebabCase(item.color)})` }}
            >
              <a className={`no-underline ${styles.link}`} href={`#${kebabCase(item.title)}-${item.id}`}>
                {item.title.replace("<br />", " ")}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Menu