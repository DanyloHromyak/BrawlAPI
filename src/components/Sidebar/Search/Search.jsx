import { useState } from "react";
import styles from "./Search.module.css";

function Search() {
  const [tag, setTag] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log(tag);
      }}>
        <input
          className={styles.input}
          type="text"
          maxLength={15}
          minLength={2}
          spellCheck={false}
          style={{ textTransform: "uppercase" }}
          placeholder="Player tag"
          pattern="#?[O0289PYLQGRJCUVopylqgrjcuv]{3,15}"
          onChange={e => setTag(e.currentTarget.value)}
        />
    </form>
  );
}

export default Search;
