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
        <div>
          <Search />
        </div>
      </div>
    </header>
  );
}

export default Header;
