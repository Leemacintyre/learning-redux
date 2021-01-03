import React from 'react';
import { increment, decrement } from './actions';
import { useSelector, useDispatch } from 'react-redux';

import LogInPage from './logInPage/logInPage';

const App = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.counter);
	const logIn = useSelector((state) => state.logIn);

	return (
		<div style={{ textAlign: 'center' }}>
			{logIn ? <h1>my counter {count}</h1> : ''}
			<button
				onClick={() => {
					dispatch(increment());
				}}>
				increment
			</button>
			<button
				onClick={() => {
					dispatch(decrement());
				}}>
				decrement
			</button>

			<LogInPage />
		</div>
	);
};

export default App;
