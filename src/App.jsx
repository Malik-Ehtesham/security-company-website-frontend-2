import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./containers/HomePage/HomePage";
import AboutUsPage from "./containers/AboutUsPage/AboutUsPage";
import ServicesPage from "./containers/ServicesPage/ServicesPage";

function App() {
  return (
    <div className=" min-h-screen" style={{ fontFamily: " sans-serif" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />{" "}
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </div>
  );
}

export default App;
