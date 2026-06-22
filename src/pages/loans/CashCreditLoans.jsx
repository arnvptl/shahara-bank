import { Helmet } from 'react-helmet-async';
import { Briefcase, Percent, FileText } from 'lucide-react';

const CashCreditLoans = () => {
  return (
    <div className="section page-fade-in">
      <Helmet>
        <title>Hypothecation Cash Credit | Ahmednagar Shahar Sahakari Bank</title>
        <meta name="description" content="Hypothecation Cash Credit and Working Capital Term Loan for Trade and Commerce. Apply at Ahmednagar Shahar Sahakari Bank." />
      </Helmet>

      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Hypothecation Cash Credit</h1>
          <p className="section-subtitle">Loans for working capital and business expansion</p>
        </div>

        <div className="card" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
            <Briefcase size={24} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Purpose & Eligibility</h2>
          </div>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Cash Credit Hypothesis and Working Capital Term Loan</li>
            <li>Trade and Commerce - All merchants, including gold dealers</li>
            <li>Mainly for net stock, industrial finance, purchase space for business</li>
          </ul>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
            <Percent size={24} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Interest Rates</h2>
          </div>
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Interest Rate</th>
                  <th>Rebate</th>
                  <th>Applicable Interest Rate After Rebate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12.50%</td>
                  <td>3.00%</td>
                  <td style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>9.50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashCreditLoans;
