import Search from "../Search/Search";
import BrawlStarsIcon from "../BrawlStarsIcon";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <BrawlStarsIcon />
          <h1 className={styles.logoText}>Brawl Stars Tracker</h1>
        </div>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Events
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Brawlers
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <Search />
        </div>
      </div>
    </header>
  );
}

export default Header;
