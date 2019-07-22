let index = 1

export const addingPlayList = videoInfo => {
	const { title, artist, videoUrl } = videoInfo
	return {
		type: 'ADD_TO_PLAYLIST',
		id: index++,
		title,
		artist,
		videoUrl,
	}
}

export const selectPlayList = currentIndex => {
	return {
		type: 'SET_CURRENT_INDEX',
		currentIndex,
	}
}
