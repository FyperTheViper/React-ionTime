import React from 'react';
import "./header.css";

const Header = () => {
    
	return (
		<header>
            <div className="header-container">
                <img src="./assets/nebula.png"  alt="nebula"/>
                <h1 className="row justify-content-center">Remember that World</h1>
            </div>
		</header >
	);
}

export default Header;