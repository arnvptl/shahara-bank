import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Clock, Map } from 'lucide-react';

const branchData = [
  {
    city: 'Ahilyanagar (Ahmednagar)',
    branches: [
      { id: 1, name: 'Navi Peth Branch', phone: '0241 - 2346217, 2343357', address: "'Sarvaarth', Navi peth, Ahilyanagar - 414 001" },
      { id: 2, name: 'Savedi Branch', phone: '0241 - 2430502, 2430652', address: "'Krutarth', Near Hotel Premdan, Survey.No. 176/1 Savedi Road, Ahilyanagar - 414 003" },
      { id: 3, name: 'Maliwada Branch', phone: '0241 - 2343439, 2417203', address: "'Kruparth', Malivada Ves Chowk, Wadiya Park Road, Ahilyanagar - 414 001" },
      { id: 4, name: 'Zedigate Branch', phone: '0241 - 2341849, 2417204', address: "2177 - A, Bansimaharaj Mithaiwala Building, Aadte Bazar Corner, Tapkir Galli, Ramchandra Khunt. Ahilyanagar - 414 001" },
      { id: 5, name: 'Marketyard Branch', phone: '0241 - 2452268, 2417505', address: "'Shubharth', Korpe Building, Mahatma Phule Chowk, Ahilyanagar - 414 001" },
      { id: 6, name: 'Gulmohar Road Branch', phone: '0241 - 2424061, 2417206', address: "Gulmohar Road, Opp. Parijat Corner, Ahilyanagar - 414 003" },
      { id: 7, name: 'M.I.D.C. Branch', phone: '0241 - 2778280, 2417207', address: "'Aarthkam', The Place Shop No. 1 To 7, Nagar-Manmad Road, Nagapur Ahilyanagar ." },
      { id: 8, name: 'Manmad Road Branch', phone: '0241 - 2426174, 2417208', address: "'Tapasya', Bhide Hospital Chowk, Shubh Mangal Karyalaya, Near Rajdeep House, Ahilyanagar ." },
      { id: 9, name: 'Supa M.I.D.C. Branch', phone: '02488 - 243683', address: "'Udyam', Yenare Complex, Valavne Road, Supa, Tal- Parner, Ahilyanagar ." },
      { id: 10, name: 'Kedgaon Nepti Bazar Samiti Branch', phone: '-', address: "Ahmednagar-Pune Road Highway, Deshmukh Petrol Pump Complex, Kedgaon, Ahilyanagar ." },
      { id: 11, name: 'Tarakpur Branch', phone: '0241 - 2320553, 2320554', address: "Prerna Arcade, wing 'C', Shop No. 7 to 14, Opp. Tarakpur Bus Stand, Ahilyanagar ." },
      { id: 12, name: 'Rahuri Branch', phone: '02426 - 232232', address: "'Setu', Shivaji Chowk, Rahuri, Ahilyanagar ." },
      { id: 13, name: 'Sangamner Branch', phone: '02425 - 221222', address: "Lohe Property Opp. Dr.Shinde Hospital, New Nagar Road, Tal -Sangamner, Dist - Ahilyanagar ." }
    ]
  },
  {
    city: 'Pune',
    branches: [
      { id: 14, name: 'Pimpri Branch', phone: '020 - 27432744', address: "'Satsang', Survey No. 103(P) to 108 (P), Near Ajmera Uddyam Nagar, Nehru Nagar Road, Pimpri, Pune - 18" },
      { id: 15, name: 'Narayan peth, Pune', phone: '020 - 24443232', address: "'Narayani', Savitri Sadan, Opp.Narayan Peth Police Chowki, Narayan Peth, Pune." }
    ]
  },
  {
    city: 'Aurangabad',
    branches: [
      { id: 16, name: 'Garkheda Branch', phone: '0240 - 2344636', address: "Plot No. 8,Shivneri Nagar, Opp. Jawahar Nagar Police Station, Garkheda Parisar, Aurangabad." }
    ]
  },
  {
    city: 'Nashik',
    branches: [
      { id: 17, name: 'Indira Nagar Branch', phone: '0253 - 2392900', address: "'Mukund', Shreeji Kunj Appartment, Gala No.2,3 & 4 Opp. Nashik Cambridge School, Wadala- Pathardi Road, Indira Nagar, Nashik - 9" }
    ]
  }
];

const OurBranches = () => {
  return (
    <div className="section page-fade-in">
      <Helmet>
        <title>Our Branches | Ahmednagar Shahar Sahakari Bank</title>
        <meta name="description" content="Find the nearest branch of Ahmednagar Shahar Sahakari Bank in Ahmednagar, Pune, Aurangabad, and Nashik." />
      </Helmet>

      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Our Branches</h1>
          <p className="section-subtitle">We are closer to you than ever. Find a branch near you.</p>
        </div>

        <div className="card" style={{ marginBottom: '2rem', backgroundColor: 'var(--color-bg-alt)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
            <Clock size={24} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>General Working Hours</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div>
              <strong>Monday To Saturday:</strong><br/>
              10:00 to 6:00 (Working Hours)<br/>
              10:00 to 2:00 (Cash Hours)<br/>
              02:30 to 5:30 (Cash Hours)
            </div>
            <div>
              <strong>Holidays:</strong><br/>
              2nd & 4th Saturday Off<br/>
              Sunday - Weekly Off
            </div>
          </div>
        </div>

        {branchData.map((cityGroup) => (
          <div key={cityGroup.city} style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
              <Map size={28} color="var(--color-primary)" />
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                {cityGroup.city} Branches
              </h2>
            </div>
            
            <div className="grid">
              {cityGroup.branches.map((branch) => (
                <div key={branch.id} className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>{branch.name}</h3>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <MapPin size={20} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '0.25rem' }} />
                    <p style={{ color: 'var(--color-text)', lineHeight: '1.5' }}>{branch.address}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <Phone size={20} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                    <p style={{ color: 'var(--color-text)' }}>{branch.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBranches;
