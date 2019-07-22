import { combineReducers } from 'redux'
import playList from './playlist'
import currentIndex from './currentVideoIndex'

const rootReducer = combineReducers({ playList, currentIndex })
export default rootReducer
