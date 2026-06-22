import React from 'react';
import { Helmet } from 'react-helmet-async';
import ZoomableImage from '../components/ZoomableImage';
import './PageLayout.css';

const Auction = () => {
  return (
    <>
      <Helmet>
        <title>Auction - Ahmednagar Shahar Sahakari Bank</title>
        <meta name="description" content="Auction notices and Immovable Property Sale Proclamations from Ahmednagar Shahar Sahakari Bank." />
      </Helmet>
      
      <div className="page-container">
        <div className="page-header">
          <h1>Auction</h1>
          <div className="header-underline"></div>
        </div>
        
        <div className="page-content">
          <div className="notice-card" style={{ marginBottom: '30px' }}>
            <h2 className="section-title">Immovable Property Sale Proclamation No.2 (स्थावर मालमत्ता विक्रीचा जाहीरनामा क्र.२)</h2>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <a href="/AuctionBid%20Form030124.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Auction Bid Form
              </a>
              <a href="/Declaration030124.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Declaration
              </a>
            </div>
            <div className="gallery-grid">
              <div className="gallery-item">
                <ZoomableImage src="/images/Auction_E230224.jpg" alt="Auction Notice No 2 English" className="content-image" />
              </div>
              <div className="gallery-item">
                <ZoomableImage src="/images/Auction_M230224.jpg" alt="Auction Notice No 2 Marathi" className="content-image" />
              </div>
            </div>
          </div>

          <div className="notice-card" style={{ marginBottom: '30px' }}>
            <h2 className="section-title">Immovable Property Sale Proclamation No.1 (स्थावर मालमत्ता विक्रीचा जाहीरनामा क्र.१)</h2>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <a href="/AuctionBid%20Form030124.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Auction Bid Form
              </a>
              <a href="/Declaration030124.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Declaration
              </a>
            </div>
            <div className="gallery-grid">
              <div className="gallery-item">
                <ZoomableImage src="/Auction_E030124.jpeg" alt="Auction Notice No 1 English" className="content-image" />
              </div>
              <div className="gallery-item">
                <ZoomableImage src="/Auction_M030124.jpeg" alt="Auction Notice No 1 Marathi" className="content-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auction;
