import React from 'react'
import { connect } from 'react-redux'
import { selectPlayList } from '../actions'

class PlayerRoot extends React.Component {
  playNextVideo(props) {
    let { playList, currentIndex } = this.props
    let lengthOfPlayList = playList.length
    let nextToPlayIndex = (currentIndex + 1) % lengthOfPlayList
    this.props.dispatch(selectPlayList(nextToPlayIndex))
  }

  render() {
    const { videoUrl } = this.props
    return (
      <video
        src={videoUrl}
        controls
        autoPlay
        onEnded={() => this.playNextVideo()}
        width="100%"
      >
        Sorry your browser doesn't support HTML5 videos!!
      </video>
    )
  }
}

const mapStateToProps = state => {
  return {
    videoUrl: state.playList[state.currentIndex].videoUrl,
    currentIndex: state.currentIndex,
    playList: state.playList,
  }
}

export default connect(mapStateToProps)(PlayerRoot)
