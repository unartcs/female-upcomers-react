import "./App.css";
import Pages from "./pages/Pages";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Pages />
    </div>
  );
}

export default App;
