import Header from "./components/Header/Header";
import Brawlers from "./components/Brawlers/Brawlers";
import Battlelog from "./components/Battlelog/Battlelog";

import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:1000";

function App() {
  const [battlelog, setBattlelog] = useState([]);
  const [filter, setFilter] = useState({
    mode: undefined,
    battleTime: "",
    trophyChange: "",
  });

  useEffect(() => {
    axios.get("/battlelog", {
      params: {
        "battle.mode": filter.mode,
        "battle.trophyChange": filter.trophyChange === "" ? undefined : filter.trophyChange,
      }
    }).then(res => setBattlelog(res.data));
  }, [filter]);

  return (
    <>
      <Header setFilter={setFilter} />
      <main>
        <Battlelog battlelog={battlelog} filter={filter}></Battlelog>
        <Brawlers></Brawlers>
      </main>
    </>
  );
}

export default App;
