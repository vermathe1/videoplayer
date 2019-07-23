
import reducer from './currentVideoIndex.js';

describe('SET THE CORRECT INDEX OF SONG FROM PLAYLIST', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(0)
  })

  it('should handle SET_CURRENT_INDEX', () => {
    expect(
      reducer([], {
          type: "SET_CURRENT_INDEX",currentIndex:2
      })
    ).toEqual(2)
  })
})