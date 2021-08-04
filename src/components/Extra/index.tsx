import * as React from "react"
import Content from "../Content"
import * as styles from "./styles.module.scss"
import { image as imageClass } from "../Section/ImageSection/styles.module.scss"

type Props = {
  isActive: boolean;
  content: any[];
  handleClick: () => void;
}

const Extra: React.FC<Props> = ({ isActive, content, handleClick }) => {
  if (!content) return;

  return (
    <div className={styles.overlay}>
      <dialog className={styles.extra} open={isActive}>
        <button
          className={styles.button}
          aria-label="Fechar curiosidade"
          onClick={handleClick}>
          X
        </button>
        <Content content={content} />
      </dialog>
    </div>
  )
}

export default Extra
