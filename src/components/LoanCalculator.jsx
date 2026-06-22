import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Car, GraduationCap, User, Edit2, Calendar } from 'lucide-react';
import './LoanCalculator.css';

const LoanCalculator = () => {
  const navigate = useNavigate();
  const [loanType, setLoanType] = useState('Professional');
  const [amount, setAmount] = useState(500000); // Default 5L
  const [duration, setDuration] = useState(12); // Default 1 Year (in months)
  const [interestRate, setInterestRate] = useState(12.5); // Default 12.5%

  // Constants
  const minAmount = 50000;
  const maxAmount = 5000000;
  
  const loanTypes = [
    { 
      id: 'Professional', 
      icon: <User size={16} />, 
      rate: 12.5,
      highlights: ['KYC Documents', 'Last 3 years financial papers', 'For Doctors, Engineers, CA, etc.'] 
    },
    { 
      id: 'Home', 
      icon: <Home size={16} />, 
      rate: 9.5,
      highlights: ['Original Title documents', 'Last 3 yrs IT Returns / Salary Slip', 'Agreement to Sale'] 
    },
    { 
      id: 'Vehicle', 
      icon: <Car size={16} />, 
      rate: 9.0,
      highlights: ['Quotation from authorized dealer', 'Last 3 years financial papers', 'Driving License (for commercial)'] 
    },
    { 
      id: 'Gold', 
      icon: <span style={{ fontWeight: 'bold' }}>₹</span>, 
      rate: 9.0,
      highlights: ['KYC Documents', 'Income Documents', 'Quick Processing'] 
    }
  ];

  const durations = [
    { label: '6 Months', value: 6 },
    { label: '1 Year', value: 12 },
    { label: '2 Year', value: 24 },
    { label: '5 Year', value: 60, icon: <Calendar size={16} /> }
  ];

  // Update interest rate when loan type changes
  useEffect(() => {
    const selectedType = loanTypes.find(t => t.id === loanType);
    if (selectedType) {
      setInterestRate(selectedType.rate);
    }
  }, [loanType]);

  // Calculations
  const calculateEMI = () => {
    const P = amount;
    const R = (interestRate / 12) / 100; // Monthly interest rate
    const N = duration;
    
    if (R === 0) return P / N;
    
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    return Math.round(emi);
  };

  const emi = calculateEMI();
  const totalPayment = emi * duration;
  const totalInterest = totalPayment - amount;

  // Format currency
  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN').format(val);
  };

  // Format number to words (simple approx for lakhs/thousands)
  const formatWords = (val) => {
    if (val >= 100000) {
      const lakhs = val / 100000;
      return `${lakhs % 1 === 0 ? lakhs : lakhs.toFixed(1)} Lakh${lakhs > 1 ? 's' : ''}`;
    }
    const thousands = val / 1000;
    return `${thousands % 1 === 0 ? thousands : thousands.toFixed(1)} Thousand`;
  };

  return (
    <div className="calculator-container">
      {/* Left Pane - Inputs */}
      <div className="calc-left">
        <h2 className="calc-title">Choose Your Loan</h2>
        
        {/* Loan Type */}
        <div className="toggle-group">
          {loanTypes.map(type => (
            <button 
              key={type.id}
              className={`toggle-btn ${loanType === type.id ? 'active' : ''}`}
              onClick={() => setLoanType(type.id)}
            >
              {type.icon} {type.id}
            </button>
          ))}
        </div>

        {/* Amount Slider */}
        <div className="range-group">
          <div className="range-header">
            <label>Amount</label>
            <input 
              type="text" 
              className="amount-input"
              value={formatCurrency(amount)}
              readOnly
            />
          </div>
          <input 
            type="range" 
            className="range-slider"
            min={minAmount}
            max={maxAmount}
            step="50000"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <div className="range-labels">
            <span>50k</span>
            <span>10L</span>
            <span>20L</span>
            <span>30L</span>
            <span>40L</span>
            <span>50L</span>
          </div>
          <div className="amount-words">
            {formatWords(amount)}
          </div>
        </div>

        {/* Duration */}
        <div className="range-group">
          <div className="range-header">
            <label>Duration</label>
          </div>
          <div className="toggle-group" style={{ marginBottom: 0 }}>
            {durations.map(dur => (
              <button 
                key={dur.value}
                className={`toggle-btn ${duration === dur.value ? 'active' : ''}`}
                onClick={() => setDuration(dur.value)}
              >
                {dur.icon && dur.icon} {dur.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Pane - Results */}
      <div className="calc-right">
        <div>
          <div className="rate-edit">
            Interest rate @ {interestRate.toFixed(2)} % <Edit2 size={14} />
          </div>
          
          <div className="emi-amount">
            ₹{formatCurrency(emi)}
          </div>
          
          <div className="emi-details">
            Total interest: ₹{formatCurrency(totalInterest)}
          </div>
          
          <div className="emi-disclaimer">
            Disclaimer and terms & conditions applied
          </div>

          <ul className="highlights">
            {loanTypes.find(t => t.id === loanType)?.highlights.map((highlight, idx) => (
              <li key={idx} style={{ fontSize: '0.9rem' }}>• {highlight}</li>
            ))}
          </ul>
        </div>

        <div className="calc-actions">
          <button 
            className="btn-calc btn-calc-outline"
            onClick={() => navigate(`/loans/${loanType.toLowerCase()}`)}
          >
            Details
          </button>
          <button 
            className="btn-calc btn-calc-solid"
            onClick={() => navigate('/contact')}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
