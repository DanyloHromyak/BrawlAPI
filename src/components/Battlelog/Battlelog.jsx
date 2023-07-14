import styles from "./Battlelog.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

import BattlelogHeader from "./Header/BattlelogHeader";
import BattlelogResult from "./Result/BattlelogResult";
import BattlelogPlayer from "./Players/BattlelogShowdown";

axios.defaults.baseURL = "http://localhost:1000";

function Battlelog() {
  const [battlelog, setBattlelog] = useState([]);

  function getBattlelog() {
    axios.get("/battlelog").then(res => setBattlelog(res.data));
  }

  useEffect(() => {
    getBattlelog();
  }, []);

  return (
    <section className={styles.battlelog}>
      <h2 className={styles.battlelogTitle}>Battlelog</h2>
      <ul className={styles.battlelogList}>
        {battlelog.map(battlelog => (
          <li key={battlelog.id} className={styles.battlelogItem}>
            <BattlelogHeader battlelog={battlelog} />
            <BattlelogResult battlelog={battlelog} />
            <BattlelogPlayer battlelog={battlelog} />
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Battlelog;
