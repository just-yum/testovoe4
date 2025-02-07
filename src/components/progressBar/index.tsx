import {HTMLAttributes} from "react";
import {cn, getColor} from "../../lib/utils.ts";
import styles from './index.module.scss'

interface ProgressProps extends HTMLAttributes<HTMLDivElement>{
  value: number
  maxValue: number
}
const Progress = ({ value, maxValue }: ProgressProps) => {
  const cx = cn.bind(styles)

  return (
      <div
        className={cx('bar')}
        data-tooltip-id={"progress-tooltips"}
        data-tooltip-content={`+${value/maxValue * 100}%`}
        data-tooltip-class-name={`${getColor(value, maxValue)} large`}
      >
        <div className={styles.value}
             style={{width: `${value / maxValue * 100}%`, backgroundColor: `var(--${getColor(value, maxValue)}`}}></div>
      </div>
  );
};

export default Progress;