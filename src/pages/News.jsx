import React from 'react';
import { Helmet } from 'react-helmet-async';
import ZoomableImage from '../components/ZoomableImage';
import './PageLayout.css';

const News = () => {
  const newsEvents = [
    {
      title: "Opening Ceremony of Bank’s 20th Newest Branch at Nashik",
      date: "3 September 2016",
      description: "Smt. Devyani Farande, Vidhan Sabha, Maharashtra, and Ashok Katariya, Ashoka Buildcon inaugurating Bank’s Newest Branch at Nashik. Witnessed by CA Vikrant Kulkarni, Anirudh Bhandarkar, Chairman Dr. Vijaykumar Bhandari, Vice Chairman Nileema Potdar, Subhash Gundecha, CA Girish Ghaisas, and other esteemed members.",
      images: [
        "/images/NAE78_Nashik01.jpg", "/images/NAE78_Nashik02.jpg", "/images/NAE78_Nashik03.jpg",
        "/images/NAE78_Nashik04.jpg", "/images/NAE78_Nashik05.jpg", "/images/NAE78_Nashik06.jpg"
      ]
    },
    {
      title: "Opening Ceremony of Bank’s 19th Newest Branch at Sangamner",
      date: "19 June 2016",
      description: "Shri. Balasaheb Thorat, Maji Mahsul Mantri, Maharashtra, and Sanjayji Malpani inaugurating Bank’s Newest Branch at Sangamner. Witnessed by Sudhirji Tambe, Durgatai Tambe, Chairman Dr. Vijaykumar Bhandari, Vice Chairman Nileema Potdar, and other board members.",
      images: [
        "/images/NAE77_Sangamner.jpg", "/images/NAE76_1_Sangamner.jpg", "/images/NAE76_Sangamner.jpg",
        "/images/NAE75_Sangamner.jpg", "/images/NAE74_Sangamner.jpg", "/images/NAE73_Sangamner.jpg"
      ]
    },
    {
      title: "Ujawal Power Generation Export Event",
      date: "3 February 2016",
      description: "आपल्या बॅंकेने वित्तीय सहाय्यता केलेल्या श्री.अनिल साळी यांच्या उज्वल पॉवर जनरेशन प्रायव्हेट लिमिटेड या कंपनीने उत्पादनाचा पहिला कंटेनर इटली या देशाला निर्यात केला. त्या प्रसंगी बॅंकेचे चेअरमन श्री.डॉ.विजयकुमार भंडारी, संस्थापक, संचालक श्री.प्रा.मुंकुद घैसास व इतर मान्यवर उपस्थित होते.",
      images: [
        "/images/NAE68_Ujawal.jpg"
      ]
    },
    {
      title: "Opening Ceremony of Bank’s 18th Newest Branch at Rahuri",
      date: "21 February 2016",
      description: "Shri. Shashank Ketkar, Actor, inaugurating Bank’s Newest Branch at Rahuri. International Chess Grandmaster Shardul Gagare, and witnessed by Jain Shravak Sangh Chairman Chandanmal Surana, Chairman Dr. Vijaykumar Bhandari, and others.",
      images: [
        "/images/NAE69_Rahuri1.jpg", "/images/NAE69_Rahuri2.jpg", "/images/NAE69_Rahuri3.jpg",
        "/images/NAE69_Rahuri4.jpg", "/images/NAE69_Rahuri5.jpg", "/images/NAE69_Rahuri6.jpg"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Latest News & Events - Ahmednagar Shahar Sahakari Bank</title>
        <meta name="description" content="Latest News and Events at Ahmednagar Shahar Sahakari Bank." />
      </Helmet>
      
      <div className="page-container">
        <div className="page-header">
          <h1>Latest News & Events</h1>
          <div className="header-underline"></div>
        </div>
        
        <div className="page-content">
          <div className="news-container">
            {newsEvents.map((event, index) => (
              <div key={index} className="news-card">
                <h2 className="news-title">{event.title}</h2>
                <p className="news-date"><strong>Date:</strong> {event.date}</p>
                <p className="news-desc">{event.description}</p>
                <div className="news-gallery gallery-grid">
                  {event.images.map((img, idx) => (
                    <div key={idx} className="gallery-item">
                      <ZoomableImage src={img} alt={`Event Photo ${idx + 1}`} className="content-image" />
                    </div>
                  ))}
                </div>
                {index < newsEvents.length - 1 && <hr className="news-divider" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
