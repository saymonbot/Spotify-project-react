import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Playlist from './Playlist/Playlist';

function App() {
  return (
    <div className="App">
      <Header/>
      <Playlist/>
      <Footer/>
    </div>
  );
}

export default App;