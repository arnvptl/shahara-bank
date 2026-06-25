
import { Helmet } from 'react-helmet-async';
import { PiggyBank, Percent, Calendar } from 'lucide-react';

const DepositsRates = () => {
  return (
    <div className="section page-fade-in">
      <Helmet>
        <title>Deposit Interest Rates | Ahmednagar Shahar Sahakari Bank</title>
        <meta name="description" content="Current savings account and fixed deposit interest rates at Ahmednagar Shahar Sahakari Bank. Rates effective from 06.08.2024. Additional rates for senior and super senior citizens." />
        <link rel="canonical" href="https://new.shaharbank.com/services/deposit-rates" />
      </Helmet>

      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Deposit Interest Rates</h1>
          <p className="text-muted">Rates effective from 06.08.2024. Subject to revision without prior notice.</p>
        </div>

        <div className="card" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
            <PiggyBank size={24} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Savings Account</h2>
          </div>
          <div style={{ padding: '1rem', backgroundColor: 'var(--color-bg-alt)', borderRadius: 'var(--radius-md)' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: '500' }}>
              Interest Rate on Saving Account: <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '1.5rem' }}>2.70%</span>
            </p>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)' }}>
              <Calendar size={24} />
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Term Deposits Rates</h2>
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              Rates Effective From Date: 06-08-2024
            </div>
          </div>

          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Term</th>
                  <th>For General Depositor</th>
                  <th>For Senior Citizen (Age 60 to 70 Years)</th>
                  <th>For Super Senior Citizen (Age Above 70 Years)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>15 To 100 Days</td>
                  <td>4.75%</td>
                  <td>5.25%</td>
                  <td style={{ fontWeight: 'bold' }}>5.75%</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>101 To 180 Days</td>
                  <td>5.75%</td>
                  <td>6.25%</td>
                  <td style={{ fontWeight: 'bold' }}>6.75%</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>181 To 365 Days</td>
                  <td>7.25%</td>
                  <td>7.75%</td>
                  <td style={{ fontWeight: 'bold' }}>7.75%</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>366 Days & Above</td>
                  <td>7.10%</td>
                  <td>7.60%</td>
                  <td style={{ fontWeight: 'bold' }}>7.60%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositsRates;
