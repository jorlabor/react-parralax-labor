import logo from "./logo.svg";
import "./App.css";
import { ReactAnime } from "./component/react-anime/react-anime";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import "@fontsource/cookie";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ReactAnime />
      <Footer />
    </div>
  );
}

export default App;
