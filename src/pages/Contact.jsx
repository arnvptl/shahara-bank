import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Contact Us - Web Form Submission');
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:ceo@shaharbank.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="section">
      <Helmet>
        <title>Contact | Ahmednagar Shahar Sahakari Bank Ltd.</title>
        <meta name="description" content="Learn more about Contact at Ahmednagar Shahar Sahakari Bank Ltd." />
      </Helmet>
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p className="text-muted">We're here to help and answer any question you might have.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-2xl)' }}>
          <div>
            <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
              <h3>Head Office</h3>
              <ul style={{ listStyle: 'none', marginTop: 'var(--spacing-md)' }}>
                <li style={{ display: 'flex', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                  <MapPin color="var(--color-primary)" />
                  <span>Ahmednagar Shahar Sahakari Bank Ltd.<br/>Ahmednagar, Maharashtra</span>
                </li>
                <li style={{ display: 'flex', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                  <Phone color="var(--color-primary)" />
                  <span>0241 - 2323321 / 2346217</span>
                </li>
                <li style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                  <Mail color="var(--color-primary)" />
                  <span>ceo@shaharbank.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit} style={{ marginTop: 'var(--spacing-md)' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" className="form-input" required value={formData.name} onChange={handleChange} />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" className="form-input" required value={formData.email} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="form-input" value={formData.phone} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea id="message" name="message" className="form-textarea" required value={formData.message} onChange={handleChange}></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message via Email Client</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
