const playList = ( state = [], action ) => {
  switch (action.type) {
    case 'ADD_TO_PLAYLIST':
      return [
        ...state,
        {
          title: action.title,
          artist: action.artist,
          videoUrl: action.videoUrl
        }
      ];
    default:
      return state;
  }
};

export default playList;
