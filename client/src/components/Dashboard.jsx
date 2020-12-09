import React, { useEffect, useState } from 'react';

import UserFinder from '../apis/UserFinder';
import Header from './Header';

const Dashboard = ({ setAuth }) => {
	const [name, setName] = useState('');

	const getName = async () => {
		try {
			const response = await UserFinder.get('/dashboard', {
				method: 'GET',
				headers: { token: localStorage.token },
			});

			const result = response.data;
			setName(result.name);
			// setAuth(true);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getName();
	});

	const logout = (e) => {
		e.preventDefault();
		localStorage.removeItem('token');
		setAuth(false);
	};

	return (
		<div className='container'>
			<h3 className='font-weight-light'>Welcome {name}</h3>
			<Header />
			<div className='text-center '>
				<button onClick={(e) => logout(e)} className='btn btn-danger'>
					Logout
				</button>
			</div>
		</div>
	);
};

export default Dashboard;
