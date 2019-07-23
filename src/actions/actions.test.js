import * as  actions  from './index';

describe('actions', () => {
  it('It should create an action to add on playlist', () => {
  	let index =1;
    const expectedAction = {type: 'ADD_TO_PLAYLIST',id:1,title:"awesome title",artist:"awesome artist",videoUrl :"http://max.com"}
    expect(actions.addingPlayList({title:"awesome title",artist:"awesome artist",videoUrl :"http://max.com"})).toEqual(expectedAction)
  })

  it('should create an action to select a playlist', () => {
    const expectedAction = {type: 'SET_CURRENT_INDEX',currentIndex:2}
    expect(actions.selectPlayList(2)).toEqual(expectedAction)
  })
})