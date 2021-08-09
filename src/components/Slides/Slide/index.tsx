import React from "react"
import { useState } from "react"

import Extra from "../../Extra"

import * as styles from "./styles.module.scss"

const Slide: React.FC = ({ children, style, extra, theme, ...others }) => {
  const [isExtraOpen, setIsExtraOppen] = useState<boolean | undefined>(
    extra !== undefined
  )
  const handleCloseExtra = () => setIsExtraOppen(false)

  return (
    <article
      className={styles.article}
      data-extra={isExtraOpen}
      style={{ ...style, ...theme }}
      {...others}
    >
      <div className={styles.content}>{children}</div>
      {extra && isExtraOpen && (
        <Extra
          isActive={isExtraOpen}
          {...extra}
          handleClick={handleCloseExtra}
        />
      )}
    </article>
  )
}

export default Slide
