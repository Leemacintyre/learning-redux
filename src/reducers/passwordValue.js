const myState = {
	password: '',
};
const passwordValue = (state = myState.password, action) => {
	switch (action.type) {
		case 'PASSWORD_VALUE':
			return {
				...state,
				password: action.payload,
			};
		default:
			return state;
	}
};
export default passwordValue;
