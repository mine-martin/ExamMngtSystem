import React from 'react';
import Header from './Header';

const Dashboard = ({ setAuth }) => {
	return (
		<div>
			<h5>Welcome Mine</h5>
			<Header />
			<div className=' text-center '>
				<button
					className='btn btn-danger mt-auto '
					onClick={() => setAuth(false)}>
					Log Out
				</button>
			</div>
		</div>
	);
};

export default Dashboard;
