import React from "react";
import * as styles from "./styles.module.scss";

const MenuButton = ({ isOpen, onClick: handleClick }) => {

  return (
    <div
      className={styles.container}
      data-open={isOpen}
      onClick={handleClick}
      role="button"
    >
      <div className={styles.bar1}></div>
      <div className={styles.bar2}></div>
      <div className={styles.bar3}></div>
    </div>
  )
}

export default MenuButton