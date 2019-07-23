import React from 'react'
import { shallow } from 'enzyme'
import { AddToPlayList } from './AddToPlayList'

describe('<AddToPlayList />', () => {
  it('should set artist, title, videoUrl onChange', () => {
    const wrapper = shallow(<AddToPlayList />)
    const event = { target: { value: 'test' } }
    wrapper.instance().onChange(event, 'artist')
    expect(wrapper.state().artist).toBe('test')
    wrapper.instance().onChange(event, 'title')
    expect(wrapper.state().title).toBe('test')
    wrapper.instance().onChange(event, 'videoUrl')
    expect(wrapper.state().videoUrl).toBe('test')
  })

  it('should dispatch the state on submit', () => {
    const spy = jest.fn()
    const wrapper = shallow(<AddToPlayList dispatch={spy} />)
    const event = { target: { value: 'test' } }
    wrapper.instance().onChange(event, 'artist')
    wrapper.instance().onChange(event, 'title')
    wrapper.instance().onChange(event, 'videoUrl')
    wrapper.instance().handleSubmit({ preventDefault: jest.fn() })
    expect(spy).toHaveBeenCalled()
    expect(wrapper.state()).toEqual({
      artist: '',
      title: '',
      videoUrl: '',
    })
  })
})
