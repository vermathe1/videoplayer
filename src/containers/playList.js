import React from 'react'
import { connect } from 'react-redux'
import { selectPlayList } from '../actions'

class PlayList extends React.Component {
	render() {
		return (
			<section className="playlist-sec">
				<div className="text-center playlist-heading">PLAYLISTS</div>
				<table className="table">
					<tbody>
						<tr>
							<th>#</th>
							<th>Title</th>
							<th>Artist</th>
						</tr>

						{this.props.playList.map((list, index) => {
							if (this.props.currentIndex === index) {
								return (
									<tr
										key={index}
										onClick={() => this.props.onClick(list.id)}
										className="cuurentSelectedList"
									>
										<td>{++index}</td>
										<td>{list.title}</td>
										<td>{list.artist}</td>
									</tr>
								)
							} else {
								return (
									<tr key={index} onClick={() => this.props.onClick(list.id)}>
										<td>{++index}</td>
										<td>{list.title}</td>
										<td>{list.artist}</td>
									</tr>
								)
							}
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
