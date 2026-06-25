import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CreditCard, Smartphone, Building, Phone, Send, Shield, FileText, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const ifscCodes = [
    { branch: 'Navi Peth', code: 'SVCB0008011' },
    { branch: 'Savedi', code: 'SVCB0008002' },
    { branch: 'Maliwada', code: 'SVCB0008003' },
    { branch: 'Zendigate', code: 'SVCB0008004' },
    { branch: 'Market Yard', code: 'SVCB0008005' },
    { branch: 'Gulmohar Road', code: 'SVCB0008006' },
    { branch: 'M.I.D.C.', code: 'SVCB0008007' },
    { branch: 'Manmad Road', code: 'SVCB0008008' },
    { branch: 'Supa - M.I.D.C.', code: 'SVCB0008009' },
    { branch: 'New APMC', code: 'SVCB0008015' },
    { branch: 'Tarakpur', code: 'SVCB0008016' },
    { branch: 'Rahuri', code: 'SVCB0008019' },
    { branch: 'Sangamner', code: 'SVCB0008020' },
    { branch: 'Pimpri', code: 'SVCB0008013' },
    { branch: 'Narayan Peth', code: 'SVCB0008017' },
    { branch: 'Garkheda', code: 'SVCB0008018' },
    { branch: 'Waluj - Aurangabad', code: 'SVCB0008022' },
    { branch: 'Nashik', code: 'SVCB0008021' }
  ];

  return (
    <div className="section">
      <Helmet>
        <title>Banking Services | Ahmednagar Shahar Sahakari Bank – ATM, NEFT, UPI</title>
        <meta name="description" content="Explore Shahar Bank's services: NPCI-connected ATMs (2,37,600+ network), UPI & e-payments, NEFT/RTGS, missed call balance (7218214848), Any Branch Banking, IFSC codes for all 18 branches." />
        <link rel="canonical" href="https://new.shaharbank.com/services" />
      </Helmet>

      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p className="text-muted">Modern, secure, and convenient banking solutions tailored to your everyday needs.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-3xl)' }}>
          
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-md)' }}>
              <div style={{ backgroundColor: 'var(--color-bg-alt)', padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-md)', marginRight: 'var(--spacing-sm)' }}>
                <CreditCard style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 style={{ margin: 0 }}>24 x 7 ATMs</h3>
            </div>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Shahar Bank is a part of the NPCI network, comprising 900+ India's Public, Co-operative & private Sector Banks and more than 2,37,600 ATMs. Use your Shahar Bank RuPay card for balance enquiry and cash withdrawal anywhere.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-md)' }}>
              <div style={{ backgroundColor: 'var(--color-bg-alt)', padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-md)', marginRight: 'var(--spacing-sm)' }}>
                <Smartphone style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 style={{ margin: 0 }}>UPI & E-Payments</h3>
            </div>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Pay all types of Central and State govt. taxes, Excise, and Service Tax through our bank. Seamlessly integrate with UPI for fast, secure, and instant mobile payments 24/7.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-md)' }}>
              <div style={{ backgroundColor: 'var(--color-bg-alt)', padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-md)', marginRight: 'var(--spacing-sm)' }}>
                <Building style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 style={{ margin: 0 }}>Any Branch Banking</h3>
            </div>
            <p style={{ color: 'var(--color-text-muted)' }}>
              With our Core Banking Solution (CBS), you can deposit, withdraw, and operate your account from any of our branches seamlessly, regardless of your home branch.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-md)' }}>
              <div style={{ backgroundColor: 'var(--color-bg-alt)', padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-md)', marginRight: 'var(--spacing-sm)' }}>
                <Phone style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 style={{ margin: 0 }}>Missed Call Service</h3>
            </div>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Check your account balance instantly and for free! Just give a missed call on <span style={{ fontWeight: 'bold', color: 'var(--color-text)' }}>7218214848</span> from your registered mobile number.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-md)' }}>
              <div style={{ backgroundColor: 'var(--color-bg-alt)', padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-md)', marginRight: 'var(--spacing-sm)' }}>
                <Send style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 style={{ margin: 0 }}>NEFT & RTGS</h3>
            </div>
            <p style={{ color: 'var(--color-text-muted)' }}>
              Transfer funds quickly and securely to any bank account in India. RTGS available for large transactions (above ₹2 Lakhs) and NEFT for any amount.
            </p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-md)' }}>
              <div style={{ backgroundColor: 'var(--color-bg-alt)', padding: 'var(--spacing-sm)', borderRadius: 'var(--radius-md)', marginRight: 'var(--spacing-sm)' }}>
                <Shield style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 style={{ margin: 0 }}>Insurance & Security</h3>
            </div>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: '600', color: 'var(--color-text)' }}>Life Insurance:</span> Tie-up with Birla Sun Life Insurance (IRDA: BSL 9485966).
            </p>
            <p style={{ color: 'var(--color-text-muted)' }}>
              <span style={{ fontWeight: '600', color: 'var(--color-text)' }}>DICGC:</span> Your deposits are insured up to ₹5 lakh by DICGC.
            </p>
          </div>

        </div>

        <div className="section-header">
          <h2>Branch IFSC Codes</h2>
          <p className="text-muted">Use these IFSC codes for online fund transfers (NEFT / RTGS / IMPS) to your Shahar Bank accounts.</p>
        </div>

        <div className="card">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 'var(--spacing-md)' }}>
            {ifscCodes.map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', padding: 'var(--spacing-sm)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-bg)' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: 'var(--color-bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 'var(--spacing-sm)', color: 'var(--color-primary)', fontWeight: 'bold', border: '1px solid var(--color-border)', flexShrink: 0 }}>
                  {index + 1}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{item.branch}</h4>
                  <p style={{ margin: 0, fontWeight: 'bold', color: 'var(--color-text)', letterSpacing: '0.05em' }}>{item.code}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;

