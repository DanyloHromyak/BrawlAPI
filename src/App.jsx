import { Container } from "@mui/material";
import Header from "./components/Header";

// axios.defaults.baseURL = "https://api.brawlstars.com/v1";

function App() {
  return (
    <Container bgcolor="primary.main">
      <Header />
    </Container>
  );
}

export default App;
