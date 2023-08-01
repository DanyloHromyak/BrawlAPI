import styles from "./BattlelogResult.module.css";

function BattlelogResult({ battlelog }) {

  return (
    <div className={styles.battlelogResultWrapper}>
      {/* eventDesc div TAG */}
      <div className={styles.brawlEventDesc}>
        <img
          src={`../../../images/${battlelog.event.mode}.webp`}
          alt="event_image"
          className={styles.brawlEventImage}
        />
        <div className={styles.brawlEventWrapper}>
          <p className={styles.brawlEventName}>{battlelog.event.mode}</p>
          <p className={styles.brawlEventMap}>{battlelog.event.map}</p>
        </div>
      </div>

      {/* h3 TAG */}
      {battlelog.battle.rank ? (
        <h3 className={styles.battlelogResult}>
          RANK: {battlelog.battle.rank}
        </h3>
      ) : (
        <h3 className={styles.battlelogResult}>{battlelog.battle.result}</h3>
      )}

      {/* trophy div TAG */}
      <div className={styles.trophyResult}>
        <p className={styles.trophyChange}>
          {battlelog.battle.trophyChange ? battlelog.battle.trophyChange : 0}
        </p>
        <img
          src="../../../images/Trophy.webp"
          alt="trophy_image"
          className={styles.battlelogTrophyImage}
        />
      </div>
    </div>
  );
}
export default BattlelogResult;
