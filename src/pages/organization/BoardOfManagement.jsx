import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Phone, Mail, GraduationCap } from 'lucide-react';

const managementMembers = [
  {
    name: "Mr. Vivekanand Pawar",
    position: "Chairman",
    education: "",
    contact: { mobile: "9730411511" },
    image: "/images/placeholder_male.png"
  },
  {
    name: "Sripad Kulkarni",
    position: "Member",
    education: "",
    contact: { mobile: "9422341723" },
    image: "/images/placeholder_male.png"
  },
  {
    name: "Adv. Vivek Andhale",
    position: "Director",
    education: "",
    contact: { mobile: "9822092173" },
    image: "/images/placeholder_male.png"
  }
];

const BoardOfManagement = () => {
  return (
    <div className="section">
      <Helmet>
        <title>Board Of Management | Ahmednagar Shahar Sahakari Bank Ltd.</title>
        <meta name="description" content="Learn more about the Board Of Management at Ahmednagar Shahar Sahakari Bank Ltd." />
      </Helmet>
      <div className="container">
        <div className="section-header">
          <h2>Board of Management</h2>
          <p className="text-muted">
            The Board of Management oversees the day-to-day operations and strategic direction of Ahmednagar Shahar Sahakari Bank.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 'var(--spacing-xl)' }}>
          {managementMembers.map((member, index) => (
            <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>

              <div style={{ height: '250px', backgroundColor: 'var(--color-bg-alt)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.style.background = 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))';
                    const initials = document.createElement('div');
                    initials.style.cssText = 'color:white;font-size:3rem;font-weight:700;display:flex;align-items:center;justify-content:center;width:100%;height:100%';
                    initials.textContent = member.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
                    e.target.parentNode.appendChild(initials);
                  }}
                />
              </div>

              <div style={{ padding: 'var(--spacing-md)', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: 'var(--spacing-sm)' }}>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', marginBottom: '0.25rem' }}>{member.name}</h3>
                  <span style={{ display: 'inline-block', backgroundColor: 'var(--color-bg-alt)', color: 'var(--color-primary)', fontSize: '0.875rem', fontWeight: '600', padding: '0.25rem 0.75rem', borderRadius: '1rem' }}>
                    {member.position}
                  </span>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  {member.education && (
                    <div style={{ display: 'flex', alignItems: 'flex-start', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                      <GraduationCap style={{ width: '1rem', height: '1rem', marginRight: '0.5rem', flexShrink: 0, marginTop: '0.25rem' }} />
                      <span style={{ fontSize: '0.875rem' }}>{member.education}</span>
                    </div>
                  )}

                  {member.contact.mobile && (
                    <div style={{ display: 'flex', alignItems: 'flex-start', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                      <Phone style={{ width: '1rem', height: '1rem', marginRight: '0.5rem', flexShrink: 0, marginTop: '0.25rem' }} />
                      <div style={{ fontSize: '0.875rem' }}>
                        <div>(M): {member.contact.mobile}</div>
                      </div>
                    </div>
                  )}

                  {member.contact.email && (
                    <div style={{ display: 'flex', alignItems: 'flex-start', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                      <Mail style={{ width: '1rem', height: '1rem', marginRight: '0.5rem', flexShrink: 0, marginTop: '0.25rem' }} />
                      <span style={{ fontSize: '0.875rem' }}>{member.contact.email}</span>
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

export default BoardOfManagement;
