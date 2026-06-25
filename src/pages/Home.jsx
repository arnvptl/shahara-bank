import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, Landmark, PiggyBank, Users, AlertCircle,
  Phone, Mail, CreditCard, Building2, Smartphone,
  MapPin, Percent, FileText, ChevronRight, Send
} from 'lucide-react';
import LoanCalculator from '../components/LoanCalculator';
import './Home.css';

const bannerImages = [
  '/images/bs1.png', '/images/bs2.png', '/images/bs3.png', '/images/bs4.png',
  '/images/bs5.png', '/images/bs6.png', '/images/bs7.png', '/images/bs8.png'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel-container">
      {bannerImages.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Ahmednagar Shahar Sahakari Bank – Slide ${idx + 1}`}
          className={`carousel-slide`}
          style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            objectFit: 'contain',
            opacity: idx === currentIndex ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
            zIndex: idx === currentIndex ? 2 : 1
          }}
        />
      ))}
      <div style={{ position: 'absolute', bottom: '15px', left: 0, width: '100%', display: 'flex', justifyContent: 'center', gap: '8px', zIndex: 10 }}>
        {bannerImages.map((_, idx) => (
          <button
            key={idx}
            style={{
              width: '10px', height: '10px', borderRadius: '50%',
              border: '1px solid #fff', padding: 0, cursor: 'pointer',
              backgroundColor: idx === currentIndex ? 'var(--color-accent)' : 'rgba(255,255,255,0.5)',
              transform: idx === currentIndex ? 'scale(1.2)' : 'scale(1)'
            }}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const notices = [
  '01 Jun 2026 — Revised interest rates on Term Deposits w.e.f. 06.08.2024. Savings: 2.70% | FD (181–365 days): 7.25% | FD (366 days & above): 7.10%.',
  '15 May 2026 — NEFT/RTGS services unavailable on 29 May 2026 (Bank Holiday – Maharashtra Day alternate). Plan transactions accordingly.',
  '10 Apr 2026 — Annual General Meeting of Members: 15 May 2026 at Sarvaarth, Navipeth, Ahmednagar.',
  '01 Mar 2026 — KYC updation drive: Members with pending KYC are requested to visit their home branch before 31 March 2026.',
  '10 Feb 2026 — Auction Notice: Properties under SARFAESI Act 2002. Details at Head Office, Navipeth, Ahmednagar.',
];

const Home = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>Shahar Bank | Cooperative Banking in Ahmednagar Since 1971</title>
        <meta name="description" content="Ahmednagar Shahar Sahakari Bank Ltd. – RBI-regulated cooperative bank since 1971. DICGC insured deposits up to ₹5 lakh. Home loans, vehicle loans, fixed deposits, NEFT/RTGS. Winner of Vasantdada Patil Best Bank Award 2009-10." />
        <link rel="canonical" href="https://new.shaharbank.com/" />
      </Helmet>

      {/* MARQUEE TICKER */}
      <div className="marquee-strip">
        <span className="marquee-label">NOTICES</span>
        <div className="marquee-track-wrap">
          <div className="marquee-track">
            {[...notices, ...notices].map((notice, i) => (
              <span key={i} className="marquee-item">
                <span className="marquee-dot" aria-hidden="true">◆</span> {notice}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* HERO CAROUSEL */}
      <section className="hero-section bg-white">
        <div className="container" style={{ paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-lg)' }}>
          <Carousel />
        </div>
      </section>

      {/* QUICK LINKS BAR */}
      <section className="quick-links-bar-section">
        <div className="container">
          <div className="quick-links-bar">
            <Link to="/services/deposit-rates" className="ql-item">
              <Percent className="ql-icon" size={22} />
              <span>Deposit Rates</span>
            </Link>
            <Link to="/loans/home" className="ql-item">
              <Landmark className="ql-icon" size={22} />
              <span>Apply for Loan</span>
            </Link>
            <Link to="/services/neft-rtgs" className="ql-item">
              <Send className="ql-icon" size={22} />
              <span>NEFT / RTGS</span>
            </Link>
            <Link to="/organization/branches" className="ql-item">
              <MapPin className="ql-icon" size={22} />
              <span>Our Branches</span>
            </Link>
            <Link to="/feedback" className="ql-item">
              <AlertCircle className="ql-icon" size={22} />
              <span>Grievance</span>
            </Link>
            <Link to="/annual-reports" className="ql-item">
              <FileText className="ql-icon" size={22} />
              <span>Annual Reports</span>
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="section bg-alt explore-products-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Products</h2>
          </div>
          <div className="product-category-grid">
            <Link to="/services/deposit-rates" className="product-category-card">
              <div className="icon-wrapper"><PiggyBank size={32} /></div>
              <h3>Savings & Deposits</h3>
              <p>Savings accounts, fixed deposits, and recurring deposit schemes.</p>
              <span className="explore-link">View Rates <ChevronRight size={16} /></span>
            </Link>
            <Link to="/loans/home" className="product-category-card">
              <div className="icon-wrapper"><Landmark size={32} /></div>
              <h3>Loans & Advances</h3>
              <p>Home, vehicle, gold pledge, education, and professional loans.</p>
              <span className="explore-link">View Loans <ChevronRight size={16} /></span>
            </Link>
            <Link to="/services/neft-rtgs" className="product-category-card">
              <div className="icon-wrapper"><Smartphone size={32} /></div>
              <h3>Digital Services</h3>
              <p>NEFT/RTGS, UPI, 24×7 ATMs via NPCI network, missed call banking.</p>
              <span className="explore-link">View Services <ChevronRight size={16} /></span>
            </Link>
            <Link to="/services" className="product-category-card">
              <div className="icon-wrapper"><ShieldCheck size={32} /></div>
              <h3>Insurance & DICGC</h3>
              <p>Deposits insured up to ₹5 lakh by DICGC. Life insurance tie-up available.</p>
              <span className="explore-link">Learn More <ChevronRight size={16} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* INTEREST RATES TABLE */}
      <section className="section bg-white rates-table-section">
        <div className="container">
          <div className="section-header">
            <h2>Interest Rates</h2>
            <p className="text-muted">Rates effective from 06.08.2024. Subject to revision without prior notice.</p>
          </div>
          <div className="rates-tables-grid">
            {/* Deposit Rates */}
            <div>
              <h3 className="rates-sub-head">Deposit Rates</h3>
              <div style={{ overflowX: 'auto' }}>
                <table className="bank-table">
                  <thead>
                    <tr>
                      <th>Deposit Type / Term</th>
                      <th>General</th>
                      <th>Senior Citizen<br />(60–70 yrs)</th>
                      <th>Super Senior<br />(70+ yrs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="highlight-row">
                      <td><strong>Savings Account</strong></td>
                      <td><strong>2.70%</strong></td>
                      <td>2.70%</td>
                      <td>2.70%</td>
                    </tr>
                    <tr>
                      <td>Fixed Deposit: 15 – 100 days</td>
                      <td>4.75%</td>
                      <td>5.25%</td>
                      <td>5.75%</td>
                    </tr>
                    <tr>
                      <td>Fixed Deposit: 101 – 180 days</td>
                      <td>5.75%</td>
                      <td>6.25%</td>
                      <td>6.75%</td>
                    </tr>
                    <tr>
                      <td>Fixed Deposit: 181 – 365 days</td>
                      <td><strong>7.25%</strong></td>
                      <td><strong>7.75%</strong></td>
                      <td><strong>7.75%</strong></td>
                    </tr>
                    <tr>
                      <td>Fixed Deposit: 366 days & above</td>
                      <td>7.10%</td>
                      <td>7.60%</td>
                      <td>7.60%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                ★ Senior citizen additional: +0.50% | Super senior (15–100 days): +1.00%, others +0.50%
              </p>
              <Link to="/services/deposit-rates" className="btn btn-outline rates-cta-btn">Full Deposit Rate Schedule →</Link>
            </div>

            {/* Loan Rates */}
            <div>
              <h3 className="rates-sub-head">Loan Interest Rates</h3>
              <div style={{ overflowX: 'auto' }}>
                <table className="bank-table">
                  <thead>
                    <tr>
                      <th>Loan Type</th>
                      <th>Rate (p.a.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Home Loan – up to ₹30 lakhs</td>
                      <td><strong>9.50%</strong></td>
                    </tr>
                    <tr>
                      <td>Home Loan – above ₹30 lakhs</td>
                      <td><strong>10.00%</strong></td>
                    </tr>
                    <tr>
                      <td>Vehicle Loan – Personal Use</td>
                      <td><strong>9.00%</strong></td>
                    </tr>
                    <tr>
                      <td>Vehicle Loan – Heavy Commercial</td>
                      <td><strong>9.50%</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
                ★ Rates shown are after applicable rebate. Contact branch for current applicable rates.
              </p>
              <Link to="/loans/home" className="btn btn-outline rates-cta-btn">Apply for a Loan →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* NOTICE BOARD */}
      <section className="section bg-alt notice-board-section">
        <div className="container">
          <div className="notice-board-grid">
            {/* News & Circulars */}
            <div className="notice-card card">
              <div className="notice-header">
                <h3><FileText size={20} /> News & Circulars</h3>
                <Link to="/news" className="view-all">View All</Link>
              </div>
              <ul className="notice-list">
                <li>
                  <span className="notice-date">01 Jun 2026</span>
                  <p>Revised interest rates on Term Deposits w.e.f. 06.08.2024. Savings: 2.70% | FD (181–365 days): 7.25%.</p>
                </li>
                <li>
                  <span className="notice-date">15 May 2026</span>
                  <p>NEFT/RTGS unavailable on 29 May 2026 (Bank Holiday – Maharashtra Day alternate). Plan transactions accordingly.</p>
                </li>
                <li>
                  <span className="notice-date">10 Apr 2026</span>
                  <p>Annual General Meeting of Members: 15 May 2026 at Sarvaarth, Navipeth, Ahmednagar.</p>
                </li>
                <li>
                  <span className="notice-date">01 Mar 2026</span>
                  <p>KYC updation drive: Members with pending KYC are requested to visit their home branch before 31 March 2026.</p>
                </li>
              </ul>
            </div>

            {/* Notices & Downloads */}
            <div className="notice-card card" style={{ background: 'var(--color-primary-dark)', color: 'white' }}>
              <div className="notice-header" style={{ borderBottomColor: 'rgba(255,255,255,0.1)' }}>
                <h3 style={{ color: 'var(--color-accent)' }}><Building2 size={20} /> Notices & Downloads</h3>
              </div>
              <ul className="notice-list light-text">
                <li>
                  <span className="notice-date">10 Feb 2026</span>
                  <p>Auction Notice: Properties under SARFAESI Act 2002.</p>
                  <Link to="/auction" style={{ color: 'var(--color-accent)', fontSize: '0.85rem' }}>View Auction Details →</Link>
                </li>
                <li>
                  <Link to="/annual-reports">
                    <strong>Annual Reports</strong>
                    <p>Financial statements & balance sheets (29th to 54th Report).</p>
                  </Link>
                </li>
                <li>
                  <Link to="/tender">
                    <strong>Tenders & Empanelment</strong>
                    <p>Active tenders and vendor empanelment notices.</p>
                  </Link>
                </li>
                <li>
                  <a href="/Deaf_Web_30112024.pdf" target="_blank" rel="noreferrer">
                    <strong>DEAF Accounts Notice</strong>
                    <p>Unclaimed deposits transferred to RBI per RBI guidelines.</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EMI & DEPOSIT CALCULATOR */}
      <section className="section bg-light-blue calculator-section">
        <div className="container">
          <div className="section-header">
            <h2>EMI & Deposit Calculator</h2>
            <p className="text-muted">Calculate your loan EMI or estimate returns on your fixed deposit.</p>
          </div>
          <div className="calculator-wrapper">
            <LoanCalculator />
          </div>
        </div>
      </section>

      {/* GRIEVANCE REDRESSAL */}
      <section className="section bg-white complaints-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Grievance Redressal</h2>
            <p className="text-muted">3-level escalation matrix as per RBI guidelines for cooperative banks.</p>
          </div>

          <div className="complaints-grid">
            <div className="complaint-card">
              <div className="complaint-level-badge">Level 1</div>
              <h3>Customer Care</h3>
              <p className="complaint-detail"><Phone size={18} className="complaint-icon" /> Toll-free: 1800 233 1190</p>
              <p className="complaint-detail"><AlertCircle size={18} className="complaint-icon" /> Website Complaint Portal</p>
            </div>
            <div className="complaint-card">
              <div className="complaint-level-badge">Level 2</div>
              <h3>Head Office Operations</h3>
              <p className="complaint-detail">Ahmednagar Shahar Sahakari Bank Ltd.</p>
              <p className="complaint-detail"><Phone size={18} className="complaint-icon" /> 0241 2346217</p>
              <p className="complaint-detail"><Mail size={18} className="complaint-icon" /> support@shaharbank.com</p>
            </div>
            <div className="complaint-card">
              <div className="complaint-level-badge">Level 3</div>
              <h3>Chief Executive Officer</h3>
              <p className="complaint-detail">Ahmednagar Shahar Sahakari Bank Ltd., Navipeth</p>
              <p className="complaint-detail"><Phone size={18} className="complaint-icon" /> 0241 2323321</p>
              <p className="complaint-detail"><Mail size={18} className="complaint-icon" /> ceo@shaharbank.com</p>
            </div>
          </div>

          <div className="special-support-grid">
            <div className="support-box card">
              <div className="support-icon-area" style={{ color: 'var(--color-error)' }}>
                <AlertCircle size={32} />
              </div>
              <div className="support-content">
                <h3 style={{ color: 'var(--color-error)' }}>ATM & Digital Fraud — 24×7</h3>
                <ul>
                  <li><strong>Toll-Free:</strong> 1800 233 1190</li>
                  <li><strong>Unauthorised Transaction:</strong> 8275009319</li>
                  <li><strong>Cyber Crime Helpline:</strong> 1930</li>
                </ul>
              </div>
            </div>
            <div className="support-box card">
              <div className="support-icon-area" style={{ color: 'var(--color-primary)' }}>
                <ShieldCheck size={32} />
              </div>
              <div className="support-content">
                <h3 style={{ color: 'var(--color-primary-dark)' }}>RBI Ombudsman Scheme</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  If not satisfied with the bank's response within 30 days, approach the RBI Integrated Ombudsman Scheme.
                </p>
                <a href="https://cms.rbi.org.in/" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.25rem 1rem', fontSize: '0.85rem' }}>File RBI Complaint</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="section bg-alt" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem', textAlign: 'center' }}>
            {[
              { Icon: ShieldCheck, title: 'DICGC Insured', sub: 'Deposits protected up to ₹5,00,000' },
              { Icon: Landmark,    title: 'RBI Regulated', sub: 'Licensed cooperative bank since 1971' },
              { Icon: Users,       title: 'NPCI Connected', sub: '2,37,600+ ATMs across India' },
              { Icon: Building2,   title: 'Vasantdada Patil Award', sub: 'Best Cooperative Bank 2009–10' },
              { Icon: CreditCard,  title: 'Best Core Banking', sub: 'Banking Frontiers Award 2008–09' },
              { Icon: PiggyBank,   title: 'Maharashtra Co-op Act', sub: 'Registered under MCS Act, 1960' },
            ].map(({ Icon, title, sub }, i) => (
              <div key={i} style={{ padding: '1.1rem', borderRadius: 'var(--radius-md)', background: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
                <Icon size={26} style={{ color: 'var(--color-accent)', marginBottom: '0.4rem' }} />
                <p style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--color-primary-dark)', marginBottom: '0.2rem' }}>{title}</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
