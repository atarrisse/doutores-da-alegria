import React, { useContext, useEffect } from "react";
import kebabCase from "lodash/kebabCase";

import Conteudo from "@/conteudo/conteudo";
import Estatisticas from "@/conteudo/estatisticas";
import Expediente from "@/conteudo/expediente";
import ImpactoSocial from "@/conteudo/impactoSocial";
import Parcerias from "@/conteudo/parcerias";

import * as styles from "./styles.module.scss";
import { Context } from "@/utils/context";

const Menu = () => {
  const { isMenuOpen } = useContext(Context);

  useEffect(() => {
    console.log("Menu", isMenuOpen);
  }, [isMenuOpen])

  const slides = [...Conteudo, ...Estatisticas, ...Expediente, ...ImpactoSocial, ...Parcerias].reduce((acc, curr) => {
    if (curr.title !== acc[acc.length - 1]?.title)
      acc.push(curr);
    return acc
  }, [])

  return (
    <nav className={styles.nav} data-open={isMenuOpen}>
      <ul className={styles.list}>
        {slides.map(item => {
          const id = `${kebabCase(item.title)}-${item.id}`;
          return (
            <li
              className={styles.item}
              key={id}
              style={{ "--theme-color": `var(--${kebabCase(item.color)})` }}
            >
              <a className={`no-underline ${styles.link}`} href={`#${id}`}>
                {item.title.replace("<br/>", " ")}
              </a>
            </li>
          )
        })}
        <li
          className={styles.item}
          key={50}
          style={{ "--theme-color": `var(--carvao)` }}
        >
          <a className={`no-underline ${styles.link}`} href={"https://doutoresdaalegria.org.br"}>
            Doutores da Alegria
          </a>
        </li>
        <li
          className={styles.item}
          key={50}
          style={{ "--theme-color": `var(--vermelho)` }}
        >
          <a className={`no-underline ${styles.link}`} href={"https://doutoresdaalegria.org.br/abrace-a-causa/"}>
            Doe para doutores
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu