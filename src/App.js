import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
      </body>
    </div>
  );
}

export default App;
