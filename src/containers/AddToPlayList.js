import React from 'react'
import { connect } from 'react-redux'
import TextField from '../components/commons/Textfield'
import { Button } from '../components/commons/Button'
import { addingPlayList } from '../actions'
import styles from '../styles/addToPlayList.module.css'

class AddToPlayList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      artist: '',
      title: '',
      videoUrl: '',
    }

    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChange = (e, fieldName) => {
    this.setState({ [fieldName]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.dispatch(addingPlayList(this.state))
    this.setState({ artist: ' ', title: ' ', videoUrl: ' ' })
  }

  render() {
    return (
      <section className={styles.addPlaylistSection}>
        <header className={styles.centerHeader}>
          <h2>Add to Playlist</h2>
        </header>
        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField
              label="Artist"
              type="text"
              name="artist"
              onChange={this.onChange}
              val={this.state.artist || ''}
              className={styles.textbox}
            />
            <TextField
              label="Title"
              type="text"
              name="title"
              onChange={this.onChange}
              val={this.state.title || ''}
              className={styles.textbox}
            />
            <TextField
              label="Video URL"
              type="url"
              name="videoUrl"
              onChange={this.onChange}
              val={this.state.videoUrl || ''}
              className={styles.textbox}
            />
          </div>
          <footer className={styles.formBtn}>
            <Button
              type="submit"
              label="Add To Playlist"
              className={styles.blueBtn}
            />
          </footer>
        </form>
      </section>
    )
  }
}

export default connect()(AddToPlayList)
