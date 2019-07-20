import React from 'react';
import { combineReducers } from 'redux';

const videoPlayer = ( state=[], action ) => {
	return state;
}

const rootReducer = combineReducers({videoPlayer});
export default rootReducer;