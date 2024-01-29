import React from "react";
import './Playlist.css';

const Playlist = () => {
    return (
        <div className="playlist-container">
            <div id="result-playlists">
                <div className="playlist">
                    <h1 id="greeting">Welcome</h1>
                    <h2 className="session">All sections</h2>
                </div>

                <div className="offer_scroll-container">
                    <div className="offer_list">
                        <section className="offer_list-item">

                            <a href="" className="cards">
                                <div className="cards card1">
                                    <img src="src\assets\playlist\playlist\1.jpeg" alt="" />
                                    <span>Boas festas</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card2">
                                    <img src="src\assets\playlist\playlist\2.png" alt="" />
                                    <span>Feitos para você</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card3">
                                    <img src="./src/assets/playlist/playlist/3.jpeg" alt="" />
                                    <span>Lançamentos</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card4">
                                    <img src="./src/assets/playlist/playlist/4.jpeg" alt="" />
                                    <span>Creators</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card5">
                                    <img src="./src/assets/playlist/playlist/5.jpeg" alt="" />
                                    <span>Para treinar</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card6">
                                    <img src="./src/assets/playlist/playlist/6.jpeg" alt="" />
                                    <span>Podcasts</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card7">
                                    <img src="./src/assets/playlist/playlist/7.jpeg" alt="" />
                                    <span>Sertanejo</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card8">
                                    <img src="./src/assets/playlist/playlist/8.jpeg" alt="" />
                                    <span>Samba e pagode</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card9">
                                    <img src="./src/assets/playlist/playlist/9.jpeg" alt="" />
                                    <span>Funk</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card10">
                                    <img src="./src/assets/playlist/playlist/10.jpeg" alt="" />
                                    <span>MPB</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card11">
                                    <img src="./src/assets/playlist/playlist/11.jpeg" alt="" />
                                    <span>Rock</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card12">
                                    <img src="./src/assets/playlist/playlist/12.jpeg" alt="" />
                                    <span>Hip Hop</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card13">
                                    <img src="./src/assets/playlist/playlist/13.jpeg" alt="" />
                                    <span>Indie</span>
                                </div>
                            </a>

                            <a href="" className="cards">
                                <div className="cards card14">
                                    <img src="./src/assets/playlist/playlist/14.jpeg" alt="" />
                                    <span>Relax</span>
                                </div>
                            </a>

                            <a href="" classNameName="cards">
                                <div className="cards card15">
                                    <img src="./src/assets/playlist/playlist/15.jpeg" alt="" />
                                    <span>Música Latina</span>
                                </div>
                            </a>
                        </section>
                    </div>
                </div>
            </div>
            <div id="result-artist" className="hidden">
                <div className="grid-container">
                    <div className="artist-card" id="">
                        <div className="card-img">
                            <img id="artist-img" className="artist-img" />
                            <div className="play">
                                <span className="fa fa-solid fa-play"></span>
                            </div>
                        </div>
                        <div className="card-text">
                            <a title="Foo Fighters" className="vst" href=""></a>
                            <span className="artist-name" id="artist-name"></span>
                            <span className="artist-categorie">Artista</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
};

export default Playlist;