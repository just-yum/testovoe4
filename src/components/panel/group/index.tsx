import styles from "./index.module.scss";

interface GroupProps {
  title: string
  value: number
}
const Group = ({ title, value } : GroupProps) => {
  return (
    <div className={styles['group']}>
      <p className={styles['title']}>{title}</p>
      <p className={styles['value']}>{value}</p>
    </div>
  );
};

export default Group;