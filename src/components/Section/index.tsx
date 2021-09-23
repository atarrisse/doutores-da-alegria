import React from "react";

import { IConteudoSecao } from "../../types.d.ts";
import Content from "../Content";
import MenuButton from "../MenuButton";
import Rodape from "../Rodape";

import useWindowSize from "@/utils/useWindowSize";

import * as styles from "./styles.module.scss";


type Props = IConteudoSecao

const Section: React.FC<Props> = ({
  children,
  content,
  desktopContent,
  id,
  index,
  links,
  title,
  hideTitleOnDesktop,
  ...others
}) => {
  const { isMobile } = useWindowSize();
  const hasLineBreak = title.includes("<br/>");
  const hasDesktopContent = desktopContent?.length > 0;

  return (
    <section className={styles.section} {...others}>
      <div className={styles.content}>
        {
          <div className={styles.header} data-hide-desktop={hideTitleOnDesktop}>
            {
              hasLineBreak ?
                <h2
                  className={styles.title}
                  dangerouslySetInnerHTML={{ __html: title }}>
                </h2>
                : <h2 className={styles.title} >
                  {title}
                </h2>
            }
            {isMobile && <MenuButton />}
          </div>
        }
        {
          hasDesktopContent
            ? isMobile
              ? <>{children ? children : content && <Content content={content} />}</>
              : <>{children ? children : desktopContent && <Content content={desktopContent} />}</>
            : <>{children ? children : content && <Content content={content} />}</>
        }


      </div>
      <Rodape index={index} links={links} id={id} />
    </section>
  );
};

export default Section;
