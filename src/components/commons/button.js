import React from 'react';

export const Button = (props) => {
	const {label, type, className} = props;
	return (
		<button type={type} className={className} >
			{label}
		</button>
	)
}