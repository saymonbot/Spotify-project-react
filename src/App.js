import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Playlist from './Playlist/Playlist';
import Sidebar from './Sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
      <Header/>
      </div>
      <div>
      <Sidebar/>
      </div>
      <div>
      <Playlist/>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  );
}

export default App;