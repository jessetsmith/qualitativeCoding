import React, { useState, useRef } from 'react';
import './SidePanel.css';
import busSounds from '../assets/audio/busSounds.m4a';
import busStopSounds from '../assets/audio/busStopSounds.m4a';
import methodsDiscussion from '../assets/audio/methodsDiscussion.m4a';
import passengerSounds from '../assets/audio/passengerSounds.m4a';
import passengerSounds2 from '../assets/audio/passengerSounds2.m4a';
import sensoryMapping from '../assets/audio/sensoryMapping.m4a';
import tohonoTransitCenter from '../assets/audio/tohonoTransitCenter.m4a';

function SidePanel() {
  const [currentAudioSrc, setCurrentAudioSrc] = useState('');
  const audioRef = useRef(null);
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

  const handleSelect = async (option) => {
    // If there's currently playing audio, pause it
    if (audioRef.current) {
      audioRef.current.pause();
    }

    setCurrentAudioSrc(option.audio);

    if (audioRef.current) {
      try {
        // Wait for the audio to be loaded
        await new Promise((resolve) => {
          audioRef.current.oncanplaythrough = resolve;
          audioRef.current.load();
        });

        // Now play the audio
        await audioRef.current.play();
      } catch (e) {
        console.error('Error playing audio:', e);
      }
    }
  };

  return (
    <div className="side-panel">
      <div className="audio-player-container">
        <audio ref={audioRef} controls className="main-audio-player">
          {currentAudioSrc && <source src={currentAudioSrc} type="audio/mpeg" />}
          Your browser does not support the audio element.
        </audio>
      </div>

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