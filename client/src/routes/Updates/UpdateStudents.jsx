import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import DataFinder from '../../apis/DataFinder';

const UpdateStudents = (props) => {
	const { id } = useParams();
	let history = useHistory();

	const [student_adm, setStudent_adm] = useState('');
	const [student_name, setStudent_name] = useState('');
	const [surname, setSurname] = useState('');
	const [student_dob, setStudent_dob] = useState('');
	const [class_name, setClass_name] = useState('');
	const [exam_name, setExam_name] = useState('');

	useEffect(() => {
		const fetchStudent = async () => {
			const response = await DataFinder.get(`/students/${id}`);
			// console.log(response.data.data);
			setStudent_adm(response.data.data.students.student_adm);
			setStudent_name(response.data.data.students.student_name);
			setSurname(response.data.data.students.surname);
			setStudent_dob(response.data.data.students.student_dob);
			setClass_name(response.data.data.students.class_name);
			setExam_name(response.data.data.students.exam_name);
		};
		fetchStudent();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newStudent = await DataFinder.put(`/students/${id}`, {
			student_name,
			surname,
			student_adm,
			student_dob,
			class_name,
			exam_name,
		});
		// console.log(newStudent);
		history.push('/studentsdetails');
	};

	return (
		<div>
			<h1 className='text-center font-weight-light'>Update students</h1>

			<form>
				<div className='form-group'>
					<label htmlFor='student_adm'>Student adm</label>
					<input
						value={student_adm}
						onChange={(e) => setStudent_adm(e.target.value)}
						id='student_adm'
						className='form-control'
						type='numbhoverer'
					/>
				</div>

				<div className='form-group'>
					<label htmlFor='student_name'>Student name</label>
					<input
						value={student_name}
						onChange={(e) => setStudent_name(e.target.value)}
						id='student_name'
						className='form-control'
						type='text'
					/>
				</div>

				<div className='form-group'>
					<label htmlFor='surname'>surname</label>
					<input
						value={surname}
						onChange={(e) => setSurname(e.target.value)}
						id='surname'
						className='form-control'
						type='text'
					/>
				</div>

				<div className='form-group'>
					<label htmlFor='studnt_dob'>Student dob</label>
					<input
						value={student_dob}
						onChange={(e) => setStudent_dob(e.target.value)}
						id='student_dob'
						className='form-control'
						type='text'
					/>
				</div>

				<div className='form-group'>
					<label htmlFor='class_name'>Class name</label>
					<input
						value={class_name}
						onChange={(e) => setClass_name(e.target.value)}
						id='class_name'
						className='form-control'
						type='text'
					/>
				</div>

				<div className='form-group'>
					<label htmlFor='exam_name'>exam name</label>
					<input
						value={exam_name}
						onChange={(e) => setExam_name(e.target.value)}
						id='exam_name'
						className='form-control'
						type='text'
					/>
				</div>

				<button
					type='submit'
					onClick={handleSubmit}
					className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default UpdateStudents;
