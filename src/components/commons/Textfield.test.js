import React from 'react'
import renderer from 'react-test-renderer'
import Textfield from './Textfield.js'

describe('<Textfield />', () => {
  it(' matches the snapshop', () => {
    const tree = renderer.create(<Textfield />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
