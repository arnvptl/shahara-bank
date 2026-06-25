import { Helmet } from 'react-helmet-async';
import { RefreshCcw, Send, CheckCircle2 } from 'lucide-react';

const NeftRtgs = () => {
  return (
    <div className="section page-fade-in">
      <Helmet>
        <title>NEFT & RTGS Fund Transfer | Ahmednagar Shahar Sahakari Bank</title>
        <meta name="description" content="NEFT and RTGS fund transfer services at Ahmednagar Shahar Sahakari Bank. Transfer funds to any bank across India. RTGS for amounts above ₹1 lakh, NEFT for any amount." />
        <link rel="canonical" href="https://new.shaharbank.com/services/neft-rtgs" />
      </Helmet>

      <div className="container">
        <div className="section-header">
          <h1 className="section-title">NEFT & RTGS Services</h1>
        </div>

        <div className="grid">
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
              <Send size={28} />
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>NEFT (National Electronic Fund Transfer)</h2>
            </div>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              National Electronic Funds Transfer (NEFT) system is a nation wide funds transfer system to facilitate transfer of funds from any bank branch to any other bank branch.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>When will the beneficiary receive the money?</h3>
                <p>The beneficiary gets the credit on the same Day or the next Day depending on the time of settlement.</p>
              </div>
              
              <div>
                <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>What information is required?</h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                  <li>Beneficiary details such as beneficiary name and account number.</li>
                  <li>Name and IFSC of the beneficiary bank branch.</li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>What is IFS Code (IFSC)?</h3>
                <p>Indian Financial System Code (IFSC) is an alpha numeric code designed to uniquely identify the bank-branches in India. This is an 11 digit code with first 4 characters representing the banks code, the next character reserved as control character (Presently 0) and remaining 6 characters to identify the branch.</p>
              </div>

              <div>
                <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Can a walk-in customer remit cash through NEFT?</h3>
                <p>Yes, walk in customers can remit cash through NEFT from any of the Shahar Bank Branches.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
              <RefreshCcw size={28} />
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>RTGS (Real Time Gross Settlement)</h2>
            </div>
            
            <div style={{ padding: '1rem', backgroundColor: 'var(--color-bg-alt)', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
              <p style={{ fontWeight: '600', color: 'var(--color-primary)' }}>
                Transfer any amount of Rs. 1,00,000 and above within 2 Hours to Any Bank / Account Anywhere in India.
              </p>
            </div>

            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              The acronym "RTGS" stands for Real Time Gross Settlement. RTGS system is a funds transfer mechanism where transfer of money takes place from one bank to another on a "real time" and on "gross" basis.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Is there any minimum or maximum amount?</h3>
                <p>The RTGS system is primarily meant for large value transactions. The minimum amount to be remitted through RTGS is Rs 1 lakh. There is no upper ceiling for RTGS transactions.</p>
              </div>
              
              <div>
                <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>What information is required for RTGS?</h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                  <li>Amount to be remitted</li>
                  <li>Remitting customer's account number which is to be debited</li>
                  <li>Name of the beneficiary bank and branch</li>
                  <li>The IFSC Number of the receiving branch</li>
                  <li>Name of the beneficiary customer</li>
                  <li>Account number of the beneficiary customer</li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Is it possible for a remitting customer to track the transaction?</h3>
                <p>Yes, it is possible for a remitting customer to track the transaction through the remitting bank branch. The beneficiary's bank branch is expected to credit the beneficiary's account within two hours of receiving the funds transfer message.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeftRtgs;
