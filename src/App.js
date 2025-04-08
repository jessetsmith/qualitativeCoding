import React, { useState } from "react";
import "./App.css";
import TopMenu from "./components/TopMenu";
import SidePanel from "./components/SidePanel";
import MainContent from "./components/MainContent";
import JournalTabs from "./components/JournalTabs";

import busBP from "./assets/images/busBPHero.jpg";

function App() {
  const [journalContent, setJournalContent] = useState("");
  const [imageSrc, setImageSrc] = useState(busBP);

  const handleJournalClick = (content) => {
    setJournalContent(content);
  };

  const handleImageSelect = (src) => {
    setImageSrc(src);
  };

  return (
    <div className="App">
      <TopMenu />
      <div className="content-area">
        <SidePanel onSelect={handleImageSelect} />
        <MainContent imageSrc={imageSrc} />
      </div>
      <JournalTabs onJournalClick={handleJournalClick} />
      <div className="description">
        <p>{journalContent}</p>
      </div>
    </div>
  );
}

export default App;
