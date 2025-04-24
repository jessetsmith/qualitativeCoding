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
                                    <a href="https://drive.google.com/file/d/1Yg_3K-nk5euKTT4rRdCfNfOkoXz7ike2/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Bus Sounds</a>
                                    <a href="https://drive.google.com/file/d/1azA7XOJVPBP82syp2RhF83xGGkz8qWW7/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Bus Stop Sounds</a>
                                    <a href="https://drive.google.com/file/d/1o1n6V-aaoFPk8tNz1NTdoT9rEdUx50K-/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Methods Discussion</a>
                                    <a href="https://drive.google.com/file/d/1GYkUbKBTrK_HSJ2G_F2qE071ayVkFnVB/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Passenger Sounds</a>
                                    <a href="https://drive.google.com/file/d/1AnvDeXe8ADw42JVoVMhYUPrttR065WX4/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Passenger Sounds 2</a>
                                    <a href="#sensory-mapping" target="_blank" rel="noopener noreferrer">Sensory Mapping</a>
                                    <a href="https://drive.google.com/file/d/1vylPQ8xOjcLWlmU6XACzRpHLPXx0gqlD/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Tohono Transit Center</a>
                                </div>
                            )}
                        </div>
                        <div
                            className="dropdown-item"
                            onMouseEnter={() => handleSubmenuEnter('images')}
                        >
                            <span>Images + Videos</span>
                            {activeSubmenu === 'images' && (
                                <div className="submenu-content">
                                    <a href="https://drive.google.com/drive/folders/1WWa0w394ScHErY20fUzhmomYHa_QMxPe?usp=drive_link" target="_blank" rel="noopener noreferrer">Got To Full Album</a>

                                </div>
                            )}
                        </div>
                        {/* <div
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
                        </div> */}
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
                                    <a href="https://drive.google.com/file/d/1Zlxj5MrV1pKAz3zcbdMKO9aio3m1Gt3Y/view?usp=drive_link" target="_blank" rel="noopener noreferrer">EFJ 1-2</a>
                                    <a href="https://drive.google.com/file/d/1QBz7dUqgS-oxfmzZXGsTPN0XL1UTNxE0/view?usp=drive_link" target="_blank" rel="noopener noreferrer">EFJ 3-4</a>
                                    <a href="https://drive.google.com/file/d/1sokkrJAhsKn24MNG_aYPtsO8PzElx5y2/view?usp=drive_link" target="_blank" rel="noopener noreferrer">EFJ 5-6</a>
                                    <a href="https://drive.google.com/file/d/1u1qNsAVEttQkcUEgzgleLyHZ3-E0Vtst/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Analysis</a>
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
