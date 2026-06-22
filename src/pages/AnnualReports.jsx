import React from 'react';
import { Helmet } from 'react-helmet-async';
import './PageLayout.css';

const AnnualReports = () => {
  const reports = [
    { name: "54th Annual Report", year: "2024 - 2025", link: "/54Shahar2425.pdf" },
    { name: "53rd Annual Report", year: "2023 - 2024", link: "/53Rpt-2023-24.pdf.pdf" },
    { name: "52nd Annual Report", year: "2022 - 2023", link: "/52Rpt-2022-23.pdf" },
    { name: "51st Annual Report", year: "2021 - 2022", link: "/51Rpt-2021-22.pdf" },
    { name: "50th Annual Report", year: "2020 - 2021", link: "/50Rpt-2020-21.pdf" },
    { name: "49th Annual Report", year: "2019 - 2020", link: "/49Rpt-2019-20.pdf" },
    { name: "48th Annual Report", year: "2018 - 2019", link: "/48Rpt-2018-19.pdf" },
    { name: "47th Annual Report", year: "2017 - 2018", link: "/47Rpt-2017-18.zip" },
    { name: "46th Annual Report", year: "2016 - 2017", link: "/46Rpt-2016-17.zip" },
    { name: "45th Annual Report", year: "2015 - 2016", link: "/45Rpt-2015-16.zip" },
    { name: "44th Annual Report", year: "2014 - 2015", link: "/44rpt.zip" },
    { name: "43rd Annual Report", year: "2013 - 2014", link: "/43rpt.zip" },
    { name: "42nd Annual Report", year: "2012 - 2013", link: "/42rpt.zip" },
    { name: "41st Annual Report", year: "2011 - 2012", link: "/41rpt.zip" },
    { name: "40th Annual Report", year: "2010 - 2011", link: "/40rpt.zip" },
    { name: "39th Annual Report", year: "2009 - 2010", link: "/39rpt.zip" },
    { name: "38th Annual Report", year: "2008 - 2009", link: "/38rpt.zip" },
    { name: "37th Annual Report", year: "2007 - 2008", link: "/37rpt.zip" },
    { name: "36th Annual Report", year: "2006 - 2007", link: "/36rpt.zip" },
    { name: "35th Annual Report", year: "2005 - 2006", link: "/35rpt.zip" }
  ];

  return (
    <>
      <Helmet>
        <title>Annual Reports - Ahmednagar Shahar Sahakari Bank</title>
        <meta name="description" content="Download Annual Reports of Ahmednagar Shahar Sahakari Bank." />
      </Helmet>
      
      <div className="page-container">
        <div className="page-header">
          <h1>Annual Reports</h1>
          <div className="header-underline"></div>
        </div>
        
        <div className="page-content">
          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Annual Report</th>
                  <th>Year</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report, index) => (
                  <tr key={index}>
                    <td><strong>{report.name}</strong></td>
                    <td><strong>{report.year}</strong></td>
                    <td>
                      <a href={report.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnnualReports;
