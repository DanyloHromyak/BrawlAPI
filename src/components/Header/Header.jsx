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
        <nav className={styles.navbar}>
          <a className={styles.navLink} href="#battlelog">Battlelog</a>
          <a className={styles.navLink} href="#brawlers">Brawlers</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
