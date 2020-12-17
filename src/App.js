import "./App.css";
import CarRoot from "./container/CarRoot";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CarRoot />
      </div>
    </BrowserRouter>
  );
}

export default App;
