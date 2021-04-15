import "./App.css";
import Board from "./components/Board/Board";
import Header from "./components/Header/Header";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import Result from "./components/Result/Result";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div>
      <Header />
      <div className="content-container">
        <div>
          <Board />
          <Slider />
        </div>
        <div>
          <ControlPanel />
          <Result />
        </div>
      </div>
    </div>
  );
}

export default App;
