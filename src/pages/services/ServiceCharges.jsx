import { Helmet } from 'react-helmet-async';
import { Receipt, FileText, Briefcase } from 'lucide-react';

const ServiceCharges = () => {
  return (
    <div className="section page-fade-in">
      <Helmet>
        <title>Service Charges | Ahmednagar Shahar Sahakari Bank</title>
        <meta name="description" content="View the service charges, minimum balance requirements, and processing fees at Ahmednagar Shahar Sahakari Bank." />
      </Helmet>

      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Service Charges</h1>
          <p className="section-subtitle">Transparent banking with clear fee structures</p>
        </div>

        <div className="grid">
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
              <Briefcase size={24} />
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Minimum Balance Requirements</h2>
            </div>
            
            <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', marginTop: '1rem' }}>For Saving Bank Account</h3>
            <ul style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <li>Minimum Balance is Rs. 1000/- without ATM Card and Cheque Book</li>
              <li>Minimum Balance is Rs 1500/- with ATM Card and No Cheque Book</li>
              <li>Minimum Balance is Rs. 2000/- with ATM Card and Cheque Book</li>
              <li>Minimum Balance is Rs. 500/- for Salaried Account with Bank</li>
            </ul>

            <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>For Current Account</h3>
            <ul style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Minimum Balance is Rs. 5000/-</li>
            </ul>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
              <Receipt size={24} />
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Processing Charges for Loans</h2>
            </div>
            <ul style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Up to 2,00,000 is Rs. 500 + GST</li>
              <li>2,00,001 to 5,00,000 is Rs. 700 + GST</li>
              <li>5,00,001 to 10,00,000 is Rs. 3000 + GST</li>
              <li>10,00,001 to 25,00,000 is Rs. 7000 + GST</li>
              <li>25,00,001 to 50,00,000 is Rs. 10000 + GST</li>
              <li>50,00,001 to 1,00,00,000 is Rs. 12000 + GST</li>
              <li>1,00,00,001 to 3,00,00,000 is Rs. 15000 + GST</li>
              <li>3,00,00,001 to 5,00,00,000 is Rs. 20000 + GST</li>
              <li>5,00,00,001 and above is Rs. 35000 + GST</li>
            </ul>
          </div>
        </div>

        <div className="card" style={{ marginTop: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
            <FileText size={24} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>General Service Charges</h2>
          </div>
          <ul style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li>Minimun Balance Penalty Rs. 30/- Plus GST proportionate exclusive In-operative Account</li>
            <li>Service Charges for current Account half yearly Rs.200 + GST excluding whose CC Account is in Bank</li>
            <li>ATM Maintenance Charges Rs. 100 + GST yearly.</li>
            <li>Duplicate ATM Card Charges Rs. 200 + GST.</li>
            <li>SMS Charges Rs.15 + GST for Saving, Current and CC quarterly</li>
            <li>Duplicate Passbook Charges Rs. 15 + GST</li>
            <li>Cheque Bounce Charges is Rs. 200 + GST</li>
            <li>Local Inward Clearing Return Charges is Rs. 100 + GST</li>
            <li>All Current Account and CC Account per cheque charged by Rs. 1.50 + GST</li>
            <li>All Loan Application Form is Rs. 100 + GST and Gold Loan and Loan Against FD is Rs. 50 + GST</li>
            <li>No dues Charges is Rs. 250 + GST</li>
            <li>CIBIL Report Fee is Rs. 500 for individual and Rs. 3000 for other than individual</li>
            <li>E-Payment above 5001 is Rs 25 + GST</li>
            <li>Excise Chalan is Rs. 50 + GST</li>
            <li>For Duplicate Statement is Rs. 10 + GST per page</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCharges;
