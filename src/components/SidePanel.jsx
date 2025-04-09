import React, { useState, useRef } from 'react';
import './SidePanel.css';

let busStopSounds = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2074170340%3Fsecret_token%3Ds-d7doqZ4HoBd&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>';
let busSounds = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2074170352%3Fsecret_token%3Ds-zHObXTgMWaw&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>';
let methodsDiscussion = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2074170348%3Fsecret_token%3Ds-Zpy1PjrMGTm&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>';
let passengerSounds = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2074170328%3Fsecret_token%3Ds-FV8Re6Iupk5&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>';
let passengerSounds2 = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2074170332%3Fsecret_token%3Ds-PMRHjThWYSB&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>';
let sensoryMapping = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2074170344%3Fsecret_token%3Ds-eA1VfmkAc7d&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>';
let tohonoTransitCenter = '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2074170336%3Fsecret_token%3Ds-IVxaRMNgggi&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>';

function SidePanel() {
  const [currentAudioEmbed, setCurrentAudioEmbed] = useState('');
  const optionsContainerRef = useRef(null);

  const scrollToNext = () => {
    if (optionsContainerRef.current) {
      const containerHeight = optionsContainerRef.current.clientHeight;
      const scrollAmount = containerHeight / 4; // Height of one option approximately
      optionsContainerRef.current.scrollTop += scrollAmount;
    }
  };

  const options = {
    'Bus Sounds': {
      audio: busSounds,
      title: 'Bus Sounds'
    },
    'Bus Stop Sounds': {
      audio: busStopSounds,
      title: 'Bus Stop Sounds'
    },
    'Methods Discussion': {
      audio: methodsDiscussion,
      title: 'Methods Discussion'
    },
    'Passenger Sounds': {
      audio: passengerSounds,
      title: 'Passenger Sounds'
    },
    'Passenger Sounds 2': {
      audio: passengerSounds2,
      title: 'Passenger Sounds 2'
    },
    'Sensory Mapping': {
      audio: sensoryMapping,
      title: 'Sensory Mapping'
    },
    'Transit Center': {
      audio: tohonoTransitCenter,
      title: 'Tohono Transit Center'
    }
  };

  const handleSelect = (option) => {
    setCurrentAudioEmbed(option.audio);
  };

  return (
    <div className="side-panel">
      <div className="audio-player-container" dangerouslySetInnerHTML={{ __html: currentAudioEmbed }} />

      <div className="options-container" ref={optionsContainerRef}>
        {Object.entries(options).map(([key, value]) => (
          <div key={key} className="panel-item">
            <div
              onClick={() => handleSelect(value)}
              className="panel-button"
            >
              {key}
            </div>
          </div>
        ))}
      </div>

      <button className="scroll-button" onClick={scrollToNext}>
        ↓
      </button>
    </div>
  );
}

export default SidePanel; 