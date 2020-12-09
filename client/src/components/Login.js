import React, { useState } from 'react';
import UserFinder from '../apis/UserFinder';

const Login = ({ setAuth }) => {
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	});

	const { email, password } = inputs;

	const onChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const handleClick = async (e) => {
		e.preventDefault();
		try {
			const response = await UserFinder.post('/login', {
				email,
				password,
			});
			const results = response.data;
			// console.log(results);
			localStorage.setItem('token', results.token);
		} catch (err) {
			console.error(err.massage);
		}
	};
	return (
		<div>
			<h3 className='text-center my-4'>Login</h3>
			<form>
				<input
					type='email'
					name='email'
					placeholder='email'
					className='form-control my-4'
					value={email}
					onChange={(e) => onChange(e)}
				/>
				<input
					type='password'
					name='password'
					placeholder='password'
					className='form-control my-4'
					value={password}
					onChange={(e) => onChange(e)}
				/>
				<button onClick={handleClick} className='btn-success btn btn-block'>
					Login
				</button>

				<div className='mt-3 text-center font-weight-bold'>
					<h5 className='font-weight-light'>Don't have an Account</h5>
					<a href='/register'>Register</a>
				</div>
			</form>
		</div>
	);
};

export default Login;
