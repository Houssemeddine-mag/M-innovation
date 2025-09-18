import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Service from "./Pages/service";
import Contact from "./Pages/contact";
import Teaching from "./Pages/teaching";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import "./index.css";
import "./components/TopBar.css";

function App() {
  return (
    <div className="site-bg">
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
