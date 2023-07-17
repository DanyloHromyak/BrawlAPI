import styles from "./Menu.module.css";

function Menu() {
  return (
    <menu className={styles.menu}>
      <ul className={styles.mode}>
        <h3 className={styles.modeTitle}>Modes</h3>
        <li className={styles.modeItem}>
          <input className={styles.modeCheckbox} type="checkbox" id="gemGrab" />
          <label htmlFor="gemGrab">gemGrab</label>
        </li>
        <li className={styles.modeItem}>
          <input
            className={styles.modeCheckbox}
            type="checkbox"
            id="soloShowdown"
          />
          <label htmlFor="soloShowdown">soloShowdown</label>
        </li>
        <li className={styles.modeItem}>
          <input
            className={styles.modeCheckbox}
            type="checkbox"
            id="duoShowdown"
          />
          <label htmlFor="duoShowdown">duoShowdown</label>
        </li>
        <li className={styles.modeItem}>
          <input
            className={styles.modeCheckbox}
            type="checkbox"
            id="brawlBall"
          />
          <label htmlFor="brawlBall">brawlBall</label>
        </li>
      </ul>
      <div className={styles.date}>
        <h3 className="modeDateTitle">Date</h3>
        <input type="range" id="date" className={styles.modeDate} />
      </div>
      <div className={styles.trophies}>
        <h3 className="modeTrophiesTitle">Trophies</h3>
        <input type="range" id="trophies" className={styles.modeTrophies} />
      </div>
    </menu>
  );
}
export default Menu;
