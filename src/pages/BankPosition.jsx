import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Helmet } from 'react-helmet-async';

const combinedData = [
  { year: '2020-21', Capital: 1428.88, Networth: 6033.52, Advances: 37637.00, Deposits: 63611.07 },
  { year: '2021-22', Capital: 1456.90, Networth: 3680.56, Advances: 35917.00, Deposits: 57195.01 },
  { year: '2022-23', Capital: 1528.60, Networth: 113.36,  Advances: 26988.36, Deposits: 47312.63 },
  { year: '2023-24', Capital: 1624.77, Networth: 929.23,  Advances: 21011.93, Deposits: 44385.35 },
  { year: '2025-26', Capital: 1998.74, Networth: 1886.60, Advances: 28097.92, Deposits: 45031.29 },
];

/* Chart card style — no hover lift, no translateY */
const chartCardStyle = {
  background: 'var(--color-bg-card)',
  borderRadius: 'var(--radius-xl)',
  boxShadow: 'var(--shadow-md)',
  border: '1px solid rgba(0,0,0,0.045)',
  padding: 'var(--spacing-xl)',
  display: 'flex',
  flexDirection: 'column',
};

const renderChart = (title, dataKey, color) => (
  <div style={chartCardStyle}>
    <h2 style={{ fontSize: '1.1rem', color: 'var(--color-primary-dark)', marginBottom: '1rem', textAlign: 'center', fontWeight: 600 }}>
      {title}
    </h2>
    <div style={{ height: '280px', width: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={combinedData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.15} vertical={false} />
          <XAxis
            dataKey="year"
            tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }}
            tickLine={false}
            axisLine={{ stroke: 'var(--color-border)' }}
          />
          <YAxis
            tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            width={55}
            tickFormatter={v => v >= 1000 ? `${(v / 1000).toFixed(0)}K` : v}
          />
          <Tooltip
            cursor={{ fill: 'rgba(27,58,92,0.05)' }}
            contentStyle={{
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-md)',
              fontSize: '0.85rem',
            }}
            formatter={(value) => [`₹ ${value.toLocaleString('en-IN', { maximumFractionDigits: 2 })} L`, title.split(' (')[0]]}
          />
          <Bar dataKey={dataKey} fill={color} radius={[5, 5, 0, 0]} maxBarSize={52} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const BankPosition = () => {
  return (
    <div className="section">
      <Helmet>
        <title>Bank Position | Ahmednagar Shahar Sahakari Bank</title>
        <meta name="description" content="A comprehensive look at our financial growth and stability. All figures represented in Lakhs." />
      </Helmet>

      <div className="container">
        <div className="section-header">
          <h2>Previous Years Asset Position</h2>
          <p className="text-muted">
            A comprehensive look at our financial growth and stability. All figures are represented in <strong>₹ Lakhs</strong>.
          </p>
        </div>

        {/* 2×2 grid — always two charts per row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 'var(--spacing-xl)',
          marginBottom: 'var(--spacing-2xl)',
        }}>
          {renderChart('Deposits (in Lakhs)',  'Deposits',  '#1B3A5C')}
          {renderChart('Advances (in Lakhs)',  'Advances',  '#3B82F6')}
          {renderChart('Capital (in Lakhs)',   'Capital',   '#8B5CF6')}
          {renderChart('Networth (in Lakhs)',  'Networth',  '#D4872A')}
        </div>

        {/* Data Table */}
        <div style={{
          background: 'var(--color-bg-card)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid rgba(0,0,0,0.045)',
          padding: 0,
          overflow: 'hidden',
        }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', minWidth: '560px' }}>
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #1B3A5C 0%, #234e7a 100%)', color: '#fff' }}>
                  {['Year', 'Deposits', 'Advances', 'Capital', 'Networth'].map(h => (
                    <th key={h} style={{ padding: '0.9rem 1.25rem', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.03em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {combinedData.map((row, index) => (
                  <tr
                    key={index}
                    style={{
                      borderBottom: index < combinedData.length - 1 ? '1px solid var(--color-border)' : 'none',
                      background: index % 2 === 0 ? '#fff' : 'var(--color-bg-alt)',
                    }}
                  >
                    <td style={{ padding: '0.85rem 1.25rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                      {row.year}
                      {index === combinedData.length - 1 && (
                        <span style={{ marginLeft: '8px', fontSize: '0.62rem', background: '#D4872A', color: '#fff',
                          padding: '1px 7px', borderRadius: '10px', fontWeight: 700, letterSpacing: '0.04em', verticalAlign: 'middle' }}>
                          LATEST
                        </span>
                      )}
                    </td>
                    <td style={{ padding: '0.85rem 1.25rem', color: '#1B3A5C', fontWeight: 500 }}>{row.Deposits.toLocaleString()}</td>
                    <td style={{ padding: '0.85rem 1.25rem', color: '#3B82F6', fontWeight: 500 }}>{row.Advances.toLocaleString()}</td>
                    <td style={{ padding: '0.85rem 1.25rem', color: '#8B5CF6', fontWeight: 500 }}>{row.Capital.toLocaleString()}</td>
                    <td style={{ padding: '0.85rem 1.25rem', color: '#D4872A', fontWeight: 500 }}>{row.Networth.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankPosition;
