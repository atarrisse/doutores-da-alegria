import React from "react";

import * as styles from "./styles.module.scss";

type TAspectRatio = React.HTMLAttributes<HTMLDivElement>;

interface IProps {
  ratio: number;
}

const AspectRatio: React.FC<IProps & TAspectRatio> = ({
  children,
  ratio,
  ...others
}) => {
  const paddingTop = ratio === 0 ? 100 : 100 / ratio;

  return (
    <div className={styles.wrapper} {...others}>
      <div className={styles.ratio} style={{ paddingTop: `${paddingTop}%` }}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default AspectRatio;
