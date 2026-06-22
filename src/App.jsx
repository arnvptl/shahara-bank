import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import Services from './pages/Services';
import About from './pages/About';
import VehicleLoans from './pages/loans/VehicleLoans';
import HomeLoans from './pages/loans/HomeLoans';
import BoardOfDirectors from './pages/organization/BoardOfDirectors';
import OrgStructure from './pages/organization/OrgStructure';
import FounderDirectors from './pages/organization/FounderDirectors';
import GhaisasSir from './pages/organization/GhaisasSir';
import OurBranches from './pages/organization/OurBranches';
import KYC from './pages/info/KYC';
import Reports from './pages/info/Reports';
import BankPosition from './pages/BankPosition';
import AnnualReports from './pages/AnnualReports';
import Achievements from './pages/Achievements';
import News from './pages/News';
import Tender from './pages/Tender';
import Auction from './pages/Auction';
import CashCreditLoans from './pages/loans/CashCreditLoans';
import ProjectFinanceLoans from './pages/loans/ProjectFinanceLoans';
import IndustrialFinanceLoans from './pages/loans/IndustrialFinanceLoans';
import ProfessionalLoans from './pages/loans/ProfessionalLoans';
import SpecificPurposeLoans from './pages/loans/SpecificPurposeLoans';
import EducationLoans from './pages/loans/EducationLoans';
import GoldLoans from './pages/loans/GoldLoans';
import NeftRtgs from './pages/services/NeftRtgs';
import ServiceCharges from './pages/services/ServiceCharges';
import DepositsRates from './pages/services/DepositsRates';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/organization/founder-directors" element={<FounderDirectors />} />
            <Route path="/organization/ghaisas-sir" element={<GhaisasSir />} />
            <Route path="/organization/board-of-directors" element={<BoardOfDirectors />} />
            <Route path="/organization/structure" element={<OrgStructure />} />
            <Route path="/organization/branches" element={<OurBranches />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/neft-rtgs" element={<NeftRtgs />} />
            <Route path="/services/charges" element={<ServiceCharges />} />
            <Route path="/services/deposit-rates" element={<DepositsRates />} />
            <Route path="/loans/vehicle" element={<VehicleLoans />} />
            <Route path="/loans/home" element={<HomeLoans />} />
            <Route path="/loans/cash-credit" element={<CashCreditLoans />} />
            <Route path="/loans/project-finance" element={<ProjectFinanceLoans />} />
            <Route path="/loans/industrial-finance" element={<IndustrialFinanceLoans />} />
            <Route path="/loans/professional" element={<ProfessionalLoans />} />
            <Route path="/loans/specific-purpose" element={<SpecificPurposeLoans />} />
            <Route path="/loans/education" element={<EducationLoans />} />
            <Route path="/loans/gold" element={<GoldLoans />} />
            <Route path="/info/kyc" element={<KYC />} />
            <Route path="/info/reports" element={<Reports />} />
            <Route path="/bank-position" element={<BankPosition />} />
            <Route path="/annual-reports" element={<AnnualReports />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/news" element={<News />} />
            <Route path="/tender" element={<Tender />} />
            <Route path="/auction" element={<Auction />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
