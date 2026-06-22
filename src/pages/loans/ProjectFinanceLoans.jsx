import { Helmet } from 'react-helmet-async';
import { Building, Percent, FileCheck } from 'lucide-react';

const ProjectFinanceLoans = () => {
  return (
    <div className="section page-fade-in">
      <Helmet>
        <title>Builders & Developers Project Finance | Ahmednagar Shahar Sahakari Bank</title>
        <meta name="description" content="Project Finance for Builders and Developers. Apply at Ahmednagar Shahar Sahakari Bank." />
      </Helmet>

      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Builders & Developers Project Finance</h1>
          <p className="section-subtitle">Financial solutions for real estate and construction projects</p>
        </div>

        <div className="grid">
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
              <FileCheck size={24} />
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>List of Documents Required</h2>
            </div>
            <ul style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Last 3 years financial papers</li>
              <li>Project report</li>
              <li>Sanction Plan & Construction permission</li>
              <li>Construction estimate</li>
              <li>Receipt of charges paid to local authorities</li>
              <li>All relevant ownership documents of plot</li>
              <li>Registration Certificate</li>
              <li>Degree Certificate</li>
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

export default ProjectFinanceLoans;
