import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Gridbody from "./Components/Gridbody";
import Scrollbutton from "./Components/Scrollbutton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Scrollbutton />
        <Gridbody />
      </header>
      <body className="App-body">
        <Gridbody />
        <img src={logo} className="App-logo" alt="logo" />
      </body>
    </div>
  );
}

export default App;
