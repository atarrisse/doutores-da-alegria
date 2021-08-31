import React from "react";

import { IConteudoSecao } from "../../types.d.ts";
import Content from "../Content";
import Rodape from "../Rodape";

import * as styles from "./styles.module.scss";


type Props = IConteudoSecao

const Section: React.FC<Props> = ({
  children,
  content,
  id,
  index,
  links,
  title,
  hideTitleOnDesktop,
  ...others
}) => {
  const hasLineBreak = title.includes("<br/>");

  return (
    <section className={styles.section} {...others}>
      <div className={styles.content}>
        {
          hasLineBreak ?
            <h2
              className={styles.title}
              data-hide-desktop={hideTitleOnDesktop}
              dangerouslySetInnerHTML={{ __html: title }}>
            </h2>
            : <h2 className={styles.title} data-hide-desktop={hideTitleOnDesktop}>
              {title}
            </h2>
        }

        {children ? children : content && <Content content={content} />}
      </div>
      <Rodape index={index} links={links} id={id} />
    </section>
  );
};

export default Section;
