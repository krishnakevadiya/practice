import "./App.css";
import { Navbar } from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ padding: "1rem" }}>
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;
