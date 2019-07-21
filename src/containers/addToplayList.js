import React from 'react';
import TextField from '../components/commons/textfield';

export default class AddToPlayList extends React.Component {
  render(){
    return(
    <section>
      <header>
      <h2>Add to Playlist</h2>
      </header>
      <form>
        <div>
          <TextField
          label="Artist"
          type="text"
          id="artist"
          
          />
          <TextField
          label="Title"
          type="text"
          id="title"
         
          />
          <TextField
          label="Video URL"
          type="url"
          id="videoUrl"
  
          />
        </div>
        <footer >
          <button
          type="button"
         
          label="Cancel"
          variant="raised"
          />
          <button type="submit" label="Add" variant="raised" />
        </footer>
      </form>
    </section>
      );
  }
}

