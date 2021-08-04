import * as React from "react"
import { useEffect } from "react"
import ReactMarkdown from "react-markdown"
import Content from "../Content"
import * as styles from "./styles.module.scss"

type Props = {
  content: any[];
  handleClick: () => void;
}

const Extra: React.FC<Props> = ({ content, handleClick }) => {
  if (!content) return;

  return (
    <div className={styles.overlay}>
      <div className={styles.extra}>
        <button
          className={styles.button}
          aria-label="Fechar curiosidade"
          onClick={handleClick}>
          X
        </button>
        <Content content={content} />
      </div>
    </div>
  )
}

export default Extra
