import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from './Button.js'

describe('<Button />', () => {
	it(' matches the snapshop', () => {
		const tree = renderer.create(<Button />).toJSON()
		expect(tree).toMatchSnapshot()
	})
})
