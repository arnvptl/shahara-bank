import React from 'react';
import { Helmet } from 'react-helmet-async';
import { UserCircle, Building2, FileCheck, MapPin, Users, Scale, FileText } from 'lucide-react';

const kycCategories = [
  {
    title: "Identity Proof (Any One)",
    icon: UserCircle,
    items: [
      "An Identity Card laminated, bearing seal and signature of issuer preferably Government, Semi-Government, Local Authority, Corporate Employer, Educational Institute, Banker etc.",
      "Election Identity Card",
      "Letter from District Magistrate for Election Commission",
      "PAN Card",
      "Pass Port",
      "Driving License"
    ]
  },
  {
    title: "Address Proof (Any One)",
    icon: MapPin,
    items: [
      "Ration Card",
      "Electricity Bill",
      "LIC Premium Payment Receipt",
      "Latest letter received from Post Office",
      "Telephone Bill",
      "Election Identity Card",
      "PAN Card",
      "Aadhar Card",
      "Passport Number"
    ]
  }
];

const entityCategories = [
  {
    title: "Individual",
    icon: UserCircle,
    items: [
      "Any of the photo identity cards or letters from a recognized public authority or public servant which verifies the identity",
      "Any document verifying current and permanent address, office address - in details",
      "Recent Photos"
    ]
  },
  {
    title: "Proprietary Concern",
    icon: Building2,
    items: [
      "KYC documents for proprietor as individual",
      "Proof of legal / commercial name, address and activity of the business concern such as registration certificate, Certificate of Institute of CAs, CWAs, CSs, Medical Council, SSI Registration",
      "Necessary certificates considering nature of business (FDA License, PCB License etc.)"
    ]
  },
  {
    title: "Limited Company",
    icon: FileText,
    items: [
      "Certificate of Registration",
      "Certificate of Commencement of Business",
      "Memorandum and Articles of Association",
      "Board Resolution for opening Account",
      "Power of Attorney [ Duly registered ] in favor of person/ persons, authorizes to operate the account and to transact the business on behalf of the company",
      "Usual documents of address proof of the principal office / branch of the company"
    ]
  },
  {
    title: "Partnership Firm",
    icon: Users,
    items: [
      "KYC documents of partners as individual",
      "Partnership deed (registered)",
      "Certificate of Registration",
      "Proof of legal / commercial name, address and activity of the business concern"
    ]
  },
  {
    title: "Trust / Clubs",
    icon: Scale,
    items: [
      "Certificate of Registration",
      "Trust Deed / Bye-laws",
      "Board / Committee Resolution",
      "KYC documents of authorized signatories as individual",
      "List of trustees / managing committee members with address and contact details"
    ]
  },
  {
    title: "HUF (Hindu Undivided Family)",
    icon: Users,
    items: [
      "KYC documents of Karta",
      "HUF Declaration signed by Karta and all adult coparceners",
      "Proof of address of HUF"
    ]
  }
];

const KYC = () => {
  return (
    <div className="section">
      <Helmet>
        <title>KYC Documents | Ahmednagar Shahar Sahakari Bank</title>
        <meta name="description" content="Know Your Customer (KYC) documentation requirements for opening an account with Shahar Bank." />
      </Helmet>

      <div className="container">
        <div className="section-header">
          <h2>KYC Documents Required</h2>
          <p className="text-muted">
            Know Your Customer (KYC) is essential for a secure banking experience. Please review the documents required based on your account type.
          </p>
        </div>

        {/* General Identity and Address Proofs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)', marginBottom: 'var(--spacing-2xl)' }}>
          {kycCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ backgroundColor: 'var(--color-primary)', padding: '1.5rem', display: 'flex', alignItems: 'center', color: 'var(--color-text-inverse)' }}>
                  <Icon style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.75rem', flexShrink: 0 }} />
                  <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'inherit' }}>{category.title}</h3>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {category.items.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', color: 'var(--color-text)', fontSize: '0.875rem' }}>
                        <FileCheck style={{ width: '1rem', height: '1rem', color: 'var(--color-accent)', marginRight: '0.75rem', flexShrink: 0, marginTop: '0.125rem' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Entity Specific Requirements */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>Specific Requirements by Account Type</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Additional documents required depending on your entity type</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
          {entityCategories.map((entity, index) => {
            const Icon = entity.icon;
            return (
              <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: 'var(--color-bg-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '0.75rem', flexShrink: 0 }}>
                    <Icon style={{ width: '1.25rem', height: '1.25rem', color: 'var(--color-primary)' }} />
                  </div>
                  <h3 style={{ margin: 0, fontSize: '1.125rem', color: 'var(--color-primary-dark)' }}>{entity.title}</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, flexGrow: 1 }}>
                  {entity.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', color: 'var(--color-text)', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
                      <div style={{ width: '0.375rem', height: '0.375rem', borderRadius: '50%', backgroundColor: 'var(--color-accent)', marginTop: '0.375rem', marginRight: '0.5rem', flexShrink: 0 }}></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default KYC;
