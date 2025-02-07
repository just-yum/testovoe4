import styles from './index.module.scss'
import {useState} from "react";
import Result from "./result";
import Group from "./group";
import Tooltip from "../tooltip";


const dates = [
  {id: 1, title: 'День'},
  {id: 2, title: 'Неделя'},
  {id: 3, title: 'Месяц'},
  {id: 4, title: 'Все время'}
]

const results = [
  {id: 1, title: 'Среднее время ответа', time: '1ч 20м', value: 70, maxValue: 100},
  {id: 2, title: 'Время реакции', time: '0ч 15м', value: 10, maxValue: 100},
]

const groups = [
  {id: 1, title: 'Обращений', value: 120},
  {id: 2, title: 'В работе', value: 4},
  {id: 3, title: 'Отложено', value: 32},
  {id: 4, title: 'Завершено', value: 82},
]
const Panel = () => {
  const [activeDate, setActiveDate] = useState<number>(dates[dates.length - 1].id);

  return (
    <div className={styles['panel']}>
      <div className={styles['panel-head']}>
        <p className={styles['title']}>SLA панель</p>
        <div className={styles['dates']}>
          {dates.map(date => (
            <div
              key={date.id}
              className={`${styles['date-item']} ${date.id === activeDate ? styles['active'] : ''}`}
              onClick={() => setActiveDate(date.id)}
            >
              <p>{date.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles['panel-body']}>
        <div className={styles['groups']}>
          {groups.map(group => (
            <Group key={group.id} title={group.title} value={group.value} />
          ))}
        </div>
        <div className={styles['results']}>
          {results.map(result => (
            <Result key={result.id} value={result.value} maxValue={result.maxValue} title={result.title} time={result.time} />
          ))}
          <Tooltip id={"progress-tooltips"} />
        </div>
      </div>
    </div>
  );
};

export default Panel;

