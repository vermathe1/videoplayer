import React from 'react';
import { combineReducers } from 'redux';
import playList from './playlist';
import currentIndex from './currentVideoIndex';

const videoPlayer = ( state=[], action ) => {
	return state;
}

const rootReducer = combineReducers(
	{ playList,
	currentIndex }
	);
export default rootReducer;