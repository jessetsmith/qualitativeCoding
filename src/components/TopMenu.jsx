import React, { useState } from 'react';
import './TopMenu.css';

function TopMenu() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const handleMouseEnter = (menu) => {
        setActiveDropdown(menu);
    };

    const handleSubmenuEnter = (submenu) => {
        setActiveSubmenu(submenu);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
        setActiveSubmenu(null);
    };

    return (
        <div className="top-menu">
            <div
                className="menu-item"
                onMouseEnter={() => handleMouseEnter('media')}
                onMouseLeave={handleMouseLeave}
            >
                <span>Media</span>
                {activeDropdown === 'media' && (
                    <div className="dropdown-content">
                        <div
                            className="dropdown-item"
                            onMouseEnter={() => handleSubmenuEnter('audio')}
                        >
                            <span>Audio</span>
                            {activeSubmenu === 'audio' && (
                                <div className="submenu-content">
                                    <a href="#bus-sounds" target="_blank" rel="noopener noreferrer">Bus Sounds</a>
                                    <a href="#bus-stop-sounds" target="_blank" rel="noopener noreferrer">Bus Stop Sounds</a>
                                    <a href="#methods" target="_blank" rel="noopener noreferrer">Methods Discussion</a>
                                    <a href="#passenger-sounds" target="_blank" rel="noopener noreferrer">Passenger Sounds</a>
                                    <a href="#passenger-sounds-2" target="_blank" rel="noopener noreferrer">Passenger Sounds 2</a>
                                    <a href="#sensory-mapping" target="_blank" rel="noopener noreferrer">Sensory Mapping</a>
                                    <a href="#transit-center" target="_blank" rel="noopener noreferrer">Tohono Transit Center</a>
                                </div>
                            )}
                        </div>
                        <div
                            className="dropdown-item"
                            onMouseEnter={() => handleSubmenuEnter('images')}
                        >
                            <span>Images</span>
                            {activeSubmenu === 'images' && (
                                <div className="submenu-content">
                                    <a href="#bus-bp-hero" target="_blank" rel="noopener noreferrer">Bus BP Hero</a>
                                    <a href="#bus-interior" target="_blank" rel="noopener noreferrer">Bus Interior</a>
                                    <a href="#bus-stop" target="_blank" rel="noopener noreferrer">Bus Stop</a>
                                    <a href="#curatorial-inquiry" target="_blank" rel="noopener noreferrer">Curatorial Inquiry</a>
                                    <a href="#digital-mapping" target="_blank" rel="noopener noreferrer">Digital Mapping Collage</a>
                                    <a href="#transit-center-mapping" target="_blank" rel="noopener noreferrer">Transit Center Mapping</a>
                                </div>
                            )}
                        </div>
                        <div
                            className="dropdown-item"
                            onMouseEnter={() => handleSubmenuEnter('videos')}
                        >
                            <span>Videos</span>
                            {activeSubmenu === 'videos' && (
                                <div className="submenu-content">
                                    <a href="https://drive.google.com/file/d/1727l0ulthvgNUYBeKf6e_QS13YGNdzyx/view?usp=sharing" target="_blank" rel="noopener noreferrer">SunTran Video 1</a>
                                    <a href="https://drive.google.com/file/d/17r7ZIl9bMMi4svrVjeAbxoFVET7XDMkN/view?usp=drive_link" target="_blank" rel="noopener noreferrer">SunTran Video 2</a>
                                    <a href="https://drive.google.com/file/d/1UfSn1lXedWYqZmYQqhlJzpelCA7i7KI5/view?usp=drive_link" target="_blank" rel="noopener noreferrer">SunTran Video 3</a>
                                    <a href="https://drive.google.com/file/d/18FhHyupJgEEjZpNiDklcVJJVlzbTXtoN/view?usp=drive_link" target="_blank" rel="noopener noreferrer">SunTran Video 4</a>
                                    <a href="https://drive.google.com/file/d/19V2y5CWBXCwflT20Jzk8_MB48mf9Dil4/view?usp=drive_link" target="_blank" rel="noopener noreferrer">SunTran Video 5</a>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div
                className="menu-item"
                onMouseEnter={() => handleMouseEnter('journals')}
                onMouseLeave={handleMouseLeave}
            >
                <span>Journals</span>
                {activeDropdown === 'journals' && (
                    <div className="dropdown-content">
                        <div
                            className="dropdown-item"
                            onMouseEnter={() => handleSubmenuEnter('efj')}
                        >
                            <span>Ethnographic Field Journals</span>
                            {activeSubmenu === 'efj' && (
                                <div className="submenu-content">
                                    <a href="#efj1-2" target="_blank" rel="noopener noreferrer">EFJ 1-2</a>
                                    <a href="#efj3-4" target="_blank" rel="noopener noreferrer">EFJ 3-4</a>
                                    <a href="#efj5-6" target="_blank" rel="noopener noreferrer">EFJ 5-6</a>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div
                className="menu-item"
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
            >
                <span>Resources</span>
                {activeDropdown === 'resources' && (
                    <div className="dropdown-content">
                        <div
                            className="dropdown-item"
                            onMouseEnter={() => handleSubmenuEnter('drive')}
                        >
                            <span>Drive Files</span>
                            {activeSubmenu === 'drive' && (
                                <div className="submenu-content">
                                    <a
                                        href="https://drive.google.com/drive/folders/1wtnqNGUr3rHDH9ceps5NiSnmHhRTbNQ7?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Full Data Collection
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div
                className="menu-item"
                onMouseEnter={() => handleMouseEnter('references')}
                onMouseLeave={handleMouseLeave}
            >
                <span>References</span>
                {activeDropdown === 'references' && (
                    <div className="dropdown-content">
                        <p>Coming Soon</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TopMenu;
