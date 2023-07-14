import styles from "./BattlelogHeader.module.css";
import moment from "moment";

function BattlelogHeader({ battlelog }) {

  function battleTime(time) {
    return moment(time).fromNow();
  }

  return (
    <div className={styles.battlelogInfo}>
      <p className={styles.battlelogType}>{battlelog.battle.type}</p>
      <span className={styles.battlelogDate}>
        {battleTime(battlelog.battleTime)}
      </span>
    </div>
  );
}
export default BattlelogHeader;
