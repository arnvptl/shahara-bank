import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Landmark, PiggyBank, Users, AlertCircle, Phone, Mail, CreditCard, Building2, Smartphone, MapPin, Percent, FileText, ChevronRight } from 'lucide-react';
import LoanCalculator from '../components/LoanCalculator';
import './Home.css';

const bannerImages = [
  '/images/bs1.png',
  '/images/bs2.png',
  '/images/bs3.png',
  '/images/bs4.png',
  '/images/bs5.png',
  '/images/bs6.png',
  '/images/bs7.png',
  '/images/bs8.png'
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
          alt={`Banner ${idx + 1}`}
          className={`carousel-slide ${idx === currentIndex ? 'active' : ''}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            opacity: idx === currentIndex ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
            zIndex: idx === currentIndex ? 2 : 1
          }}
        />
      ))}
      <div className="carousel-indicators" style={{ position: 'absolute', bottom: '15px', left: '0', width: '100%', display: 'flex', justifyContent: 'center', gap: '8px', zIndex: 10 }}>
        {bannerImages.map((_, idx) => (
          <button
            key={idx}
            style={{
              width: '10px', height: '10px', borderRadius: '50%', border: '1px solid #fff', padding: 0, cursor: 'pointer',
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

const Home = () => {
  return (
    <div className="home-page">
      <Helmet>
        <title>Shahar Bank | Cooperative Banking in Ahmednagar Since 1971</title>
        <meta name="description" content="Ahmednagar Shahar Sahakari Bank Ltd. – RBI-regulated cooperative bank since 1971. DICGC insured deposits up to ₹5 lakh. Home loans, vehicle loans, fixed deposits, NEFT/RTGS. Winner of Vasantdada Patil Best Bank Award 2009-10." />
        <link rel="canonical" href="https://new.shaharbank.com/" />
      </Helmet>

      {/* SECTION 1: Hero & Quick Actions */}
      <section className="hero-section bg-white">
        <div className="container" style={{ paddingBottom: '3rem' }}>
          <Carousel />
        </div>
        
        {/* Floating Quick Actions overlapping bottom of Hero */}
        <div className="quick-actions-floating">
           <div className="container">
             <div className="quick-actions-card">
               <Link to="/services" className="qa-item">
                 <Building2 className="qa-icon" />
                 <span>Net Banking</span>
               </Link>
               <Link to="/loans/home" className="qa-item">
                 <Landmark className="qa-icon" />
                 <span>Apply for Loan</span>
               </Link>
               <Link to="/services/deposit-rates" className="qa-item">
                 <Percent className="qa-icon" />
                 <span>Deposit Rates</span>
               </Link>
               <Link to="/services" className="qa-item">
                 <MapPin className="qa-icon" />
                 <span>Find ATM/Branch</span>
               </Link>
               <Link to="/contact" className="qa-item">
                 <Phone className="qa-icon" />
                 <span>Contact Support</span>
               </Link>
             </div>
           </div>
        </div>
      </section>

      {/* SECTION 2: Explore Our Products */}
      <section className="section bg-alt explore-products-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Explore Our Products</h2>
            <p className="text-muted">Tailored financial solutions for your personal and business needs.</p>
          </div>
          
          <div className="product-category-grid">
            <Link to="/services/deposit-rates" className="product-category-card">
              <div className="icon-wrapper"><PiggyBank size={32} /></div>
              <h3>Accounts & Deposits</h3>
              <p>Savings, Current, and high-yield Term Deposits.</p>
              <span className="explore-link">Explore <ChevronRight size={16} /></span>
            </Link>
            
            <Link to="/loans/home" className="product-category-card">
              <div className="icon-wrapper"><Landmark size={32} /></div>
              <h3>Loans & Advances</h3>
              <p>Home, Vehicle, Education, and Professional loans.</p>
              <span className="explore-link">Explore <ChevronRight size={16} /></span>
            </Link>

            <Link to="/services" className="product-category-card">
              <div className="icon-wrapper"><CreditCard size={32} /></div>
              <h3>Cards & Payments</h3>
              <p>Debit cards, UPI, and POS merchant solutions.</p>
              <span className="explore-link">Explore <ChevronRight size={16} /></span>
            </Link>

            <Link to="/services/neft-rtgs" className="product-category-card">
              <div className="icon-wrapper"><Smartphone size={32} /></div>
              <h3>Digital Banking</h3>
              <p>NEFT/RTGS transfers, SMS banking, and ATMs.</p>
              <span className="explore-link">Explore <ChevronRight size={16} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: Trust Identity Strip */}
      <section className="rates-highlight-strip">
        <div className="container">
          <div className="rates-content">
            <div className="rates-text">
              <h3>Secure your future with our high-yield Fixed Deposits</h3>
              <p>Enjoy competitive interest rates and flexible tenures designed to maximize your returns.</p>
            </div>
            <div className="rates-badge">
              <span className="up-to">Up to</span>
              <span className="rate-number">8.50%*</span>
              <span className="rate-suffix">p.a.</span>
            </div>
            <div className="rates-action">
              <Link to="/services/deposit-rates" className="btn btn-primary">View All Rates</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Real Bank Identity Trust Badges */}
      <section className="section bg-white" style={{ paddingTop: '2rem', paddingBottom: '2rem', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
            <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', background: 'var(--color-bg-alt)' }}>
              <ShieldCheck size={28} style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }} />
              <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-primary-dark)', marginBottom: '0.25rem' }}>DICGC Insured</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Deposits protected up to ₹5,00,000</p>
            </div>
            <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', background: 'var(--color-bg-alt)' }}>
              <Landmark size={28} style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }} />
              <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-primary-dark)', marginBottom: '0.25rem' }}>RBI Regulated</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Licensed cooperative bank since 1971</p>
            </div>
            <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', background: 'var(--color-bg-alt)' }}>
              <Users size={28} style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }} />
              <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-primary-dark)', marginBottom: '0.25rem' }}>NPCI Connected</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>2,37,600+ ATMs across India</p>
            </div>
            <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', background: 'var(--color-bg-alt)' }}>
              <Building2 size={28} style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }} />
              <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-primary-dark)', marginBottom: '0.25rem' }}>Vasantdada Patil Award</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Best Cooperative Bank 2009–10</p>
            </div>
            <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', background: 'var(--color-bg-alt)' }}>
              <CreditCard size={28} style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }} />
              <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-primary-dark)', marginBottom: '0.25rem' }}>Best Core Banking</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Banking Frontiers Award 2008–09</p>
            </div>
            <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', background: 'var(--color-bg-alt)' }}>
              <PiggyBank size={28} style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }} />
              <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-primary-dark)', marginBottom: '0.25rem' }}>Maharashtra Co-op Act</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Registered under MCS Act, 1960</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Tools & Calculators */}
      <section className="section bg-light-blue calculator-section">
        <div className="container">
          <div className="section-header">
            <h2>Tools & Calculators</h2>
            <p className="text-muted">Plan your finances smartly before you invest or borrow.</p>
          </div>
          <div className="calculator-wrapper">
             <LoanCalculator />
          </div>
        </div>
      </section>

      {/* SECTION 5: Customer Support & Complaints Hub */}
      <section className="section bg-white complaints-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Grievance Redressal & Support</h2>
            <p className="text-muted">We are committed to resolving your concerns promptly. Follow our 3-level escalation matrix.</p>
          </div>

          <div className="complaints-grid">
            <div className="complaint-card">
              <div className="complaint-level-badge">Level 1</div>
              <h3>Bank Customer Care</h3>
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

          {/* Special Support Block */}
          <div className="special-support-grid">
            <div className="support-box card">
              <div className="support-icon-area text-error">
                <AlertCircle size={32} />
              </div>
              <div className="support-content">
                <h3 className="text-error">ATM & Digital Fraud Reporting (24x7)</h3>
                <ul>
                  <li><strong>Toll-Free:</strong> 1800 233 1190</li>
                  <li><strong>Unauthorized Txn Report:</strong> 8275009319</li>
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
                 <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>If dissatisfied with the bank's response within 30 days, you may approach the RBI.</p>
                 <a href="https://cms.rbi.org.in/" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.25rem 1rem', fontSize: '0.85rem' }}>File RBI Complaint</a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Notice Board & Updates */}
      <section className="section bg-alt notice-board-section">
        <div className="container">
          <div className="notice-board-grid">
            <div className="notice-card card">
              <div className="notice-header">
                <h3><FileText size={20} /> Latest News & Announcements</h3>
                <Link to="/news" className="view-all">View All</Link>
              </div>
              <ul className="notice-list">
                <li>
                  <span className="notice-date">22 Jun 2026</span>
                  <p>Revision in Interest Rates for Domestic Term Deposits effective next month.</p>
                </li>
                <li>
                  <span className="notice-date">15 Jun 2026</span>
                  <p>Important update regarding NEFT/RTGS timings during upcoming holidays.</p>
                </li>
                <li>
                  <span className="notice-date">02 Jun 2026</span>
                  <p>Safe Banking Guidelines: Protect yourself against phishing and cyber fraud.</p>
                </li>
              </ul>
            </div>

            <div className="notice-card card" style={{ background: 'var(--color-primary-dark)', color: 'white' }}>
              <div className="notice-header" style={{ borderBottomColor: 'rgba(255,255,255,0.1)' }}>
                <h3 style={{ color: 'var(--color-accent)' }}><Building2 size={20} /> Corporate Information</h3>
              </div>
              <ul className="notice-list light-text">
                <li>
                  <Link to="/annual-reports">
                    <strong>Annual Reports</strong>
                    <p>Financial performance and balance sheets.</p>
                  </Link>
                </li>
                <li>
                  <Link to="/tender">
                    <strong>Tenders & Empanelment</strong>
                    <p>Current active tenders and vendor notices.</p>
                  </Link>
                </li>
                <li>
                  <a href="/Deaf_Web_30112024.pdf" target="_blank" rel="noreferrer">
                    <strong>DEAF Accounts Notice</strong>
                    <p>List of unclaimed deposits transferred to RBI.</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
