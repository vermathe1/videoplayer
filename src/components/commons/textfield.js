import React from 'react';

const TextField = (props) => {
	const {type,id,onChange} = props;
	return(
		<div>
			<label>some label</label>
			<input
			type={type}
			id={id}
			onChange={onChange}
			required
			/>
		</div>
	);
}

export default TextField;
