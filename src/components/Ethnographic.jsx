import React, { useState } from "react";
import SidePanel from "./SidePanel";
import MainContent from "./MainContent";
import JournalTabs from "./JournalTabs";
import busBP from "../assets/images/busBPHero.jpg";

function Ethnographic() {
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

export default Ethnographic;

