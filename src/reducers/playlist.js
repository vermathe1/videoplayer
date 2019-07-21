const playList = ( state = [{id:0, title: "love1 Song", artist: "Himesh", videoUrl: "http://mirrors.standaloneinstaller.com/video-sample/dolbycanyon.m4v"}], action ) => {
  switch (action.type) {
    case 'ADD_TO_PLAYLIST':
      return [
        ...state,
        {
          title: action.title,
          artist: action.artist,
          videoUrl: action.videoUrl,
          id:action.id
        }
      ];
    default:
      return state;
  }
};

export default playList;
