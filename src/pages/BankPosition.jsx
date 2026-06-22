import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Helmet } from 'react-helmet-async';

const BankPosition = () => {
  // Data provided by the user
  const combinedData = [
    {
      year: '2019-20',
      Capital: 1413.52,
      Networth: 5878.20,
      Advances: 41789.53,
      Deposits: 64816.92
    },
    {
      year: '2020-21',
      Capital: 1428.88,
      Networth: 6033.52,
      Advances: 37637.00,
      Deposits: 63611.07
    },
    {
      year: '2021-22',
      Capital: 1456.90,
      Networth: 3680.56,
      Advances: 35917.00,
      Deposits: 57195.01
    },
    {
      year: '2022-23',
      Capital: 1528.60,
      Networth: 113.36,
      Advances: 26988.36,
      Deposits: 47312.63
    },
    {
      year: '2023-24',
      Capital: 1624.77,
      Networth: 929.23,
      Advances: 21011.93,
      Deposits: 44385.35
    }
  ];

  const renderChart = (title, dataKey, color) => (
    <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', marginBottom: '1rem', textAlign: 'center' }}>{title}</h2>
      <div style={{ height: '300px', width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={combinedData}
            margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="year" tick={{fill: 'var(--color-text-muted)', fontSize: 12}} />
            <YAxis tick={{fill: 'var(--color-text-muted)', fontSize: 12}} width={50} />
            <Tooltip 
              cursor={{fill: 'transparent'}}
              contentStyle={{ borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}
            />
            <Bar dataKey={dataKey} fill={color} radius={[4, 4, 0, 0]} maxBarSize={60} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  return (
    <div className="section">
      <Helmet>
        <title>Bank Position | Ahmednagar Shahar Sahakari Bank</title>
        <meta name="description" content="A comprehensive look at our financial growth and stability over the last five years." />
      </Helmet>

      <div className="container">
        <div className="section-header">
          <h2>Previous Years Asset Position</h2>
          <p className="text-muted">
            A comprehensive look at our financial growth and stability over the last five years. All figures are represented in Lakhs.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)', marginBottom: 'var(--spacing-2xl)' }}>
          {renderChart("Deposits (in Lakhs)", "Deposits", "var(--color-primary)")}
          {renderChart("Advances (in Lakhs)", "Advances", "#3B82F6")}
          {renderChart("Capital (in Lakhs)", "Capital", "#8B5CF6")}
          {renderChart("Networth (in Lakhs)", "Networth", "var(--color-accent)")}
        </div>
        
        {/* Tabular Data Representation for accessibility and clarity */}
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', minWidth: '600px' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text-inverse)' }}>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Year</th>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Deposits</th>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Advances</th>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Capital</th>
                  <th style={{ padding: '1rem 1.5rem', fontWeight: '600' }}>Networth</th>
                </tr>
              </thead>
              <tbody>
                {combinedData.map((row, index) => (
                  <tr key={index} style={{ borderBottom: index < combinedData.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                    <td style={{ padding: '1rem 1.5rem', fontWeight: 'bold', color: 'var(--color-text)' }}>{row.year}</td>
                    <td style={{ padding: '1rem 1.5rem', color: 'var(--color-text-muted)' }}>{row.Deposits.toLocaleString()}</td>
                    <td style={{ padding: '1rem 1.5rem', color: 'var(--color-text-muted)' }}>{row.Advances.toLocaleString()}</td>
                    <td style={{ padding: '1rem 1.5rem', color: 'var(--color-text-muted)' }}>{row.Capital.toLocaleString()}</td>
                    <td style={{ padding: '1rem 1.5rem', color: 'var(--color-text-muted)' }}>{row.Networth.toLocaleString()}</td>
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
