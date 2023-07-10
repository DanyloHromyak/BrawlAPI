import Header from "./components/Header/Header";
import Brawlers from "./components/Brawlers/Brawlers";
import Battlelog from "./components/Battlelog/Battlelog";
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:1000/";

function App() {
  return (
    <>
      <Header />
      <main>
        <Battlelog></Battlelog>
        <Brawlers></Brawlers>
      </main>
    </>
  );
}

export default App;
