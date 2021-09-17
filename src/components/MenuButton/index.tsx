import React, { useContext } from "react";
import { Context } from "@/utils/context";
import * as styles from "./styles.module.scss";

type TMenuButton = React.HTMLAttributes<HTMLDivElement>;

type Props = {
  className?: string;
}

const MenuButton: React.FC<Props & TMenuButton> = ({ className }) => {
  const { isMenuOpen, setIsMenuOpen } = useContext(Context);

  const handleClick = () => {
    setIsMenuOpen && setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div
      className={[styles.container, className].join(" ")}
      data-open={isMenuOpen}
      onClick={handleClick}
      role="button"
    >
      <div className={styles.bar1}></div>
      <div className={styles.bar2}></div>
      <div className={styles.bar3}></div>
      <div className={styles.bar4}></div>
    </div>
  )
}

export default MenuButton