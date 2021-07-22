import * as React from "react"
import { useState } from "react"
import AnimateHeight from "react-animate-height"
import * as styles from "./styles.module.scss"

type Props = {
  title: any
}

const AccordionItem: React.FC<Props> = ({ title, children }) => {
  const [height, setHeight] = useState<string | number>(0);

  const handleClick = () => {
    if (height === 0) setHeight("auto")
    else setHeight(0)
  }

  return (
    <div className={styles.accordion}>
      <button
        aria-expanded={height !== 0}
        aria-controls='panel'
        className={styles.button}
        onClick={handleClick}
      >
        {title}
      </button>

      <AnimateHeight
        id='panel'
        duration={500}
        height={height} // see props documentation below
      >
        {children}
      </AnimateHeight>
    </div>
  )
}

export default AccordionItem
