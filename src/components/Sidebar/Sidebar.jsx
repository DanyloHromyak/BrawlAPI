import Menu from "./Menu/Menu";
import styles from "./Sidebar.module.css";
import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";

function Sidebar({ setFilter }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.sidebar}>
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
        size={25}
        color="white"
        rounded
        duration={0.2}
      />
      <Menu isMenuOpen={isOpen} isOpen={isOpen} setOpen={setOpen} setFilter={setFilter} />
    </div>
  );
}
export default Sidebar;
