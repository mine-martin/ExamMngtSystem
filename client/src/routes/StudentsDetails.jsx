import React from 'react';
import StudentsList from '../components/StudentsList';
import AddStudent from '../components/Updates/AddStudent';

const StudentsDetails = () => {
	return (
		<div>
			<StudentsList />
			<AddStudent />
		</div>
	);
};

export default StudentsDetails;
