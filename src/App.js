import "./App.css";
import Pages from "./pages/Pages";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Pages />
    </div>
  );
}

export default App;
