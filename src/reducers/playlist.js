const playList = (
  state = [
    {
      id: 0,
      title: 'awesome Song',
      artist: 'A R Rehman',
      videoUrl:
        'http://techslides.com/demos/sample-videos/small.mp4',
    }
  ],
  action
) => {
  switch (action.type) {
    case 'ADD_TO_PLAYLIST':
      return [
        ...state,
        {
          title: action.title,
          artist: action.artist,
          videoUrl: action.videoUrl,
          id: action.id,
        },
      ]
    default:
      return state
  }
}

export default playList
