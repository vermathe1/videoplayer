// import reducer from './playlist.js'

// describe('Add To PlayList reducer', () => {
//   it('should return the initial state', () => {
//     expect(reducer(undefined, {})).toEqual([
//       {
//         id: 0,
//         title: 'awesome Song',
//         artist: 'A R Rehman',
//         videoUrl:
//           'http://mirrors.standaloneinstaller.com/video-sample/dolbycanyon.m4v',
//       },
//     ])
//   })

//   it('should handle ADD_TO_PLAYLIST', () => {
//     expect(
//       reducer([], {
//         type: 'ADD_TO_PLAYLIST',
//         id: 1,
//         title: 'another awesome Song',
//         artist: 'A R Rehman rewind',
//         videoUrl: 'http://funnysong.m4v',
//       })
//     ).toEqual([
//       {
//         id: 0,
//         title: 'awesome Song',
//         artist: 'A R Rehman',
//         videoUrl:
//           'http://mirrors.standaloneinstaller.com/video-sample/dolbycanyon.m4v',
//       },
//       {
//         id: 1,
//         title: 'another awesome Song',
//         artist: 'A R Rehman rewind',
//         videoUrl: 'http://funnysong.m4v',
//       },
//     ])
//   })
// })
