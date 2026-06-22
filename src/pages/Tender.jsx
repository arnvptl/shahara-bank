import React from 'react';
import { Helmet } from 'react-helmet-async';
import ZoomableImage from '../components/ZoomableImage';
import './PageLayout.css';

const Tender = () => {
  return (
    <>
      <Helmet>
        <title>Tender Notice - Ahmednagar Shahar Sahakari Bank</title>
        <meta name="description" content="Tender notices for Ahmednagar Shahar Sahakari Bank." />
      </Helmet>
      
      <div className="page-container">
        <div className="page-header">
          <h1>Tender Notice</h1>
          <div className="header-underline"></div>
        </div>
        
        <div className="page-content">
          <div className="notice-card" style={{ marginBottom: '30px' }}>
            <h2 className="section-title">Tender Notice: 01/2023-24</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
              Ahmednagar Shahar Sahakari Bank Maryadit invites Tenders from Vendor/ Supplier having relevant experience for firewall (Supply & Installation) at ASSB branches for Cloud connectivity.
            </p>
            <div style={{ marginBottom: '15px' }}>
              <a href="/Tender_F01_Firewall.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Download PDF File
              </a>
            </div>
            <ZoomableImage src="/images/cyhkr52t48.jpg" alt="Firewall Tender" style={{ maxWidth: '100%', borderRadius: '8px' }} />
          </div>

          <div className="notice-card" style={{ marginBottom: '30px' }}>
            <h2 className="section-title">Tender Notice: 02/2023-24</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
              Ahmednagar Shahar Sahakari Bank Maryadit invites Tenders from Vendor/ Supplier having relevant experience for Desktop CPU at ASSB.
            </p>
            <div style={{ marginBottom: '15px' }}>
              <a href="/Tender_F2_desk_cpu.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Download PDF File
              </a>
            </div>
            <ZoomableImage src="/images/29br1s4kj2.jpg" alt="Desktop CPU Tender" style={{ maxWidth: '100%', borderRadius: '8px' }} />
          </div>

          <div className="notice-card" style={{ marginBottom: '30px' }}>
            <h2 className="section-title">Re-Sale Notice (विक्रीसाठी मोहोरबंद फेरनिविदा नोटीस)</h2>
            <div className="gallery-grid">
              <div className="gallery-item">
                <ZoomableImage src="/images/img_202405182.png" alt="Re-Sale Notice 1" className="content-image" />
              </div>
              <div className="gallery-item">
                <ZoomableImage src="/images/img_20240518.png" alt="Re-Sale Notice 2" className="content-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tender;
