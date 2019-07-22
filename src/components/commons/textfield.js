import React from 'react'

class TextField extends React.Component {
	render() {
		const { type, name, label, onChange, class_name } = this.props
		return (
			<div className={class_name}>
				<label htmlFor={label}>{label}</label>
				<input
					type={type}
					name={name}
					onChange={e => onChange(e, name)}
					required
					value={this.props.val}
				/>
			</div>
		)
	}
}
export default TextField