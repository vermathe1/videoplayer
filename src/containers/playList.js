import React from 'react';
import { connect } from "react-redux";
import { selectPlayList } from "../actions";

class PlayList extends React.Component {
  render(){
    return(
		<section>
			
			<table className="table">
			<tbody>
				<tr>
				<td className = "heading">PLAYLISTS</td>
				</tr>
			<tr>
				<th>#</th>
				<th>Title</th>
				<th>Artist</th>
			</tr>
				
				{this.props.playList.map((list,index) => {
					return(
						<tr key={index} onClick = {()=>this.props.onClick(list.id)} >
							<td>{ ++index }</td>
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

const mapStateToProps = (state) => {
  return{
    playList : state.playList
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    onClick : (id) => { dispatch(selectPlayList(id)) }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(PlayList);



