import styles from "./BattlelogHeader.module.css";
import moment from "moment";

function BattlelogHeader({ data }) {

  console.log(data)

  function battleTime(time) {
    return moment(time).fromNow();
  }

  return (
    <div className={styles.battlelogInfo}>
      <p className={styles.battlelogType}>RANKED</p>
      <span className={styles.battlelogDate}>
        {battleTime()}
      </span>
    </div>
  );
}
export default BattlelogHeader;
