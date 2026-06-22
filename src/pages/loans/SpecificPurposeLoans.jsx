import { Helmet } from 'react-helmet-async';
import { Target, Percent, FileCheck } from 'lucide-react';

const SpecificPurposeLoans = () => {
  return (
    <div className="section page-fade-in">
      <Helmet>
        <title>Specific Purpose Loans | Ahmednagar Shahar Sahakari Bank</title>
        <meta name="description" content="Loans for House Repairs, Medical Treatment, Marriage, Tours, and Education." />
      </Helmet>

      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Specific Purpose Loans</h1>
          <p className="section-subtitle">Financial assistance for specific life events and needs</p>
        </div>

        <div className="card" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
            <Target size={24} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Supported Purposes</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
            <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></div>
              House Repairs
            </div>
            <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></div>
              Medical Treatment
            </div>
            <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></div>
              Marriage Ceremony
            </div>
            <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></div>
              For Tours
            </div>
            <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></div>
              Education
            </div>
            <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></div>
              Pay for Old Moneylending
            </div>
            <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></div>
              Government Rokhe
            </div>
            <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></div>
              Two Wheelers
            </div>
            <div className="feature-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary)' }}></div>
              Domestic Appliances Purchase
            </div>
          </div>
        </div>

        <div className="card" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
            <Percent size={24} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Interest Rates</h2>
          </div>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Loan For</th>
                  <th>Interest Rate</th>
                  <th>Rebate</th>
                  <th>Applicable Rate After Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Home Repair Loan, Medical Treatment, For Similar Expenses Loans, Loans For Marriage Expenses, Purchase Of Other Household Items and Loans For Tourism Expenses etc.</td>
                  <td>12.50%</td>
                  <td>3.00%</td>
                  <td style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>9.50%</td>
                </tr>
                <tr>
                  <td>Government Securities Mortgage Loan (On mortgage)</td>
                  <td>12.50%</td>
                  <td>3.00%</td>
                  <td style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>9.50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
            <FileCheck size={24} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>List of Documents Required</h2>
          </div>
          <ul style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Last 3 years financial papers</li>
            <li>Agreement to purchase</li>
            <li>Sanction Plan & Repair permission</li>
            <li>Repair estimate</li>
            <li>All relevant ownership documents regarding plot & premises</li>
            <li>Quotation of appliances</li>
            <li>Birth Certificate</li>
            <li>Marriage invitation card</li>
            <li>Medical certificate and expenses statement</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpecificPurposeLoans;
