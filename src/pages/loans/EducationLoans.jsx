import { Helmet } from 'react-helmet-async';
import { GraduationCap, Percent, FileCheck } from 'lucide-react';

const EducationLoans = () => {
  return (
    <div className="section page-fade-in">
      <Helmet>
        <title>Education Loans | Ahmednagar Shahar Sahakari Bank</title>
        <meta name="description" content="Education Loans to help you achieve your academic goals." />
      </Helmet>

      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Education Loans</h1>
          <p className="section-subtitle">Investing in your future with affordable education financing</p>
        </div>

        <div className="grid">
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
              <FileCheck size={24} />
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>List of Documents Required</h2>
            </div>
            <ul style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Bank Statement / Pass Book of last 6 months</li>
              <li>KYC documents</li>
              <li>Copy of admission letter of the Institute along with fees schedule</li>
              <li>Mark sheets / passing certificates of S.S.C., H.S.C, Degree courses</li>
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
                    <th>Interest Rate</th>
                    <th>Rebate</th>
                    <th>Applicable Rate After Rebate</th>
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
    </div>
  );
};

export default EducationLoans;
