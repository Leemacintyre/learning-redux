const usernameValue = (state = [], action) => {
	switch (action.type) {
		case 'USERNAME_VALUE':
			return action.payload;

		default:
			return state;
	}
};

export default usernameValue;
