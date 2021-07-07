import * as React from "react"

import * as styles from "./styles.module.scss"


const Slide: React.FC = ({ children, ...others }) => {
  return (
    <article className={styles.article} {...others}>
      <div className={styles.content}>
        {children}
      </div>
    </article>
  )
}

export default Slide
