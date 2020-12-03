import './App.css';
import Disco from './components/discogs/test';
import SpotifyMisc from './components/spotify/SpotifyMisc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Spoticogs</h1>
      </header>
      <div>
        <SpotifyMisc />
        <Disco />
        <p>Would you like fries with that?</p>
      </div>
    </div >
  );
}

export default App;
