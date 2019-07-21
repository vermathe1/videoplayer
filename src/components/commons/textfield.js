import React from 'react';



class TextField extends React.Component {
	render(){
		const {type,name,label,onChange} = this.props;
		return(
			<div className="textbox">
				<label htmlFor= {label} >{ label }</label>
				<input
				type={type}
				name={name}
				onChange={e=>onChange(e,name)}
				required
				/>
			</div> 
		);
	}
}

export default TextField;
