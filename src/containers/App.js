import React from 'react'
import VideoPlayer from './VideoPlayer'
import AddToPlayList from './AddToPlayList'
import PlayList from './PlayList.js'
import styles from '../styles/main.module.css'

function App() {
  return (
    <main className={styles.main}>
      <header className={styles.center}>
        <h1>XITE TEST</h1>
      </header>
      <section className={styles.mainSec}>
        <section className={styles.playerSec}>
          <VideoPlayer />
        </section>
        <section className={styles.playListSec}>
          <AddToPlayList />
          <PlayList />
        </section>
      </section>
    </main>
  )
}

export default App