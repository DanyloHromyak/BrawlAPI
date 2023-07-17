// import styles from "./Hamburger.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={
      () => setIsOpen(!isOpen) 
    }>
      {
        isOpen ? (
          <FontAwesomeIcon icon={faXmark} color="white" />
        ) : (
          <FontAwesomeIcon icon={faBars} color="white"/>
        )
      }
    </div>
  )
}
export default Hamburger