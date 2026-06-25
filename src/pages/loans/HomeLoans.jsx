import { Helmet } from 'react-helmet-async';

const HomeLoans = () => {
  return (
    <div className="section">
      <Helmet>
        <title>Home Loans | Ahmednagar Shahar Sahakari Bank – From 9.50% p.a.</title>
        <meta name="description" content="Apply for a Home Loan at Shahar Bank, Ahmednagar. Loans up to ₹30 lakhs at 9.50% p.a. and above ₹30 lakhs at 10.00% p.a. Competitive rates, flexible tenure, minimal documentation." />
        <link rel="canonical" href="https://new.shaharbank.com/loans/home" />
      </Helmet>

      <div className="container">
        <div className="section-header">
          <h2>Home Loans</h2>
          <p className="text-muted">Turn your dream of owning a home into a reality.</p>
        </div>

        <div className="card" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>List of Documents Required</h3>
          <ol style={{ paddingLeft: '1.5rem', color: 'var(--color-text-muted)' }}>
            <li>Original Title documents of the property</li>
            <li>N.A. Order / Building Permission / Approved Plan</li>
            <li>Latest 7/12 Extract, Property Card, Tax Receipt</li>
            <li>Last 3 years Income Tax Returns / Form 16</li>
            <li>Salary Slip of last 3 months</li>
            <li>Bank Account Statement of last 6 months</li>
            <li>Agreement to Sale</li>
            <li>Estimated Cost of Construction from Architect (if applicable)</li>
          </ol>
        </div>

        <div className="section-header">
          <h2>Interest Rates</h2>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginBottom: 'var(--spacing-xl)' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-primary-dark)', color: 'var(--color-text-inverse)' }}>
                <th style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>Loan Amount</th>
                <th style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>Interest Rate</th>
                <th style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>Rebate</th>
                <th style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>Applicable Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: 'var(--color-bg-card)' }}>
                <td style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>Up to ₹30 Lakhs</td>
                <td style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>10.50%</td>
                <td style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>1.00%</td>
                <td style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)', fontWeight: 'bold' }}>9.50%</td>
              </tr>
              <tr style={{ backgroundColor: 'var(--color-bg)' }}>
                <td style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>Above ₹30 Lakhs</td>
                <td style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>11.00%</td>
                <td style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>1.00%</td>
                <td style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)', fontWeight: 'bold' }}>10.00%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomeLoans;
