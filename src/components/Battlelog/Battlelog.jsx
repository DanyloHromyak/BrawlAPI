import styles from "./Battlelog.module.css";

import BattlelogHeader from "./Header/BattlelogHeader";
import BattlelogResult from "./Result/BattlelogResult";

function Battlelog({ battlelog }) {
  return (
    <section className={styles.battlelog} id="battlelog">
      <h2 className={styles.battlelogTitle}>Battlelog</h2>
      {
        battlelog.length === 0 ?
        <p className={styles.battlelogEmpty}>No battleloges found</p> :
        <ul className={styles.battlelogList}>
          {battlelog.map((battlelog, index) => (
            <li key={index} className={styles.battlelogItem}>
              <BattlelogHeader battlelog={battlelog} />
              <BattlelogResult battlelog={battlelog} />
            </li>
          ))}
        </ul>
      }
    </section>
  );
}
export default Battlelog;
