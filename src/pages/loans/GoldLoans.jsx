import { Helmet } from 'react-helmet-async';
import { CircleDollarSign, Percent, FileCheck } from 'lucide-react';

const GoldLoans = () => {
  return (
    <div className="section page-fade-in">
      <Helmet>
        <title>Gold Pledge Loans | Ahmednagar Shahar Sahakari Bank</title>
        <meta name="description" content="Get quick access to funds with our Gold Pledge Loans." />
      </Helmet>

      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Gold Pledge Loans</h1>
          <p className="section-subtitle">Unlock the value of your gold with quick and easy financing</p>
        </div>

        <div className="grid">
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
              <FileCheck size={24} />
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>List of Documents Required</h2>
            </div>
            <ul style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>KYC Documents</li>
              <li>Income Documents</li>
            </ul>
          </div>

          <div className="card" style={{ height: 'fit-content' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
              <Percent size={24} />
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Interest Rates</h2>
            </div>
            <div className="table-responsive">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Loan Amount</th>
                    <th>Interest Rate</th>
                    <th>Rebate</th>
                    <th>Applicable Rate After Rebate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Term Loan up to Rs. 2 lacs</td>
                    <td>13.00%</td>
                    <td>4.00%</td>
                    <td style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>9.00%</td>
                  </tr>
                  <tr>
                    <td>Term Loan Above Rs. 2 lacs</td>
                    <td>13.50%</td>
                    <td>4.00%</td>
                    <td style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>9.50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldLoans;
