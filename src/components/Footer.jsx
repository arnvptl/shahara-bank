import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Building2, ShieldCheck, Landmark } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-col about-col">
            <div className="footer-logo-area">
              <img src="/images/ShahaR bank1.png" alt="Shahar Bank Logo" width="40" height="40" style={{ filter: 'brightness(0) invert(1)', marginBottom: '1rem' }} />
              <h3>Ahmednagar Shahar Sahakari Bank Ltd.</h3>
            </div>
            <p style={{ opacity: 0.8, marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              Recipient of the <strong>Vasantdada Patil Best Bank Award 2009–10</strong> and <strong>Banking Frontiers Best Core Banking Award 2008–09</strong>. Serving Ahmednagar and Pune since 1971.
            </p>
            <div className="contact-list">
              <div className="contact-item">
                <MapPin size={16} color="var(--color-accent)" />
                <span>Navipeth, Ahmednagar, Maharashtra</span>
              </div>
              <div className="contact-item">
                <Phone size={16} color="var(--color-accent)" />
                <span>1800 233 1190 (Toll Free)</span>
              </div>
              <div className="contact-item">
                <Mail size={16} color="var(--color-accent)" />
                <span>support@shaharbank.com</span>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h3>About Us</h3>
            <ul>
              <li><Link to="/about">History & Vision</Link></li>
              <li><Link to="/organization/founder-directors">Founder Directors</Link></li>
              <li><Link to="/organization/board-of-directors">Board Of Directors</Link></li>
              <li><Link to="/organization/structure">Organization Structure</Link></li>
              <li><Link to="/organization/branches">Our Branches</Link></li>
              <li><Link to="/organization/ghaisas-sir">Prof. Mukund Ghaisas</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Loans & Advances</h3>
            <ul>
              <li><Link to="/loans/home">Home Loans</Link></li>
              <li><Link to="/loans/vehicle">Vehicle Loans</Link></li>
              <li><Link to="/loans/gold">Gold Pledge Loans</Link></li>
              <li><Link to="/loans/education">Education Loans</Link></li>
              <li><Link to="/loans/professional">Professional Loans</Link></li>
              <li><Link to="/loans/cash-credit">Cash Credit</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Services & Info</h3>
            <ul>
              <li><Link to="/services">24x7 ATM Services</Link></li>
              <li><Link to="/services/neft-rtgs">NEFT / RTGS</Link></li>
              <li><Link to="/services/deposit-rates">Deposit Rates</Link></li>
              <li><Link to="/services/charges">Service Charges</Link></li>
              <li><Link to="/info/kyc">KYC Guidelines</Link></li>
              <li><Link to="/bank-position">Bank Position</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Notices & Support</h3>
            <ul>
              <li><Link to="/news">News & Events</Link></li>
              <li><Link to="/annual-reports">Annual Reports</Link></li>
              <li><Link to="/tender">Tenders</Link></li>
              <li><Link to="/auction">Auctions</Link></li>
              <li><a href="/Deaf_Web_30112024.pdf" target="_blank" rel="noreferrer">DEAF Accounts</a></li>
              <li><Link to="/feedback">Grievance Redressal</Link></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="footer-regulatory">
        <div className="container">
          <div className="regulatory-content">
            <div className="reg-item">
              <img src="/images/DICGC.png" alt="DICGC Insured" width="40" height="40" style={{ objectFit: 'contain', flexShrink: 0 }} />
              <div>
                <strong>DICGC Insured – ₹5 Lakh Cover</strong>
                <span>Your deposits are insured up to ₹5,00,000 by Deposit Insurance &amp; Credit Guarantee Corporation</span>
              </div>
            </div>
            <div className="reg-item">
              <Landmark size={24} color="var(--color-accent)" />
              <div>
                <strong>RBI Regulated &amp; Licensed</strong>
                <span>Regulated by Reserve Bank of India | Registered under Maharashtra Co-operative Societies Act, 1960</span>
              </div>
            </div>
            <div className="reg-item">
              <ShieldCheck size={24} color="var(--color-accent)" />
              <div>
                <strong>RBI Ombudsman</strong>
                <a href="https://cms.rbi.org.in/" target="_blank" rel="noreferrer">File a Complaint</a>
              </div>
            </div>
            <div className="reg-item">
              <Building2 size={24} color="var(--color-accent)" />
              <div>
                <strong>Strict KYC Compliance</strong>
                <Link to="/info/kyc">View Guidelines</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p>&copy; {new Date().getFullYear()} Ahmednagar Shahar Sahakari Bank Ltd. All Rights Reserved.</p>
          <div className="footer-legal-links">
            <Link to="/">Terms & Conditions</Link> | <Link to="/">Privacy Policy</Link> | <Link to="/">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
