import React, { useState } from 'react';
import './JournalTabs.css';

function JournalTabs() {
  const [selectedTab, setSelectedTab] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');

  // Update the journals object to contain PDF URLs
  const journals = {
    'EFJ 1 - 2': 'https://drive.google.com/file/d/1NmmULOi4QCKgxathxcCf4LBfsGg6RvWn/preview?usp=sharing',
    'EFJ 3 - 4': 'https://drive.google.com/file/d/1U9MBneS4Sx2TbifocChKWzQUxbkXzTbT/preview?usp=sharing',
    'EFJ 5 - 6': 'https://drive.google.com/file/d/1lD5wVPCv336SFwGNI7qhjvh0so92QQy1/preview?usp=sharing',
    'ANALYSIS': 'https://drive.google.com/file/d/1lD5wVPCv336SFwGNI7qhjvh0so92QQy1/preview?usp=sharing'
  };

  const handleClick = (key) => {
    setSelectedTab(key);
    setPdfUrl(journals[key]);
  };

  return (
    <div>
      <div className="journal-tabs">
        {Object.keys(journals).map((key) => (
          <button
            key={key}
            onClick={() => handleClick(key)}
            className={selectedTab === key ? 'selected' : ''}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="pdf-content">
        {pdfUrl && (
          <iframe
            src={pdfUrl}
            title="PDF Viewer"
            width="100%"
            height="600px"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}

export default JournalTabs; 