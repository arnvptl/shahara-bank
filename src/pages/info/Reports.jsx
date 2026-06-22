import { Helmet } from 'react-helmet-async';
import { FileText, Archive } from 'lucide-react';

const Reports = () => {
  const reports = [
    { name: "53rd Annual Report 2023-24", file: "/53Rpt-2023-24.pdf.pdf", type: "pdf" },
    { name: "52nd Annual Report 2022-23", file: "/52Rpt-2022-23.pdf", type: "pdf" },
    { name: "51st Annual Report 2021-22", file: "/51Rpt-2021-22.pdf", type: "pdf" },
    { name: "50th Annual Report 2020-21", file: "/50Rpt-2020-21.pdf", type: "pdf" },
    { name: "49th Annual Report 2019-20", file: "/49Rpt-2019-20.pdf", type: "pdf" },
    { name: "48th Annual Report 2018-19", file: "/48Rpt-2018-19.pdf", type: "pdf" },
    { name: "47th Annual Report 2017-18", file: "/47Rpt-2017-18.zip", type: "zip" },
    { name: "46th Annual Report 2016-17", file: "/46Rpt-2016-17.zip", type: "zip" }
  ];

  return (
    <div className="section">
      <Helmet>
        <title>Annual Reports | Ahmednagar Shahar Sahakari Bank</title>
        <meta name="description" content="Download and view the Annual Reports and financial statements of Ahmednagar Shahar Sahakari Bank Ltd." />
      </Helmet>

      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="section-header">
          <h2>Annual Reports</h2>
          <p className="text-muted">Transparency and trust through our financial disclosures.</p>
        </div>

        <div className="card">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {reports.map((report, index) => (
              <li key={index} style={{ borderBottom: index === reports.length - 1 ? 'none' : '1px solid var(--color-border)', padding: '1rem 0' }}>
                <a href={report.file} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--color-text)', textDecoration: 'none', fontWeight: '500' }} className="hover-primary">
                  {report.type === 'pdf' ? <FileText color="var(--color-error)" /> : <Archive color="var(--color-primary)" />}
                  <span style={{ flexGrow: 1 }}>{report.name}</span>
                  <span style={{ color: 'var(--color-primary)', fontSize: '0.875rem' }}>Download</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reports;
