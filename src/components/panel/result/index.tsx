import Progress from "../../progressBar";
import styles from './index.module.scss'

interface ResultProps {
  value: number
  maxValue: number
  title: string
  time: string
}
const Result = (props : ResultProps) => {
  const { value, maxValue, title, time } = props;

  return (
    <div className={styles['result']}>
      <div className={styles['result-head']}>
        <p>{title}</p>
        <div className={styles['icon']} data-tooltip-id={"progress-tooltips"} data-tooltip-content={"Content"} data-tooltip-class-name={"small"}>
          <img src={"/info.svg"} alt={"info-icon"}/>
        </div>
      </div>
      <div className={styles['result-body']}>
        <p>{time}</p>
        <Progress value={value} maxValue={maxValue}/>
      </div>
    </div>
  );
};

export default Result;