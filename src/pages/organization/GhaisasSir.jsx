import React from 'react';
import { Helmet } from 'react-helmet-async';

const GhaisasSir = () => {
  return (
    <div className="section">
      <Helmet>
        <title>Prof. Mukund Ghaisas - Ahmednagar Shahar Sahakari Bank</title>
      </Helmet>
      <div className="container">
        <div className="section-header">
          <h2>Prof. Mukund Ghaisas</h2>
          <p className="text-muted">Person of Pride and Privilege For Us</p>
        </div>
        
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 'var(--spacing-2xl)' }}>
          <img 
            src="/images/N09.JPG" 
            alt="Prof. Mukund Ghaisas" 
            style={{ 
              width: '200px', 
              height: 'auto', 
              borderRadius: 'var(--radius-lg)', 
              boxShadow: 'var(--shadow-md)',
              marginBottom: 'var(--spacing-xl)'
            }} 
          />
          <div style={{ textAlign: 'justify', lineHeight: '1.8', color: 'var(--color-text)' }}>
            <p style={{ marginBottom: '1rem' }}>
              His fundamental and thoroughly practical knowledge has taken him and the name of Shahar Bank to all corners of Maharashtra. He has transcended the frontiers of Maharashtra and has acquired a status of a knowledgeable and veteran guide outside the state of Maharashtra.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              He guided the destiny of UCBs as Director and Chairman of Maharashtra State Urban Banks Federation Ltd; Mumbai and continues to do so as the Director of State Association. His lectures at YASHADA, Pune and Vaikunth Mehta Institute (VAMNICOM), Pune have enlightened the leaders and executives of Urban Banks all over India.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Putting on track the derailed Suwarna Sahakari Bank of Pune and its merger with a nationalised bank are acclaimed as historic achievements and appreciated by the RBI. 
            </p>
            <p>
              His tremendous contribution in facilitating the signing of MOU by Govt. of Maharashtra with the RBI has paved the way for the growth of urban banking sector, as it marked the beginning of branch licensing after a break of almost four years.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GhaisasSir;
