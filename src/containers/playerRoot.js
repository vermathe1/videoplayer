import React from 'react';

export default class PlayerRoot extends React.Component {
  render() {
  	const {
      videoUrl
    } = this.props;
    return (
    	 <video
          	height={500}
          	src={videoUrl}>
          Sorry your browser doesn't support HTML5 videos!
        </video>
    	);
  }
}