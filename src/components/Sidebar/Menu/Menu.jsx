import styles from "./Menu.module.css";
import { clsx } from "clsx";
import { Twirl as Hamburger } from "hamburger-react";

function Menu({ isMenuOpen, isOpen, setOpen, setFilter }) {
  function handleTrophyChange(e) {
    const trophies = e.target.value;
    setFilter(prev => ({
      ...prev,
      trophyChange: trophies,
    }));
  }

  function handleModeChange(mode) {
    setFilter(prev => ({
      ...prev,
      mode: mode,
    }));
  }

  function handleDateChange(e) {
    const date = e.target.value;
    console.log(date)
    setFilter(prev => ({
      ...prev,
      battleTime: date,
    }));
  }

  return (
    <menu className={clsx(styles.menu, isMenuOpen && styles.menuOpened)}>
      <div className={styles.hamburgerWrapper}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={25}
          color="white"
          rounded
          duration={0.2}
        />
      </div>
      <ul className={styles.mode}>
        <h3 className={styles.modeTitle}>Modes</h3>
        <li className={styles.modeItem}>
          <input
            className={styles.modeCheckbox}
            type="radio"
            id="All"
            name="mode"
            onChange={() => handleModeChange(undefined)}
          />
          <label htmlFor="All">All</label>
        </li>
        <li className={styles.modeItem}>
          <input
            className={styles.modeCheckbox}
            type="radio"
            id="gemGrab"
            name="mode"
            onChange={() => handleModeChange("gemGrab")}
          />
          <label htmlFor="gemGrab">gemGrab</label>
        </li>
        <li className={styles.modeItem}>
          <input
            className={styles.modeCheckbox}
            type="radio"
            id="soloShowdown"
            name="mode"
            onChange={() => handleModeChange("soloShowdown")}
          />
          <label htmlFor="soloShowdown">soloShowdown</label>
        </li>
        <li className={styles.modeItem}>
          <input
            className={styles.modeCheckbox}
            type="radio"
            id="duoShowdown"
            name="mode"
            onChange={() => handleModeChange("duoShowdown")}
          />
          <label htmlFor="duoShowdown">duoShowdown</label>
        </li>
        <li className={styles.modeItem}>
          <input
            className={styles.modeCheckbox}
            type="radio"
            id="brawlBall"
            name="mode"
            onChange={() => handleModeChange("brawlBall")}
          />
          <label htmlFor="brawlBall">brawlBall</label>
        </li>
      </ul>
      <div className={styles.date}>
        <h3 className={styles.dateTitle}>Date</h3>
        <input
          type="date"
          id="date"
          className={styles.modeDate}
          onChange={handleDateChange}
        />
      </div>
      <div className={styles.trophies}>
        <h3 className={styles.trophiesTitle}>Trophy Change</h3>
        <p>Please write an amount of trophy change from -10 to 10</p>
        <input
          type="number"
          min={-10}
          max={10}
          className={styles.modeTrophies}
          onChange={handleTrophyChange}
        />
      </div>
    </menu>
  );
}
export default Menu;
