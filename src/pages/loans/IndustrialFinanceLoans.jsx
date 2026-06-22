import { Helmet } from 'react-helmet-async';
import { Factory, Percent, FileCheck } from 'lucide-react';

const IndustrialFinanceLoans = () => {
  return (
    <div className="section page-fade-in">
      <Helmet>
        <title>Industrial Finance | Ahmednagar Shahar Sahakari Bank</title>
        <meta name="description" content="Industrial Finance for MIDC Shed Construction, Machineries Purchase, and Working Capital." />
      </Helmet>

      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Industrial Finance</h1>
          <p className="section-subtitle">Industrial Finance for M.I.D.C Shed Construction & Business Needs</p>
        </div>

        <div className="card" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
            <Factory size={24} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Types of Industrial Finance</h2>
          </div>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Industrial Project Finance</li>
            <li>Shed Construction</li>
            <li>Machineries Purchase</li>
            <li>Working Capital</li>
            <li>Working Capital Term Loan</li>
            <li>Bill Discounting Facility</li>
            <li>Letter of Credit</li>
            <li>LC Discounting</li>
          </ul>
        </div>

        <div className="grid">
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
              <FileCheck size={24} />
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>List of Documents Required</h2>
            </div>
            <ul style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Project report</li>
              <li>Machinery quotations</li>
              <li>MIDC plot allotment letter</li>
              <li>Construction permission</li>
              <li>Sanctioned plan</li>
              <li>Pollution control certificate</li>
              <li>Construction estimate</li>
              <li>Last 3 years financial papers certified by CA</li>
              <li>List of debtors & creditors</li>
              <li>Stock statement</li>
              <li>In case of free hold plot, plot must be Industrial NA.</li>
              <li>SSI registration</li>
              <li>VAT, Excise registration</li>
              <li>PAN card</li>
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

export default IndustrialFinanceLoans;
