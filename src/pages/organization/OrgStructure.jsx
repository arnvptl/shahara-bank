import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './OrgStructure.css';

const tooltipData = {
  chairman: [
    "CA Girish Ghaisas - Chairman"
  ],
  viceChairman: [
    "Dr. Nikhil Nahar - Vice Chairman"
  ],
  staff: [
    "CA Girish Ghaisas - Committee Chairman",
    "Dr. Nikhil Nahar - Vice Chairman",
    "Shri. Subhash Gundecha - Director",
    "Dr. Vijaykumar Bhandari - Director",
    "Shri. Sujit Bedekar - Director",
    "Shri. Santosh Makhare - Staff Director",
    "Shri. Rajendra Gaikwad - Staff Director",
    "Shri. Dinesh Lokhande - Chief Executive Officer"
  ],
  purchase: [
    "Shri. Sujit Bedekar - Committee Director",
    "CA Girish Ghaisas - Director",
    "Shri. Subhash Gundecha - Director",
    "Dr. Bhushan Anbhule - Director",
    "Shri. Jayant Yelulkar - Director",
    "Shri. Dinesh Lokhande - Chief Executive Officer"
  ],
  recovery: [
    "Shri. Ashok Kanade - Committee Chairman",
    "Shri. Subhash Gundecha - Director",
    "Shri. Sanjay Ghule - Director",
    "Shri. Manik Vidhate - Director",
    "Shri. Pradipkumar Jadhav - Director",
    "Shri. Dinesh Lokhande - Chief Executive Officer"
  ],
  creditAppraisal: [
    "Shri. Subhash Gundecha - Committee Chairman",
    "CA Girish Ghaisas - Director",
    "Shri. Ashok Kanade - Director",
    "Shri. Manik Vidhate - Director",
    "Shri. Nikhil Nahar - Director",
    "Shri. Dinesh Lokhande - Chief Executive Officer"
  ],
  audit: [
    "CA Girish Ghaisas - Committee Chairman",
    "Shri. Sujit Bedekar - Director",
    "Shri. Ashok Kanade - Director",
    "Shri. Dattatray Raskonda - Director",
    "Mrs. Reshma Aathare - Chavan - Director",
    "Shri. Dinesh Lokhande - Chief Executive Officer"
  ],
  investment: [
    "CA Girish Ghaisas - Committee Chairman",
    "Shri. Subhash Gundecha - Director",
    "Dr. Vijaykumar Bhandari - Director",
    "Shri. Pradipkumar Jadhav - Director",
    "Shri. Nikhil Nahar - Director",
    "Shri. Dinesh Lokhande - Chief Executive Officer"
  ],
  womenWelfare: [
    "Mrs. Reshma Aathare - Chavan - Committee Chairman",
    "Sau. Swati Kamble - Director",
    "Shri. Sanjay Ghule - Director",
    "Shri. Shivaji Kadam - Director",
    "Shri. Manik Vidhate - Director",
    "Shri. Dinesh Lokhande - Chief Executive Officer"
  ],
  membership: [
    "Dr. Bhushan Anbhule - Committee Chairman",
    "Sau. Swati Kamble - Director",
    "Shri. Ashok Kanade - Director",
    "Shri. Sanjay Ghule - Director",
    "Shri. Dattatray Raskonda - Director",
    "Shri. Dinesh Lokhande - Chief Executive Officer"
  ],
  it: [
    "CA Girish Ghaisas - Committee Chairman",
    "Dr. Bhushan Anbhule - Director",
    "Shri. Shivaji Kadam - Director",
    "Dr. Vijaykumar Bhandari - Director",
    "Shri. Pradipkumar Jadhav - Director",
    "Shri. Dinesh Lokhande - Chief Executive Officer"
  ],
  civilWork: [
    "Mrs. Reshma Aathare - Chavan - Committee Chairman",
    "Shri. Jayant Yelulkar - Director",
    "Shri. Dattatray Raskonda - Director",
    "Shri. Pradipkumar Jadhav - Director",
    "Sau. Swati Kamble - Director",
    "Shri. Dinesh Lokhande - Chief Executive Officer"
  ],
  membersWelfare: [
    "Dr. Vijaykumar Bhandari - Committee Chairman",
    "Dr. Bhushan Anbhule - Director",
    "Shri. Sujit Bedekar - Director",
    "Shri. Shivaji Kadam - Director",
    "Shri. Nikhil Nahar - Director",
    "Shri. Dinesh Lokhande - Chief Executive Officer"
  ],
  buyingProperty: [
    "Shri. Sanjay Ghule - Committee Chairman",
    "Shri. Jayant Yelulkar - Director",
    "Shri. Manik Vidhate - Director",
    "Shri. Nikhil Nahar - Director",
    "Mrs. Reshma Aathare - Chavan - Director",
    "Shri. Dinesh Lokhande - Chief Executive Officer"
  ],
  settlementAdvisory: [
    "Shri. Subhash Gundecha - Committee Chairman",
    "Shri. Shivaji Kadam - Director",
    "Shri. Jayant Yelulkar - Director",
    "Shri. Dattatray Raskonda - Director",
    "Sau. Swati Kamble - Director",
    "Shri. Dinesh Lokhande - Chief Executive Officer",
    "Shri. Prakash Vairagar - Senior Officer",
    "Adv. Kishor Deshpande - Legal Advisory",
    "CA Ajay Rajurkar - Chief Auditor"
  ],
  assetLiability: [
    "Shri. Dinesh Lokhande - Chief Executive Officer",
    "Shri. Prakash Vairagar - Senior Officer",
    "Shri. Jayant Gaikwad - Senior Officer",
    "Shri. Dinesh Lokhande - Senior Officer"
  ]
};

