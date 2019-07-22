import React from 'react'
import { connect } from 'react-redux'
import TextField from '../components/commons/textfield'
import { Button } from '../components/commons/button'
import { addingPlayList } from '../actions'

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

  onChange(e, fieldName) {
    this.setState({ [fieldName]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(addingPlayList(this.state))
    this.setState({ artist: ' ', title: ' ', videoUrl: ' ' })
  }

  render() {
    return (
      <section className="add-playlist-section">
        <header className="center-header">
          <h2>Add to Playlist</h2>
        </header>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div>
            <TextField
              label="Artist"
              type="text"
              name="artist"
              onChange={this.onChange}
              val={this.state.artist || ''}
              class_name="textbox"
            />
            <TextField
              label="Title"
              type="text"
              name="title"
              onChange={this.onChange}
              val={this.state.title || ''}
              class_name="textbox"
            />
            <TextField
              label="Video URL"
              type="url"
              name="videoUrl"
              onChange={this.onChange}
              val={this.state.videoUrl || ''}
              class_name="textbox"
            />
          </div>
          <footer className="form-btn">
            <Button
              type="submit"
              label="Add To Playlist"
              className="blue-btn"
            />
          </footer>
        </form>
      </section>
    )
  }
}

export default connect()(AddToPlayList)
