import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const setFontSize = (size) => {
    document.documentElement.style.fontSize = size;
  };

  return (
    <header className="site-header">
      {/* Row 1: Utility Bar */}
      <div className="utility-bar">
        <div className="container utility-bar-inner">
          <div className="font-controls">
            <span className="font-label">Text:</span>
            <button className="font-btn" onClick={() => setFontSize('13px')} aria-label="Decrease font size" title="Decrease font size">A−</button>
            <button className="font-btn font-btn-default" onClick={() => setFontSize('16px')} aria-label="Default font size" title="Default font size">A</button>
            <button className="font-btn" onClick={() => setFontSize('19px')} aria-label="Increase font size" title="Increase font size">A+</button>
          </div>
          <div className="utility-right">
            <Phone size={13} />
            <span>Toll Free: <strong>1800 233 1190</strong></span>
          </div>
        </div>
      </div>

      {/* Row 2: Main Nav */}
      <div className="header">
        <div className="container header-container">
          <Link to="/" className="logo-section" onClick={closeMenu}>
            <img src="/images/ShahaR bank1.png" alt="Shahar Bank Logo" width="40" height="40" style={{ filter: 'brightness(0) invert(1)' }} />
            <div className="logo-text">
              Shahar<span>Bank</span>
            </div>
          </Link>

          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav className={`nav-container ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-menu">
              <li><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>

              <li className={`dropdown ${activeDropdown === 'about' ? 'active-dropdown' : ''}`}>
                <span className="nav-link dropdown-toggle" onClick={() => toggleDropdown('about')}>
                  About Us <ChevronDown size={16} />
                </span>
                <ul className="dropdown-menu">
                  <li><Link to="/about" onClick={closeMenu}>History & Vision</Link></li>
                  <li><Link to="/organization/founder-directors" onClick={closeMenu}>Founder Directors</Link></li>
                  <li><Link to="/organization/board-of-directors" onClick={closeMenu}>Board Of Directors</Link></li>
                  <li><Link to="/organization/structure" onClick={closeMenu}>Organization Structure</Link></li>
                  <li><Link to="/organization/branches" onClick={closeMenu}>Our Branches</Link></li>
                  <li><Link to="/organization/ghaisas-sir" onClick={closeMenu}>Prof. Mukund Ghaisas</Link></li>
                </ul>
              </li>

              <li className={`dropdown ${activeDropdown === 'loans' ? 'active-dropdown' : ''}`}>
                <span className="nav-link dropdown-toggle" onClick={() => toggleDropdown('loans')}>
                  Loans <ChevronDown size={16} />
                </span>
                <ul className="dropdown-menu">
                  <li><Link to="/loans/home" onClick={closeMenu}>Home Loans</Link></li>
                  <li><Link to="/loans/vehicle" onClick={closeMenu}>Vehicle Loans</Link></li>
                  <li><Link to="/loans/gold" onClick={closeMenu}>Gold Pledge Loans</Link></li>
                  <li><Link to="/loans/education" onClick={closeMenu}>Education Loans</Link></li>
                  <li><Link to="/loans/professional" onClick={closeMenu}>Professional Loans</Link></li>
                  <li><Link to="/loans/cash-credit" onClick={closeMenu}>Cash Credit</Link></li>
                  <li><Link to="/loans/project-finance" onClick={closeMenu}>Project Finance</Link></li>
                  <li><Link to="/loans/industrial-finance" onClick={closeMenu}>Industrial Finance</Link></li>
                  <li><Link to="/loans/specific-purpose" onClick={closeMenu}>Specific Purpose</Link></li>
                </ul>
              </li>

              <li className={`dropdown ${activeDropdown === 'services' ? 'active-dropdown' : ''}`}>
                <span className="nav-link dropdown-toggle" onClick={() => toggleDropdown('services')}>
                  Services <ChevronDown size={16} />
                </span>
                <ul className="dropdown-menu">
                  <li><Link to="/services" onClick={closeMenu}>Services Overview</Link></li>
                  <li><Link to="/services/deposit-rates" onClick={closeMenu}>Deposit Rates</Link></li>
                  <li><Link to="/services/neft-rtgs" onClick={closeMenu}>NEFT & RTGS</Link></li>
                  <li><Link to="/services/charges" onClick={closeMenu}>Service Charges</Link></li>
                </ul>
              </li>

              <li className={`dropdown ${activeDropdown === 'info' ? 'active-dropdown' : ''}`}>
                <span className="nav-link dropdown-toggle" onClick={() => toggleDropdown('info')}>
                  Information <ChevronDown size={16} />
                </span>
                <ul className="dropdown-menu">
                  <li><Link to="/bank-position" onClick={closeMenu}>Bank Position</Link></li>
                  <li><Link to="/annual-reports" onClick={closeMenu}>Annual Reports</Link></li>
                  <li><Link to="/achievements" onClick={closeMenu}>Achievements & Awards</Link></li>
                  <li><Link to="/news" onClick={closeMenu}>News & Events</Link></li>
                  <li><Link to="/tender" onClick={closeMenu}>Tenders</Link></li>
                  <li><Link to="/auction" onClick={closeMenu}>Auctions</Link></li>
                  <li><Link to="/info/kyc" onClick={closeMenu}>KYC Guidelines</Link></li>
                  <li><a href="/Deaf_Web_30112024.pdf" target="_blank" rel="noreferrer" onClick={closeMenu}>DEAF Accounts</a></li>
                </ul>
              </li>

              <li><Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link></li>
              <li><Link to="/feedback" className="nav-link" onClick={closeMenu}>Grievance</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
