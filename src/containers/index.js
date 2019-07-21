import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import PlayerRoot from './playerRoot';
import AddToPlayList from './addToplayList';
import PlayList from './playList.js';

function App() {
  return (
    <main>
        <header>
          <h1>Video Player</h1>
        </header>
        <section>
          <PlayerRoot />
          <AddToPlayList />
          <PlayList />
        </section>
    </main>
  );
}

export default App;
