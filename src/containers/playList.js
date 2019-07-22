import React from 'react'
import { connect } from 'react-redux'
import { selectPlayList } from '../actions'
import styles from '../styles/playList.module.css'

class PlayList extends React.Component {
  render() {
    const { onClick, currentIndex, playList } = this.props
    let sNo = 1
    let clsName = ''
    return (
      <section className={styles.playlistSec}>
        <div className={styles.textCenter}>PLAYLISTS</div>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Artist</th>
            </tr>
            {playList.map((list, index) => {
              if (currentIndex === index) {
                clsName = styles.currentSelectedList
              } else {
                clsName = ''
              }
              return (
                <tr
                  key={index}
                  onClick={() => onClick(list.id)}
                  className={clsName}
                >
                  <td>{sNo++}</td>
                  <td>{list.title}</td>
                  <td>{list.artist}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    playList: state.playList,
    currentIndex: state.currentIndex,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: id => {
      dispatch(selectPlayList(id))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayList)
