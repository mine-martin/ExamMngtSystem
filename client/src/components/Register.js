import React, { useState } from 'react';
import UserFinder from '../apis/UserFinder';

const Register = ({ setAuth }) => {
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
		name: '',
	});

	const { email, password, name } = inputs;

	const onChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	const handleClick = async (e) => {
		e.preventDefault();
		try {
			const response = await UserFinder.post('/register', {
				email,
				password,
				name,
			});

			const result = response.data;
			// console.log(result);

			localStorage.setItem('token', result.token);

			setAuth(true);
		} catch (err) {
			console.error(err.message);
		}
	};
	return (
		<div>
			<h3 className='text-center my-4'>Register</h3>
			<form action=''>
				<input
					type='email'
					name='email'
					placeholder='email'
					className='form-control my-3'
					value={email}
					onChange={(e) => onChange(e)}
				/>
				<input
					type='password'
					name='password'
					placeholder='password'
					className='form-control my-3'
					value={password}
					onChange={(e) => onChange(e)}
				/>
				<input
					type='text'
					name='name'
					placeholder='name'
					className='form-control my-3'
					value={name}
					onChange={(e) => onChange(e)}
				/>
				<button
					onClick={handleClick}
					type='submit'
					className='btn btn-success btn-block'>
					Submit
				</button>
				<div className='mt-3 text-center font-weight-bold'>
					<h5 className='font-weight-light'>Already have an Account</h5>
					<a href='/'>Login</a>
				</div>
			</form>
		</div>
	);
};

export default Register;
