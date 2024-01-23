import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./containers/HomePage/HomePage";

function App() {
  return (
    <div className=" min-h-screen" style={{ fontFamily: " sans-serif" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
