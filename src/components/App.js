import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AboutPage from "./about/AboutPage";
import ContactPage from "./contact/ContactPage";
import IndustriesPage from "./industries/IndustriesPage";
import CareerPage from "./career/CareerPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact-us" element={<ContactPage />} />
        <Route exact path="/industries" element={<IndustriesPage />} />
        <Route exact path="/careers" element={<CareerPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
