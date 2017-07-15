import { combineReducers } from 'redux';
import imagesReducer from './containers/Home/reducers';

const rootReducer = combineReducers({
	data: imagesReducer
});

export default rootReducer;
