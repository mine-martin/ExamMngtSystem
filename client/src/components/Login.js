import React from 'react';

const Login = ({ setAuth }) => {
	return (
		<div>
			<form action='/dashboard'>
				<button className='btn btn-success' onClick={() => setAuth(true)}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Login;
