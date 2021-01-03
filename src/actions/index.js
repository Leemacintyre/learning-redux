export const increment = () => {
	return {
		type: 'INCREMENT',
		payload: 1,
	};
};

export const decrement = () => {
	return {
		type: 'DECREMENT',
		payload: 1,
	};
};

export const isLogged = () => {
	return {
		type: 'LOG_IN',
	};
};

export const usernameValue = (input) => {
	return {
		type: 'USERNAME_VALUE',
		payload: input,
	};
};

export const passwordValue = (input) => {
	return {
		type: 'PASSWORD_VALUE',
		payload: input,
	};
};
