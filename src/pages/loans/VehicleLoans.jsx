import { Helmet } from 'react-helmet-async';
import { ShieldCheck, CalendarClock, Percent } from 'lucide-react';

const VehicleLoans = () => {
  return (
    <div className="section">
      <Helmet>
        <title>Vehicle Loans | Ahmednagar Shahar Sahakari Bank – From 9.00% p.a.</title>
        <meta name="description" content="Apply for a Vehicle Loan at Shahar Bank, Ahmednagar. Personal-use vehicles at 9.00% p.a. and commercial/heavy vehicles at 9.50% p.a. Two-wheelers, four-wheelers, and trucks covered." />
        <link rel="canonical" href="https://new.shaharbank.com/loans/vehicle" />
      </Helmet>

      <div className="container">
        <div className="section-header">
          <h2>Vehicle Loans</h2>
          <p className="text-muted">Finance your dream vehicle with our easy and quick loan options.</p>
        </div>

        <div className="card" style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <h3 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>List of Documents Required</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-lg)' }}>
            <div>
              <h4 style={{ marginBottom: '0.5rem' }}>Personal Use</h4>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-text-muted)' }}>
                <li>Two Wheelers</li>
                <li>Four Wheelers</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '0.5rem' }}>Commercial Use</h4>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-text-muted)' }}>
                <li>Three Wheelers</li>
                <li>Four Wheelers</li>
                <li>Heavy Vehicles (Trucks, Tankers, Earthmovers, etc.)</li>
              </ul>
            </div>
          </div>
          
          <div style={{ marginTop: 'var(--spacing-lg)', padding: 'var(--spacing-md)', backgroundColor: 'var(--color-bg-alt)', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>Essential Papers:</h4>
            <ol style={{ paddingLeft: '1.5rem', color: 'var(--color-text-muted)' }}>
              <li>Last 3 years financial papers</li>
              <li>Quotation of vehicle from authorized dealer</li>
              <li>In case of commercial vehicles: driving license, experience certificate, all relevant documents, and permission from transport authorities.</li>
            </ol>
          </div>
        </div>

        <div className="section-header">
          <h2>Interest Rates</h2>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', marginBottom: 'var(--spacing-xl)' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-primary-dark)', color: 'var(--color-text-inverse)' }}>
                <th style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>Vehicle Type</th>
                <th style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>Interest Rate</th>
                <th style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>Rebate</th>
                <th style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>Applicable Interest Rate After Rebate</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: 'var(--color-bg-card)' }}>
                <td style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>Personal Uses (4-Wheelers / 2-Wheelers)</td>
                <td style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>12.00%</td>
                <td style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>3.00%</td>
                <td style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)', fontWeight: 'bold' }}>9.00%</td>
              </tr>
              <tr style={{ backgroundColor: 'var(--color-bg)' }}>
                <td style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>Heavy Vehicles (Truck, Tankers, etc.)</td>
                <td style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>12.50%</td>
                <td style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>3.00%</td>
                <td style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)', fontWeight: 'bold' }}>9.50%</td>
              </tr>
              <tr style={{ backgroundColor: 'var(--color-bg-card)' }}>
                <td style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>Traveling Vehicles (3-Wheelers / 4-Wheelers)</td>
                <td style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>12.50%</td>
                <td style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)' }}>3.00%</td>
                <td style={{ padding: 'var(--spacing-md)', border: '1px solid var(--color-border)', fontWeight: 'bold' }}>9.50%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VehicleLoans;
