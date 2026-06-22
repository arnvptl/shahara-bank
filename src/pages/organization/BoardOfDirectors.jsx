import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Phone, Mail, GraduationCap } from 'lucide-react';

const directors = [
  {
    name: "CA Girish Mukund Ghaisas",
    position: "Chairman",
    education: "Chartered Accountant",
    contact: { office: "2325532", res: "2423831", mobile: "9422225392" },
    image: "/images/ph10.jpg"
  },
  {
    name: "Shri.Prof. Manik Murlidhar Vidhate",
    position: "Vice Chairman",
    education: "M.Com D.H.E.",
    contact: { mobile: "9890999974" },
    image: "/images/ph28_n.jpg"
  },
  {
    name: "Shri. Subhash Chandanmal Gundecha",
    position: "Director",
    education: "B.A. (Journalist)",
    contact: { office: "2344011", res: "2341536", mobile: "9822027599" },
    image: "/images/ph05.png"
  },
  {
    name: "Shri. Ashok Madhavrao Kanade",
    position: "Director",
    education: "B.Com",
    contact: { office: "2343424", res: "2470700", mobile: "9822093636" },
    image: "/images/ph08.png"
  },
  {
    name: "Shri. Sanjay Vitthalrao Ghule",
    position: "Director",
    education: "B.A.",
    contact: { mobile: "9890171010" },
    image: "/images/ph09.png"
  },
  {
    name: "Dr. Vijaykumar Manakchand Bhandari",
    position: "Director",
    education: "B.A.M.S.",
    contact: { office: "2346530", res: "2358311", mobile: "9422221540" },
    image: "/images/ph12.png"
  },
  {
    name: "Shri. Sujit Shrikant Bedekar",
    position: "Director",
    education: "M.A .M.ED.",
    contact: { res: "2343889", mobile: "9766500555" },
    image: "/images/ph13.png"
  },
  {
    name: "Shri. Shivaji Ashokrao Kadam",
    position: "Director",
    education: "",
    contact: { office: "2343336", res: "2343336", mobile: "9420404040" },
    image: "/images/ph15.png"
  },
  {
    name: "Shri. Jayant Tipanna Yelulkar",
    position: "Director",
    education: "B.E.",
    contact: { mobile: "9822096961" },
    image: "/images/ph27_n.jpg"
  },
  {
    name: "Shri. Nikhil Vijay Nahar",
    position: "Director",
    education: "B.Com.",
    contact: { mobile: "9881088885" },
    image: "/images/ph29_n.jpg"
  },
  {
    name: "Dr. Bhushan Raosaheb Anbhule",
    position: "Director",
    education: "M.B.B.S. D.O.M.S. Ophthalmologist",
    contact: { office: "2430688", res: "2426092", mobile: "9922099995" },
    image: "/images/ph26_n.jpg"
  },
  {
    name: "Shri. Pradipkumar Shantwan Jadhav",
    position: "Director",
    education: "B.Com.",
    contact: { mobile: "9422227599" },
    image: "/images/ph30_n.jpg"
  },
  {
    name: "Shri. Dattatray Tulshiram Raskonda",
    position: "Director",
    education: "",
    contact: { mobile: "9850203851" },
    image: "/images/ph31_n.jpg"
  },
  {
    name: "Mrs. Reshma Rajesh Aathare",
    position: "Director",
    education: "B.Com. M.P.M.",
    contact: { office: "2328027", res: "2356049", mobile: "9922079131 / 9850649399" },
    image: "/images/ph17.png"
  },
  {
    name: "Sau. Swati Pramod Kamble",
    position: "Director",
    education: "B.S.C.",
    contact: { mobile: "9850895768" },
    image: "/images/ph32_n.jpg"
  },
  {
    name: "Shri. Santosh Ramdas Makhare",
    position: "Staff Director",
    education: "",
    contact: { mobile: "9834369493" },
    image: "/images/ph24.jpg"
  },
  {
    name: "Shri. Dinesh Kachru Lokhande",
    position: "Chief Executive Officer",
    education: "",
    contact: { office: "2346217", email: "ceo@shaharbank.com" },
    image: "/images/ph21_C_n1.png"
  }
];

const BoardOfDirectors = () => {
  return (
    <div className="section">
      <Helmet>
        <title>Board Of Directors | Ahmednagar Shahar Sahakari Bank Ltd.</title>
        <meta name="description" content="Learn more about Board Of Directors at Ahmednagar Shahar Sahakari Bank Ltd." />
      </Helmet>
      <div className="container">
        <div className="section-header">
          <h2>Board of Directors</h2>
          <p className="text-muted">
            Meet the experienced leaders guiding Ahmednagar Shahar Sahakari Bank towards a prosperous future.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 'var(--spacing-xl)' }}>
          {directors.map((director, index) => (
            <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
              
              <div style={{ height: '250px', backgroundColor: 'var(--color-bg-alt)', overflow: 'hidden' }}>
                <img
                  src={director.image}
                  alt={director.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>

              <div style={{ padding: 'var(--spacing-md)', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', marginBottom: '0.25rem' }}>{director.name}</h3>
                  <span style={{ display: 'inline-block', backgroundColor: 'var(--color-bg-alt)', color: 'var(--color-primary)', fontSize: '0.875rem', fontWeight: '600', padding: '0.25rem 0.75rem', borderRadius: '1rem' }}>
                    {director.position}
                  </span>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  {director.education && (
                    <div style={{ display: 'flex', alignItems: 'flex-start', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                      <GraduationCap style={{ width: '1rem', height: '1rem', marginRight: '0.5rem', flexShrink: 0, marginTop: '0.25rem' }} />
                      <span style={{ fontSize: '0.875rem' }}>{director.education}</span>
                    </div>
                  )}

                  {(director.contact.office || director.contact.res || director.contact.mobile) && (
                    <div style={{ display: 'flex', alignItems: 'flex-start', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                      <Phone style={{ width: '1rem', height: '1rem', marginRight: '0.5rem', flexShrink: 0, marginTop: '0.25rem' }} />
                      <div style={{ fontSize: '0.875rem' }}>
                        {director.contact.office && <div>(O): {director.contact.office}</div>}
                        {director.contact.res && <div>(R): {director.contact.res}</div>}
                        {director.contact.mobile && <div>(M): {director.contact.mobile}</div>}
                      </div>
                    </div>
                  )}

                  {director.contact.email && (
                    <div style={{ display: 'flex', alignItems: 'flex-start', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                      <Mail style={{ width: '1rem', height: '1rem', marginRight: '0.5rem', flexShrink: 0, marginTop: '0.25rem' }} />
                      <span style={{ fontSize: '0.875rem' }}>{director.contact.email}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirectors;
