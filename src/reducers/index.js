import counterReducer from './counter';
import isLoggedReducer from './isLogged';
import usernameValue from './usernameValue';
import passwordValue from './passwordValue';

import { combineReducers } from 'redux';

const rootReducers = combineReducers({
	counter: counterReducer,
	logIn: isLoggedReducer,
	usernameValue: usernameValue,
	passwordValue: passwordValue,
});

export default rootReducers;
