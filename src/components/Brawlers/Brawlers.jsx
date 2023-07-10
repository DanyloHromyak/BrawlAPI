import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Brawlers.module.css";

axios.defaults.baseURL = "http://localhost:1000";

function Brawlers() {
  const [brawlers, setBrawlers] = useState([]);

  function getBrawlers() {
    axios.get("/brawlers").then(res => setBrawlers(res.data));
  }

  useEffect(() => {
    getBrawlers();
  }, []);

  return (
    <section className={styles.brawlers}>
      <h2 className={styles.brawlersTitle}>Brawlers</h2>
      <ul className={styles.brawlersList}>
        {brawlers.map(brawler => (
          <li key={brawler.id} className={styles.brawlerItem}>
            <div className={styles.imageWrapper}>
              <img
                src={brawler.image}
                alt={brawler.name}
                className={styles.brawlerImage}
              />
            </div>
            <div className={styles.brawlerInfoWrapper}>
              <h3 className={styles.brawlerName}>{brawler.name}</h3>
              <div className={styles.brawlerStarPowers}>
                <h3 className={styles.brawlerStarPower}>Star Powers:</h3>
                {brawler.starPowers.map(starPower => (
                  <p className={styles.brawlerStarPowerName} key={starPower.id}>
                    {starPower.name}
                  </p>
                ))}
              </div>
              <div className={styles.brawlersGadgets}>
              <h3 className={styles.brawlerGadget}>Gadgets:</h3>
                {brawler.gadgets.map(gadget => (
                  <p className={styles.brawlerGadgetName} key={gadget.id}>
                    {gadget.name}
                  </p>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Brawlers;
