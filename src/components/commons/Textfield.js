import React from 'react'

class TextField extends React.Component {
  render() {
    const { type, name, label, onChange, className } = this.props
    return (
      <div className={className}>
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
