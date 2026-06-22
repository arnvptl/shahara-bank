import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Stethoscope, Calculator, HardHat, Scale, Building2, CheckCircle2 } from 'lucide-react';

const professions = [
  {
    id: 'doctors',
    name: 'Doctors',
    icon: Stethoscope,
    purposes: [
      'Purchase of premises / plot',
      'Construction of hospital building',
      'Purchase of hospital equipments',
      'Lift installation',
      'Vehicle purchase',
      'Hospital furniture'
    ],
    documents: [
      'Last 3 years financial papers',
      'Agreement to purchase',
      'Sanction Plan & Construction permission',
      'Construction estimate',
      'In case of construction on plot, all relevant ownership documents',
      'Registration Certificate',
      'Degree Certificate',
      'Project report',
      'Quotations for equipments and machinery'
    ]
  },
  {
    id: 'architects',
    name: 'Architects',
    icon: Building2,
    purposes: [
      'Purchase / construction of office premises',
      'Purchase of machinery and equipments'
    ],
    documents: [
      'Last 3 years financial papers',
      'Agreement to purchase',
      'Sanction Plan & Construction permission',
      'Construction estimate',
      'In case of construction on plot, all relevant ownership documents',
      'Registration Certificate',
      'Degree Certificate',
      'Project report',
      'Quotations for equipments and machinery'
    ]
  },
  {
    id: 'ca',
    name: 'Chartered Accountants',
    icon: Calculator,
    purposes: [
      'Purchase / construction of office premises',
      'Purchase of machinery and equipments'
    ],
    documents: [
      'Last 3 years financial papers',
      'Agreement to purchase',
      'Sanction Plan & Construction permission',
      'Construction estimate',
      'In case of construction on plot, all relevant ownership documents',
      'Registration Certificate',
      'Degree Certificate',
      'Project report',
      'Quotations for equipments and machinery'
    ]
  },
  {
    id: 'engineers',
    name: 'Engineers',
    icon: HardHat,
    purposes: [
      'Purchase / construction of office premises',
      'Purchase of machinery and equipments'
    ],
    documents: [
      'Last 3 years financial papers',
      'Agreement to purchase',
      'Sanction Plan & Construction permission',
      'Construction estimate',
      'In case of construction on plot, all relevant ownership documents',
      'Registration Certificate',
      'Degree Certificate',
      'Project report',
      'Quotations for equipments and machinery'
    ]
  },
  {
    id: 'advocates',
    name: 'Advocates',
    icon: Scale,
    purposes: [
      'Purchase / construction of office premises'
    ],
    documents: [
      'Last 3 years financial papers',
      'Agreement to purchase',
      'Sanction Plan & Construction permission',
      'Construction estimate',
      'In case of construction on plot, all relevant ownership documents',
      'Registration Certificate',
      'Degree Certificate',
      'Project report',
      'Quotations for equipments and machinery'
    ]
  }
];

const ProfessionalLoans = () => {
  const [activeTab, setActiveTab] = useState(professions[0].id);
  const activeProfession = professions.find(p => p.id === activeTab);

  return (
    <div className="section">
      <Helmet>
        <title>Professional Loans | Ahmednagar Shahar Sahakari Bank</title>
        <meta name="description" content="Customized financial solutions designed specifically to support the practice and growth of professionals like Doctors, Engineers, Architects, CAs, and Advocates." />
      </Helmet>

      <div className="container">
        
        {/* Header Section */}
        <div className="section-header">
          <h2>Professional Loans</h2>
          <p className="text-muted">
            Customized financial solutions designed specifically to support the practice and growth of professionals like Doctors, Engineers, Architects, CAs, and Advocates.
          </p>
        </div>

        {/* Interest Rate Highlights */}
        <div className="card" style={{ marginBottom: 'var(--spacing-xl)', padding: 0, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <div style={{ padding: 'var(--spacing-lg)', textAlign: 'center', backgroundColor: 'var(--color-bg)', borderRight: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Base Interest Rate</p>
              <p style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'var(--color-text)', margin: 0 }}>12.50<span style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>%</span></p>
            </div>
            <div style={{ padding: 'var(--spacing-lg)', textAlign: 'center', backgroundColor: 'var(--color-bg-alt)', borderRight: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Rebate</p>
              <p style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'var(--color-primary)', margin: 0 }}>3.00<span style={{ fontSize: '1.25rem', opacity: 0.8 }}>%</span></p>
            </div>
            <div style={{ padding: 'var(--spacing-lg)', textAlign: 'center', backgroundColor: '#ecfdf5', borderBottom: '1px solid var(--color-border)' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-success)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Effective Rate</p>
              <p style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'var(--color-success)', margin: 0 }}>9.50<span style={{ fontSize: '1.25rem', opacity: 0.8 }}>%</span></p>
            </div>
          </div>
        </div>

        {/* Dynamic Profession Tabs */}
        <div>
          {/* Tabs Navigation */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-lg)', justifyContent: 'center' }}>
            {professions.map((prof) => {
              const Icon = prof.icon;
              const isActive = activeTab === prof.id;
              return (
                <button
                  key={prof.id}
                  onClick={() => setActiveTab(prof.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0.75rem 1.5rem',
                    borderRadius: 'var(--radius-md)',
                    border: isActive ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                    backgroundColor: isActive ? 'var(--color-primary)' : 'var(--color-bg-card)',
                    color: isActive ? 'var(--color-text-inverse)' : 'var(--color-text)',
                    fontWeight: isActive ? '600' : '400',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontSize: '1rem'
                  }}
                >
                  <Icon style={{ width: '1.25rem', height: '1.25rem', marginRight: '0.5rem', opacity: isActive ? 1 : 0.6 }} />
                  {prof.name}
                </button>
              );
            })}
          </div>

          {/* Active Content Area */}
          <div className="card">
            {activeProfession && (
              <div>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.75rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', color: 'var(--color-primary-dark)' }}>
                  <activeProfession.icon style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.75rem', color: 'var(--color-primary)' }} />
                  Loan Criteria for {activeProfession.name}
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-2xl)' }}>
                  
                  {/* Purposes Section */}
                  <div>
                    <h3 style={{ fontSize: '1.125rem', color: 'var(--color-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                      <span style={{ width: '1.5rem', height: '1.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem', fontSize: '0.75rem' }}>1</span>
                      Eligible Purposes
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {activeProfession.purposes.map((purpose, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                          <CheckCircle2 style={{ width: '1.25rem', height: '1.25rem', color: 'var(--color-accent)', marginRight: '0.5rem', flexShrink: 0, marginTop: '0.125rem' }} />
                          <span style={{ color: 'var(--color-text)' }}>{purpose}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Documents Section */}
                  <div>
                    <h3 style={{ fontSize: '1.125rem', color: 'var(--color-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                      <span style={{ width: '1.5rem', height: '1.5rem', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.5rem', fontSize: '0.75rem' }}>2</span>
                      Required Documents
                    </h3>
                    <ul style={{ listStyle: 'none', padding: '1.25rem', margin: 0, backgroundColor: 'var(--color-bg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                      {activeProfession.documents.map((doc, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', color: 'var(--color-text)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                          <div style={{ width: '0.375rem', height: '0.375rem', borderRadius: '50%', backgroundColor: 'var(--color-primary)', marginTop: '0.375rem', marginRight: '0.5rem', flexShrink: 0 }}></div>
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfessionalLoans;
