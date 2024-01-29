import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./containers/HomePage/HomePage";
import AboutUsPage from "./containers/AboutUsPage/AboutUsPage";
import ServicesPage from "./containers/ServicesPage/ServicesPage";
import CareerPage from "./containers/CareerPage/CareerPage";
import ContactUsPage from "./containers/ContactUsPage/ContactUsPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className=" min-h-screen" style={{ fontFamily: " sans-serif" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />{" "}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
