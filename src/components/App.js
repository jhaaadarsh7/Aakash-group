import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AboutPage from "./about/AboutPage";
import ContactPage from "./contact/ContactPage";
import IndustriesPage from "./industries/IndustriesPage";
import CareerPage from "./career/CareerPage";
import Angan from "./industries/Angan";
import AakashLabs from "./industries/AakashLabs";
import AakashCapital from "./industries/AakashCapital";
import SiddharthaInsurance from "./industries/SiddharthaInsurance";
import RelianceInsurance from "./industries/RelianceInsurance";
import AakashAi from "./industries/AakashAi";
import MahalaxmiComplex from "./industries/MahaLaxmi";
import HospitalityHotel from "./industries/HospitalityHotel";
import CareerDetailPage from "./career/CareerDetailPage";
import DataAnalyst from "./career/DataAnalyst";
import GraphicDesigner from "./career/GraphicDesigner";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact-us" element={<ContactPage />} />
        <Route exact path="/industries" element={<IndustriesPage />} />
        <Route exact path="/industries/angan" element={<Angan />} />
        <Route exact path="/industries/aakash-labs" element={<AakashLabs />} />
        <Route exact path="/industries/aakash-ai" element={<AakashAi />} />
        <Route
          exact
          path="/industries/aakash-capital"
          element={<AakashCapital />}
        />
        <Route
          exact
          path="/industries/siddhartha-insurance"
          element={<SiddharthaInsurance />}
        />
        <Route
          exact
          path="/industries/reliance-life-insurance"
          element={<RelianceInsurance />}
        />
        <Route
          exact
          path="/industries/mahalaxmi-complex"
          element={<MahalaxmiComplex />}
        />
        <Route
          exact
          path="/industries/hospitality-hotel"
          element={<HospitalityHotel />}
        />
        <Route exact path="/careers" element={<CareerPage />} />
        <Route exact path="/careers/data-analyst" element={<DataAnalyst />} />
        <Route
          exact
          path="/careers/graphic-designer"
          element={<GraphicDesigner />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
