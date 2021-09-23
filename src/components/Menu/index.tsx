import kebabCase from "lodash/kebabCase";
import React, { useContext } from "react";

import Conteudo from "@/conteudo/conteudo";
import Estatisticas from "@/conteudo/estatisticas";
import Expediente from "@/conteudo/expediente";
import ImpactoSocial from "@/conteudo/impactoSocial";
import Parcerias from "@/conteudo/parcerias";
import { Context } from "@/utils/context";
import useWindowDimensions from "@/utils/useWindowDimension";

import * as styles from "./styles.module.scss";

const Menu = ({ slider }) => {
  const win = useWindowDimensions();
  const { isMenuOpen, setIsMenuOpen } = useContext(Context);

  const slides = [...Conteudo, ...ImpactoSocial, ...Estatisticas, ...Parcerias, ...Expediente].reduce((acc, curr) => {
    if (curr.title !== acc[acc.length - 1]?.title)
      acc.push(curr);
    return acc;
  }, []);

  const handleClick = () => {
    setIsMenuOpen(false);
  };
  const handleLinkClick = (e, index) => {
    if (win?.isMobile) {
      e.preventDefault();
      slider.current.slickGoTo(index);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={styles.nav} data-open={isMenuOpen}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button
            aria-label="Fechar menu"
            className={styles.closeButton}
            onClick={handleClick}></button>
        </li>
        {slides.map((item) => {
          const id = `${kebabCase(item.title)}-${item.id}`;
          return (
            <li
              className={styles.item}
              key={id}
              style={{ "--theme-color": `var(--${kebabCase(item.color)})` }}
            >
              <a
                className={`no-underline ${styles.link}`}
                href={`#${id}`}
                onClick={(e) => handleLinkClick(e, Number(item.id) + 1)}
              >
                {item.title.replace("<br/>", " ")}
              </a>
            </li>
          );
        })}
        <li
          className={styles.item}
          key={slides.length + 1}
          style={{ "--theme-color": `var(--carbon)` }}
        >
          <a
            className={`no-underline ${styles.link}`}
            href={"https://doutoresdaalegria.org.br"}
            rel="noopener noreferrer"
            target="_blank"
          >
            Doutores da Alegria
          </a>
        </li>
        <li
          className={styles.item}
          key={slides.length + 2}
          style={{ "--theme-color": `var(--vermelho)` }}
        >
          <a
            className={`no-underline ${styles.link}`}
            href={"https://doutoresdaalegria.org.br/abrace-a-causa/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Doe para doutores
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;