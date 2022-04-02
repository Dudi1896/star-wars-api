import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Gridbody from "./Components/Gridbody";
import Scrollbutton from "./Components/Scrollbutton";
import CardList from "./Components/CardList";
import { CarCrash } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Scrollbutton />
      </header>
      <body className="App-body">
        {/* <CardList /> */}
        <Gridbody />
        <img src={logo} className="App-logo" alt="logo" />
      </body>
      <footer></footer>
    </div>
  );
}

export default App;
