import React, { useState } from 'react';
import { toast } from 'react-toastify';

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
		const body = { email, password, name };
		try {
			const response = await fetch('http://localhost:8000/home/auth/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});

			const result = await response.json();
			// console.log(result);

			if (result.token) {
				localStorage.setItem('token', result.token);

				setAuth(true);

				toast.success('Registration Successful');
			} else {
				setAuth(false);
				toast.error(result);
			}
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
