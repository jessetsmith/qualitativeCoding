import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TopMenu.css';

function TopMenu() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleMobileDropdownClick = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    const handleMobileSubmenuClick = (submenu) => {
        setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
    };

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
        setActiveSubmenu(null);
    };

    return (
        <>
            <div className="top-menu">
                <button 
                    className="hamburger-button"
                    onClick={handleMobileMenuToggle}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
                </button>
                <div className={`menu-items ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                    <div className="menu-item">
                        <Link to="/" className="menu-link" onClick={handleLinkClick}>
                            <span>Home</span>
                        </Link>
                    </div>
                    <div
                        className="menu-item"
                        onMouseEnter={() => handleMouseEnter('qualitative')}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleMobileDropdownClick('qualitative')}
                    >
                        <span>Qualitative Research</span>
                        {activeDropdown === 'qualitative' && (
                            <div className="dropdown-content">
                                <Link to="/ethnographic" className="dropdown-item-link" onClick={handleLinkClick}>
                                    <span>Field Research</span>
                                </Link>
                            </div>
                        )}
                    </div>

                    <div
                        className="menu-item"
                        onMouseEnter={() => handleMouseEnter('litReview')}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleMobileDropdownClick('litReview')}
                    >
                        <span>Lit Review</span>
                        {activeDropdown === 'litReview' && (
                            <div className="dropdown-content">
                                <Link to="/infographic" className="dropdown-item-link" onClick={handleLinkClick}>
                                    <span>Reframing Resilience</span>
                                </Link>
                                <Link to="/references" className="dropdown-item-link" onClick={handleLinkClick}>
                                    <span>References</span>
                                </Link>
                            </div>
                        )}
                    </div>

                    <div
                        className="menu-item"
                        onMouseEnter={() => handleMouseEnter('media')}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleMobileDropdownClick('media')}
                    >
                        <span>Media</span>
                        {activeDropdown === 'media' && (
                            <div className="dropdown-content">
                                <div
                                    className="dropdown-item"
                                    onMouseEnter={() => handleSubmenuEnter('audio')}
                                    onClick={() => handleMobileSubmenuClick('audio')}
                                >
                                    <span>Audio</span>
                                    {activeSubmenu === 'audio' && (
                                        <div className="submenu-content">
                                            <a href="https://drive.google.com/file/d/1Yg_3K-nk5euKTT4rRdCfNfOkoXz7ike2/view?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Bus Sounds</a>
                                            <a href="https://drive.google.com/file/d/1azA7XOJVPBP82syp2RhF83xGGkz8qWW7/view?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Bus Stop Sounds</a>
                                            <a href="https://drive.google.com/file/d/1o1n6V-aaoFPk8tNz1NTdoT9rEdUx50K-/view?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Methods Discussion</a>
                                            <a href="https://drive.google.com/file/d/1GYkUbKBTrK_HSJ2G_F2qE071ayVkFnVB/view?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Passenger Sounds</a>
                                            <a href="https://drive.google.com/file/d/1AnvDeXe8ADw42JVoVMhYUPrttR065WX4/view?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Passenger Sounds 2</a>
                                            <a href="#sensory-mapping" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Sensory Mapping</a>
                                            <a href="https://drive.google.com/file/d/1vylPQ8xOjcLWlmU6XACzRpHLPXx0gqlD/view?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Tohono Transit Center</a>
                                        </div>
                                    )}
                                </div>
                                <div
                                    className="dropdown-item"
                                    onMouseEnter={() => handleSubmenuEnter('images')}
                                    onClick={() => handleMobileSubmenuClick('images')}
                                >
                                    <span>Images + Videos</span>
                                    {activeSubmenu === 'images' && (
                                        <div className="submenu-content">
                                            <a href="https://drive.google.com/drive/folders/1WWa0w394ScHErY20fUzhmomYHa_QMxPe?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Go To Full Album</a>
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
                        onClick={() => handleMobileDropdownClick('journals')}
                    >
                        <span>Journals</span>
                        {activeDropdown === 'journals' && (
                            <div className="dropdown-content">
                                <div
                                    className="dropdown-item"
                                    onMouseEnter={() => handleSubmenuEnter('efj')}
                                    onClick={() => handleMobileSubmenuClick('efj')}
                                >
                                    <span>Qualitative Field Journals</span>
                                    {activeSubmenu === 'efj' && (
                                        <div className="submenu-content">
                                            <a href="https://drive.google.com/file/d/1Zlxj5MrV1pKAz3zcbdMKO9aio3m1Gt3Y/view?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>EFJ 1-2</a>
                                            <a href="https://drive.google.com/file/d/1QBz7dUqgS-oxfmzZXGsTPN0XL1UTNxE0/view?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>EFJ 3-4</a>
                                            <a href="https://drive.google.com/file/d/1sokkrJAhsKn24MNG_aYPtsO8PzElx5y2/view?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>EFJ 5-6</a>
                                            <a href="https://drive.google.com/file/d/1u1qNsAVEttQkcUEgzgleLyHZ3-E0Vtst/view?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Analysis</a>
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
                        onClick={() => handleMobileDropdownClick('resources')}
                    >
                        <span>Resources</span>
                        {activeDropdown === 'resources' && (
                            <div className="dropdown-content">
                                <div
                                    className="dropdown-item dropdown-item-left"
                                    onMouseEnter={() => handleSubmenuEnter('drive')}
                                    onClick={() => handleMobileSubmenuClick('drive')}
                                >
                                    <span>Drive Files</span>
                                    {activeSubmenu === 'drive' && (
                                        <div className="submenu-content submenu-content-left">
                                            <a
                                                href="https://drive.google.com/drive/folders/1wtnqNGUr3rHDH9ceps5NiSnmHhRTbNQ7?usp=sharing"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={handleLinkClick}
                                            >
                                                View Full Data Collection
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {mobileMenuOpen && (
                <div className="mobile-menu-overlay" onClick={handleMobileMenuToggle}></div>
            )}
        </>
    );
}

export default TopMenu;
