import React, { useState } from 'react';
import DataFinder from '../../apis/DataFinder';

const AddStudent = () => {
	const [student_name, setStudent_name] = useState('');
	const [surname, setSurname] = useState('');
	const [student_adm, setStudent_adm] = useState('');
	const [student_dob, setStudent_dob] = useState('');
	const [class_name, setClass_name] = useState('');
	const [exam_name, setExam_name] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await DataFinder.post('/students', {
				student_name,
				surname,
				student_adm,
				student_dob,
				class_name,
				exam_name,
			});

			console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
		<div>
				<h4 className='text-center font-weight-light mt-3'>Add a new Student</h4>
			</div>
			<form action=''>
				<div className='form-row ml-4'>
					<div className='col'>
						<input
							value={student_adm}
							onChange={(e) => setStudent_adm(e.target.value)}
							type='text'
							className='form-control'
							placeholder='student adm'
						/>
					</div>
					<div className='col'>
						<input
							value={student_name}
							onChange={(e) => setStudent_name(e.target.value)}
							type='text'
							className='form-control'
							placeholder='student name'
						/>
					</div>
					<div className='col'>
						<input
							value={surname}
							onChange={(e) => setSurname(e.target.value)}
							type='text'
							className='form-control'
							placeholder='student surname'
						/>
					</div>
					<div className='col'>
						<input
							value={student_dob}
							onChange={(e) => setStudent_dob(e.target.value)}
							type='text'
							className='form-control'
							placeholder='student DOB'
						/>
					</div>
					<div className='col'>
						<input
							value={class_name}
							onChange={(e) => setClass_name(e.target.value)}
							type='text'
							className='form-control'
							placeholder='class name'
						/>
					</div>
					<div className='col'>
						<input
							value={exam_name}
							onChange={(e) => setExam_name(e.target.value)}
							type='text'
							className='form-control'
							placeholder='exam name'
						/>
					</div>
					<button
						onClick={handleSubmit}
						type='submit'
						className='btn btn-primary'>
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddStudent;
