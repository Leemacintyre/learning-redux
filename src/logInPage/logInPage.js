import React from 'react';
import { isLogged, usernameValue, passwordValue } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

const LogInPage = () => {
	const logIn = useSelector((state) => state.logIn);
	const username = useSelector((state) => state.usernameValue);
	const password = useSelector((state) => state.passwordValue.password);
	const dispatch = useDispatch();

	const userInput = (event) => {
		dispatch(usernameValue(event.target.value));
	};

	const passwordInput = (event) => {
		dispatch(passwordValue(event.target.value));
	};

	const user = 'lee';
	const pass = 'password';

	const logCheck = () => {
		if (username === user && password === pass) {
			dispatch(isLogged());
		}
	};

	return (
		<div>
			<h1>user : lee</h1>
			<h1>password : password</h1>
			<input placeholder={user} onChange={userInput} />
			<input placeholder={pass} onChange={passwordInput} />
			<button onClick={logCheck}>{logIn ? 'log out' : 'log in'}</button>
		</div>
	);
};

export default LogInPage;
