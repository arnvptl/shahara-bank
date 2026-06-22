import React from 'react';
import { Helmet } from 'react-helmet-async';
import ZoomableImage from '../components/ZoomableImage';
import './PageLayout.css';

const Achievements = () => {
  const achievements = [
    {
      title: "Banking FRONTIERS Award for 'BEST Chairman'",
      date: "12 October 2012",
      description: "Awarded for the Year 2012 to Hon. C.A. Shri. Girish Ghaisas.",
      image: "/images/Achiev010.jpg"
    },
    {
      title: "Banking FRONTIERS Award For 'BEST Branding Project Award'",
      date: "12 October 2012",
      description: "Awarded for the Year 2012 to Ahmednagar Shahar Shahakari Bank. Received by Our Directors: Chairman Shri. Subhash Gundecha, Vice Chairman Shri. Shivaji Kadam, C.A. Shri. Girish Ghaisas, C.E.O. Shri. D. Y. Kulkarni.",
      image: "/images/Achiev011.jpg"
    },
    {
      title: "Udayonmukh Tarun Sahakari Karyakarta",
      date: "12 September 2012",
      description: "The Maharashtra State Co-Operative Banks Association’s (MSCBA) award for 2012 is awarded to our Hon. Director and Ex-Chairman Shri. CA Girish Ghaisas By State Co-Operation Minister Hon. Shri. Harshwardhan Patil, And Yuva Rastriya Sant, Respected Shri. Bhayuuji Maharaj, Along with them Our Directors.",
      image: "/images/Achiev007.jpg"
    },
    {
      title: "The Best Bank Award for best managed banks",
      date: "2010",
      description: "Awarded by The Maharashtra Urban Co-op Banks Federation Mumbai.",
      image: "/images/Achiev001.JPG"
    },
    {
      title: "Frontier in Co-Operative Award",
      date: "2010",
      description: "Receiving Award of “Frontier in Co-Operative” by Chairman of the Bank Hon. Shri. Satish Adgatala with Board of Directors by the hand of Publisher “Banking Frontiers” Magazine.",
      image: "/images/N1.jpg"
    },
    {
      title: "Late Padmabhushan Vasantdada Patil, Best Corporative Bank Award",
      date: "07 August 2010",
      description: "Received by Chairman of the bank Shri Satish Adgatala, Prof. Mukund Ghaisas and Board of Directors. Ceremony organised by The Maharashtra State Co-Op Bank Association Ltd. Mumbai.",
      image: "/images/N06.JPG"
    },
    {
      title: "Best Customer Service and Networking Award",
      date: "23 October 2010",
      description: "Received by Chairman of the bank Shri Satish Adgatala and Board of Directors. Ceremony organised by Banking Frontiers, Mumbai.",
      image: "/images/N07.JPG"
    },
    {
      title: "Best Bank Award",
      date: "11 November 2010",
      description: "Received by Founder Director Prof. Mukund Ghaisas and Board of Directors. Ceremony organised by The Maharashtra State Co-Op Bank Federation Ltd. Mumbai.",
      image: "/images/N08.JPG"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Achievements - Ahmednagar Shahar Sahakari Bank</title>
        <meta name="description" content="Achievements and Awards won by Ahmednagar Shahar Sahakari Bank." />
      </Helmet>
      
      <div className="page-container">
        <div className="page-header">
          <h1>Bank Achievements</h1>
          <div className="header-underline"></div>
        </div>
        
        <div className="page-content">
          <p style={{ textAlign: 'center', marginBottom: '30px' }}>
            Our organisation received multiple awards in a very short time span. It was possible only with great efforts taken by all our Members and we really proud of it. With tremendous support, Participation, greetings of many people we achieved this success. We dedicate this success to those involved in this. We urge you to become part of this success.
          </p>

          <div className="achievements-list">
            {achievements.map((item, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-image">
                  <ZoomableImage src={item.image} alt={item.title} />
                </div>
                <div className="achievement-details">
                  <h3>{item.title}</h3>
                  <p className="achievement-date"><strong>Date:</strong> {item.date}</p>
                  <p className="achievement-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title" style={{ marginTop: '40px' }}>Additional Achievements Gallery</h2>
          <div className="gallery-grid">
             <div className="gallery-item"><ZoomableImage src="/images/Award01.JPG" alt="Award 1" className="content-image" /></div>
             <div className="gallery-item"><ZoomableImage src="/images/Award02.JPG" alt="Award 2" className="content-image" /></div>
             <div className="gallery-item"><ZoomableImage src="/images/Award03.JPG" alt="Award 3" className="content-image" /></div>
             <div className="gallery-item"><ZoomableImage src="/images/Achiev002.JPG" alt="Award 4" className="content-image" /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