const OrgStructure = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e, key) => {
    if (!tooltipData[key]) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Position fixed to viewport
    let x = rect.right + 15;
    let y = rect.top;

    // Prevent overflow on right
    if (x + 400 > window.innerWidth) {
      x = rect.left - 415; // move to left side of node
    }

    // Prevent overflow on bottom
    if (y + 300 > window.innerHeight) {
      y = window.innerHeight - 320; // push up
    }

    setTooltipPos({ x, y });
    setActiveTooltip(key);
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  const formatNameAndRole = (str) => {
    const parts = str.split(' - ');
    if (parts.length === 2) {
      return (
        <>
          <span className="tooltip-name">{parts[0]}</span>
          <span className="tooltip-role">- {parts[1]}</span>
        </>
      );
    }
    return <span>{str}</span>;
  };

  const Node = ({ title, dataKey, isPrimary }) => (
    <div 
      className={`org-node ${isPrimary ? 'org-node-primary' : ''}`}
      onMouseEnter={(e) => handleMouseEnter(e, dataKey)}
      onMouseLeave={handleMouseLeave}
    >
      {title}
    </div>
  );

  const CommitteeRow = ({ left, right, isLast }) => (
    <div className="committee-row" style={{ display: 'flex', width: '100%', alignItems: 'stretch' }}>
      
      <div className="committee-node-container" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', padding: '10px 0', alignItems: 'center' }}>
        <Node title={left.title} dataKey={left.key} />
      </div>

      <div className="committee-spine" style={{ width: '60px', position: 'relative', display: 'flex', justifyContent: 'center' }}>
        {/* The vertical spine line */}
        <div style={{ width: '2px', height: isLast ? '50%' : '100%', backgroundColor: 'var(--color-accent)' }}></div>
        
        {/* The horizontal connectors */}
        <div style={{ position: 'absolute', top: '50%', left: 0, width: '50%', height: '2px', backgroundColor: 'var(--color-accent)' }}></div>
        <div style={{ position: 'absolute', top: '50%', right: 0, width: '50%', height: '2px', backgroundColor: 'var(--color-accent)' }}></div>
      </div>

      <div className="committee-node-container" style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', padding: '10px 0', alignItems: 'center' }}>
        <Node title={right.title} dataKey={right.key} />
      </div>

    </div>
  );

  return (
    <div className="org-structure-page">
      <Helmet>
        <title>Management Structure | Ahmednagar Shahar Sahakari Bank</title>
      </Helmet>

      <div className="section-header" style={{ paddingTop: '2rem' }}>
        <h2 style={{ textAlign: 'center', color: 'var(--color-primary-dark)' }}>Management Structure</h2>
      </div>

      <div className="org-tree-container">
        
        {/* Tooltip Layer */}
        <div 
          className={`org-tooltip ${activeTooltip ? 'visible' : ''}`}
          style={{ left: tooltipPos.x, top: tooltipPos.y }}
        >
          {activeTooltip && tooltipData[activeTooltip] && (
            <ul className="tooltip-list">
              {tooltipData[activeTooltip].map((item, idx) => (
                <li key={idx}>
                  <span className="bullet-icon">🔘</span>
                  {formatNameAndRole(item)}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Level 1: Board of Directors */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Node title="Board of Directors" isPrimary />
          <div style={{ width: '2px', height: '30px', backgroundColor: 'var(--color-accent)' }}></div>
        </div>

        {/* Level 2: Branches */}
        <div className="org-level-2" style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%', maxWidth: '850px', margin: '0 auto' }}>
          {/* Horizontal line connecting the three branches */}
          <div className="horizontal-connector" style={{ position: 'absolute', top: 0, left: 'calc(50% - 283px)', width: '566px', height: '2px', backgroundColor: 'var(--color-accent)' }}></div>
          
          <div className="org-branch" style={{ width: '283.33px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '2px', height: '30px', backgroundColor: 'var(--color-accent)' }}></div>
            <Node title="Chairman" dataKey="chairman" />
          </div>
          
          <div className="org-branch" style={{ width: '283.33px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '2px', height: '30px', backgroundColor: 'var(--color-accent)' }}></div>
            <Node title="Vice Chairman" dataKey="viceChairman" />
          </div>
          
          <div className="org-branch" style={{ width: '283.33px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '2px', height: '30px', backgroundColor: 'var(--color-accent)' }}></div>
            <Node title="Various Committees" isPrimary />
            
            {/* Level 3: Committees Spine under Various Committees */}
            <div style={{ width: '2px', height: '30px', backgroundColor: 'var(--color-accent)' }}></div>
            
            <div className="committees-container" style={{ width: '800px', display: 'flex', flexDirection: 'column' }}>
              {/* Row 1 */}
              <CommitteeRow left={{title: 'Staff Committee', key: 'staff'}} right={{title: 'Purchase Committee', key: 'purchase'}} />
              {/* Row 2 */}
              <CommitteeRow left={{title: 'Recovery Committee', key: 'recovery'}} right={{title: 'Credit Appraisal and Review Committee', key: 'creditAppraisal'}} />
              {/* Row 3 */}
              <CommitteeRow left={{title: 'Audit Committee', key: 'audit'}} right={{title: 'Investment in Government Securities and Others Committee', key: 'investment'}} />
              {/* Row 4 */}
              <CommitteeRow left={{title: 'Women Welfare Committee', key: 'womenWelfare'}} right={{title: 'Membership Committee', key: 'membership'}} />
              {/* Row 5 */}
              <CommitteeRow left={{title: 'Information Technology Committee', key: 'it'}} right={{title: 'Civil Work and Interior Committee', key: 'civilWork'}} />
              {/* Row 6 */}
              <CommitteeRow left={{title: 'Members Welfare Committee', key: 'membersWelfare'}} right={{title: 'Buying Property / Rental - Committee', key: 'buyingProperty'}} />
              {/* Row 7 */}
              <CommitteeRow left={{title: 'Settlement Advisory Committee', key: 'settlementAdvisory'}} right={{title: 'Asset Liability Management Committee', key: 'assetLiability'}} isLast />
            </div>
          </div>
        </div>

      </div>

      {/* --- Administration Structure --- */}
      <div className="section-header" style={{ paddingTop: '4rem' }}>
        <h2 style={{ textAlign: 'center', color: 'var(--color-primary-dark)' }}>Administration Structure</h2>
      </div>

      <div className="org-tree-container">
        
        {/* Level 1: CEO */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Node title="Chief Executive Officer" isPrimary />
          <div style={{ width: '2px', height: '30px', backgroundColor: 'var(--color-accent)' }}></div>
        </div>

        {/* Level 2 & 3: Administration Branches */}
        <div className="org-level-2" style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%', maxWidth: '850px', margin: '0 auto' }}>
          {/* Horizontal line connecting the three branches */}
          <div className="horizontal-connector" style={{ position: 'absolute', top: 0, left: 'calc(50% - 283px)', width: '566px', height: '2px', backgroundColor: 'var(--color-accent)' }}></div>
          
          <div className="org-branch" style={{ width: '283.33px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '2px', height: '30px', backgroundColor: 'var(--color-accent)' }}></div>
            <Node title={<>Deputy Chief Officer<br/>(Banking & Accounts)</>} />
            <div style={{ width: '2px', height: '30px', backgroundColor: 'var(--color-accent)' }}></div>
            <Node title={<>All Branch Offices<br/>& Head Office</>} />
          </div>
          
          <div className="org-branch" style={{ width: '283.33px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '2px', height: '30px', backgroundColor: 'var(--color-accent)' }}></div>
            <Node title={<>Deputy Chief Officer<br/>(Legal)</>} />
            <div style={{ width: '2px', height: '30px', backgroundColor: 'var(--color-accent)' }}></div>
            <Node title={<>Legal Cases and<br/>Recovery</>} />
          </div>
          
          <div className="org-branch" style={{ width: '283.33px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '2px', height: '30px', backgroundColor: 'var(--color-accent)' }}></div>
            <Node title="IT Department" />
            <div style={{ width: '2px', height: '30px', backgroundColor: 'var(--color-accent)' }}></div>
            <Node title={<>Core Banking,<br/>Networking, ATMs,<br/>Data Centre</>} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default OrgStructure;
