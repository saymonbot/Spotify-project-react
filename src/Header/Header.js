import React from "react";
import './Header.css';
import smallRight from '../assets/icons/small-right.png';
import smallLeft from '../assets/icons/small-left.png';
import search from '../assets/icons/search.png';

const Header = () => {
    return (
        <nav class="header_navigation">
            <div class="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Arrow to left" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="Arrow to right"/>
                </button>
                <button className="header_search">
                    <img src={search} alt=""/>
                    <input    
                        maxLength="800"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        placeholder="O que você quer ouvir?"
                        value=""
                    />
                </button>
            </div>
            <div className="header_login">
                <button className="subscribe">Sign up</button>
                <button className="login">Log in</button>
            </div>
        </nav>
    )
};

export default Header;