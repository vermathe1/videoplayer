let index = 1;

export const addingPlayList = (videoInfo)=>{
	console.log(index);
	const {title,artist,videoUrl} = videoInfo;
	return{
		type:'ADD_TO_PLAYLIST',
		id: index++,
		title,
		artist,
		videoUrl
		
	};
};

export const selectPlayList = (currentIndex) => {
	console.log(currentIndex)
	return {
		type:'SET_CURRENT_INDEX',
		currentIndex
	};
};