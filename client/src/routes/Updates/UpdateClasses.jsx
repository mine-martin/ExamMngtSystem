import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import DataFinder from '../../apis/DataFinder';

const UpdateClasses = (props) => {
	const { id } = useParams();
	let history = useHistory();

	const [class_name, setClass_name] = useState('');
	const [class_teacher, setClass_teacher] = useState('');
	const [exam_name, setExam_name] = useState('');

	useEffect(() => {
		const fetchClass = async () => {
			const response = await DataFinder.get(`/classes/${id}`);
			// console.log(response.data.data);
			setClass_name(response.data.data.classes.class_name);
			setClass_teacher(response.data.data.classes.class_teacher);
			setExam_name(response.data.data.classes.exam_name);
		};
		fetchClass();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newClass = await DataFinder.put(`/classes/${id}`, {
			class_name,
			class_teacher,
			exam_name,
		});
		// console.log(newClass)
		history.push('/classdetails');
	};

	return (
		<div>
			<h1 className='text-center font-weight-light'>Update Class Details</h1>

			<form action=''>
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
					<label htmlFor='class_teacher'>Class teacher</label>
					<input
						value={class_teacher}
						onChange={(e) => setClass_teacher(e.target.value)}
						id='class_teacher'
						className='form-control'
						type='text'
					/>
				</div>

				<div className='form-group'>
					<label htmlFor='exam_name'>Exam name</label>
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

export default UpdateClasses;
