import React from 'react';
import '../App.css';
import PlayerRoot from './playerRoot';
import AddToPlayList from './addToplayList';
import PlayList from './playList.js';

function App() {
  return (
    <main>
        <header className = "header">
          <h1>Video Player</h1>
        </header>
        <section className="main">
          <div className = "player-sec">
            <PlayerRoot />
          </div>
          <div className="playList-sec">
            <AddToPlayList />
            <PlayList />
          </div>
        </section>
    </main>
  );
}

export default App;
