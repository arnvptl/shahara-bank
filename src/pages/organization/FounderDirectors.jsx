import { Helmet } from 'react-helmet-async';
import React from 'react';

const founders = [
  { name: "Prof. Vivek Dadhe", image: "/images/Prof.Vivek Dadhe.JPG" },
  { name: "Prof. Mukund Ghaisas", image: "/images/Prof.Mukund Ghaisas.JPG" },
  { name: "Prof. M. V. Ghaskadbi", image: "/images/Prof.M. V. Ghaskadbi.JPG" },
  { name: "Adv. G. G. Khan", image: "/images/Adv. G. G. Khan.JPG" },
  { name: "Shri. Radhakisan Madhyan", image: "/images/Shri. Radhakisan Madhyan.JPG" },
  { name: "Shri. Shridharpant Tamboli", image: "/images/Shri. Shridharpant Tamboli.JPG" },
  { name: "Shri. Vasantrao Penta", image: "/images/Shri. Vasantrao Penta.JPG" },
  { name: "Smt. Mai Saptarshi", image: "/images/Smt. Mai Saptarshi.JPG" },
  { name: "Smt. Kamalabai Ranade", image: "/images/Smt. Kamalabai Ranade.JPG" }
];

const FounderDirectors = () => {
  return (
    <div className="section">
      <Helmet>
        <title>Founder Directors | Ahmednagar Shahar Sahakari Bank Ltd.</title>
        <meta name="description" content="Learn more about Founder Directors at Ahmednagar Shahar Sahakari Bank Ltd." />
      </Helmet>
      <div className="container">
        <div className="section-header">
          <h2>Founder Directors</h2>
          <p className="text-muted">
            Honoring the visionaries who laid the foundation of our institution.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 'var(--spacing-xl)' }}>
          {founders.map((founder, index) => (
            <div key={index} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', backgroundColor: 'var(--color-bg-alt)' }}>
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              
              <div style={{ padding: 'var(--spacing-md)', textAlign: 'center', width: '100%' }}>
                <h3 style={{ margin: 0, fontSize: '1.125rem', color: 'var(--color-primary-dark)' }}>{founder.name}</h3>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>Founder Director</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FounderDirectors;
