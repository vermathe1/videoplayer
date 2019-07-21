import React from 'react';

export default class PlayList extends React.Component {
  render(){
    return(
		<section>
			<div>
				<span>#</span>
				<span>Title</span>
				<span>Artist</span>
			</div>
			<ul></ul>
			<button
			label="Add to playlist"
			variant="raised"
			type="button"
			/>
		</section>
    )
  }
}