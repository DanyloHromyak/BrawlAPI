import styles from './Battlelog.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = "http://localhost:1000";

function Battlelog() {
  const [battlelog, setBattlelog] = useState([]);

  function getBattlelog() {
    axios.get('/battlelog').then(res => setBattlelog(res.data));
  }

  useEffect(() => {
    getBattlelog();
  }, []);

  return (
    <section className={styles.battlelog}>
      <h2 className={styles.battlelogTitle}>Battlelog</h2>
      <ul className={styles.battlelogList}>
        <li className={styles.battlelogItem}>
          <div className={styles.battlelogInfo}>
            <p className={styles.battlelogType}>{battlelog.map(battleL => {
              battleL.battle.type
            })}</p>
            <p className={styles.battlelogDate}>{battlelog.battleTime}</p>
          </div>
        </li>
      </ul>
    </section>
  )
}
export default Battlelog