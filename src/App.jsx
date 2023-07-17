import Header from "./components/Header/Header";
import Brawlers from "./components/Brawlers/Brawlers";
import Battlelog from "./components/Battlelog/Battlelog";

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
