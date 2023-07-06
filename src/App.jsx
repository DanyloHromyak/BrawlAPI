import Header from "./components/Header/Header";
import Events from "./components/Events/Events";
import axios from 'axios';

axios.defaults.baseURL = "https://api.brawlstars.com/v1";

function App() {
  return (
    <>
      <Header />
      <main>
        <Events />
      </main>
    </>
  );
}

export default App;
