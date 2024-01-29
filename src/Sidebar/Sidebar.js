import React from "react";
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar_navigation">
                <div className="logo">
                    <a href="">
                        <img src="src\assets\icons\logo-spotify.png" alt="Spotify logo - Redirect to home" />
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <span className="fa fa-home"></span>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span className="fa fa-search"></span>
                            <span>Search</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="library">
                <div className="library_content">
                    <button className="library_button">
                        <span className="fa fas fa-book"></span>
                        <span>Your Library</span>
                    </button>
                    <span className="fa fa-plus"></span>
                </div>
                <section className="section-playlist">
                    <div className="section-playlist_content">
                        <span className="text title">Create your first playlist</span>
                        <span className="text subtitle">It's easy, we'll help you</span>
                        <button className="section-playlist_button">
                            <span>Create playlist</span>
                        </button>
                    </div>
                </section>
                <div className="cookies">
                    <a href="">Cookies</a>
                </div>
                <div className="languages">
                    <button className="languages_button">
                        <span className="fa fa-globe"></span>
                        <span>English</span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;