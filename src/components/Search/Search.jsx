import { useState } from "react";
import styles from "./Search.module.css";

function Search() {
  const [stats, setStats] = useState("PLAYER");
  const [tag, setTag] = useState("");

  function handleChange(e) {
    setStats(e.target.value);
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log(tag);
      }}>
      <div>
        <select
          className={styles.select}
          name="stats"
          id="stats"
          onChange={handleChange}
          value={stats}>
          <option value="PLAYER">PLAYER</option>
          <option value="CLUB">CLUB</option>
        </select>
      </div>
      <div>
        <input
          className={styles.input}
          type="text"
          maxLength={15}
          minLength={2}
          spellCheck={false}
          style={{ textTransform: "uppercase" }}
          placeholder={`${stats} TAG`}
          pattern="#?[O0289PYLQGRJCUVopylqgrjcuv]{3,15}"
          onChange={e => setTag(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Search;
