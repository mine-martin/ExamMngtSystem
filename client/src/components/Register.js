import React from 'react';

const Register = () => {
	return (
		<div>
			<h3 className='text-center my-4'>Register</h3>
			<form>
				<input
					type='email'
					name='email'
					placeholder='email'
					className='form-control my-3'
				/>
				<input
					type='password'
					name='password'
					placeholder='password'
					className='form-control my-3'
				/>
				<input
					type='text'
					name='name'
					placeholder='name'
					className='form-control my-3'
				/>
				<button className='btn btn-success btn-block'>Submit</button>
				<div className='mt-3 text-center font-weight-bold'>
					<h5 className='font-weight-light'>Already have an Account</h5>
					<a href='/'>Login</a>
				</div>
			</form>
		</div>
	);
};

export default Register;
