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
                                    <a href="#bus-sounds">Bus Sounds</a>
                                    <a href="#bus-stop-sounds">Bus Stop Sounds</a>
                                    <a href="#methods">Methods Discussion</a>
                                    <a href="#passenger-sounds">Passenger Sounds</a>
                                    <a href="#passenger-sounds-2">Passenger Sounds 2</a>
                                    <a href="#sensory-mapping">Sensory Mapping</a>
                                    <a href="#transit-center">Tohono Transit Center</a>
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
                                    <a href="#bus-bp-hero">Bus BP Hero</a>
                                    <a href="#bus-interior">Bus Interior</a>
                                    <a href="#bus-stop">Bus Stop</a>
                                    <a href="#curatorial-inquiry">Curatorial Inquiry</a>
                                    <a href="#digital-mapping">Digital Mapping Collage</a>
                                    <a href="#transit-center-mapping">Transit Center Mapping</a>
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
                                    <p>Coming Soon</p>
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
                                    <a href="#efj1-2">EFJ 1-2</a>
                                    <a href="#efj3-4">EFJ 3-4</a>
                                    <a href="#efj5-6">EFJ 5-6</a>
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
                        <p>Coming Soon</p>
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
