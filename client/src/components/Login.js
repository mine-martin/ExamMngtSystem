import React, { useState } from 'react';
import { toast } from 'react-toastify';

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
			const body = { email, password };
			const response = await fetch('http://localhost:8000/home/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});

			const results = await response.json();

			if (results.token) {
				localStorage.setItem('token', results.token);
				setAuth(true);

				toast.success('Login Successfully');
			} else {
				setAuth(false);
				toast.error('Password incorrect');
			}
		} catch (err) {
			console.error(err.massage);
		}
	};
	return (
		<div className='container '>
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
