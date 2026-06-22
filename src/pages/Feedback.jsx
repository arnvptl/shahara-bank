import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

const Feedback = () => {
  const [formData, setFormData] = useState({
    cname: '',
    address: '',
    city: '',
    accountnumber: '',
    mobilenumber: '',
    email: '',
    complaintfeedbacktype: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Feedback/Complaint: ${formData.complaintfeedbacktype}`);
    const body = encodeURIComponent(`Name: ${formData.cname}\nAddress: ${formData.address}\nCity: ${formData.city}\nAccount Number: ${formData.accountnumber}\nMobile: ${formData.mobilenumber}\nEmail: ${formData.email}\n\nType: ${formData.complaintfeedbacktype}\n\nDetails:\n${formData.message}`);
    window.location.href = `mailto:support@shaharbank.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="section">
      <Helmet>
        <title>Feedback | Ahmednagar Shahar Sahakari Bank Ltd.</title>
        <meta name="description" content="Learn more about Feedback at Ahmednagar Shahar Sahakari Bank Ltd." />
      </Helmet>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="section-header">
          <h2>Complaint / Feedback</h2>
          <p className="text-muted">We value your feedback. Please fill out the form below.</p>
        </div>

        <div className="card">
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="cname">Name *</label>
                <input type="text" id="cname" name="cname" className="form-input" required minLength="4" value={formData.cname} onChange={handleChange} />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email ID</label>
                <input type="email" id="email" name="email" className="form-input" value={formData.email} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="address">Address *</label>
              <input type="text" id="address" name="address" className="form-input" required minLength="5" value={formData.address} onChange={handleChange} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--spacing-md)' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="city">City *</label>
                <input type="text" id="city" name="city" className="form-input" required minLength="4" value={formData.city} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="accountnumber">Account Number *</label>
                <input type="text" id="accountnumber" name="accountnumber" className="form-input" required minLength="5" value={formData.accountnumber} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="mobilenumber">Mobile Number *</label>
                <input type="text" id="mobilenumber" name="mobilenumber" className="form-input" required minLength="10" maxLength="10" value={formData.mobilenumber} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="complaintfeedbacktype">Complaint / Feedback Type *</label>
              <select id="complaintfeedbacktype" name="complaintfeedbacktype" className="form-select" required value={formData.complaintfeedbacktype} onChange={handleChange}>
                <option value="" disabled>Select an option</option>
                <option value="ATM Card">ATM Card</option>
                <option value="Savings Account">Savings Account</option>
                <option value="Current Account">Current Account</option>
                <option value="Fixed Deposits">Fixed Deposits</option>
                <option value="Industrial Finance">Industrial Finance</option>
                <option value="Trade Finance">Trade Finance</option>
                <option value="Personal Loans">Personal Loans</option>
                <option value="Home Loans">Home Loans</option>
                <option value="Education Loans">Education Loans</option>
                <option value="Professional Loans">Professional Loans</option>
                <option value="Vehicle Loans">Vehicle Loans</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Brief Details * (max 500 chars)</label>
              <textarea id="message" name="message" className="form-textarea" required maxLength="500" value={formData.message} onChange={handleChange}></textarea>
            </div>

            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              <button type="submit" className="btn btn-primary">Submit via Email Client</button>
              <button type="button" className="btn btn-outline" onClick={() => setFormData({cname:'', address:'', city:'', accountnumber:'', mobilenumber:'', email:'', complaintfeedbacktype:'', message:''})}>Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
