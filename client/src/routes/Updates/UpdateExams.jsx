import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import DataFinder from '../../apis/DataFinder';

const UpdateExam = (props) => {
	const { id } = useParams();
	let history = useHistory();

	const [exam_name, setExam_name] = useState('');
	const [exam_date, setExam_date] = useState('');
	const [exam_type, setExam_type] = useState('');

	useEffect(() => {
		const fetchExam = async () => {
			const response = await DataFinder.get(`/exams/${id}`);
			console.log(response.data.data.exams);
			setExam_name(response.data.data.exams.exam_name);
			setExam_date(response.data.data.exams.exam_date);
			setExam_type(response.data.data.exams.exam_type);
		};
		fetchExam();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newExam = await DataFinder.put(`/exams/${id}`, {
			exam_name,
			exam_date,
			exam_type,
		});
		// console.log(newExam);
		history.push('/examsdetails');
	};

	return (
		<div>
			<h1 className='text-center font-weight-light'>Update Examinations</h1>

			<form action=''>
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

				<div className='form-group'>
					<label htmlFor='exam_date'>Exam date</label>
					<input
						value={exam_date}
						onChange={(e) => setExam_date(e.target.value)}
						id='exam_date'
						className='form-control'
						type='text'
					/>
				</div>

				<div className='form-group'>
					<label htmlFor='exam_type'>Exam type </label>
					<input
						value={exam_type}
						onChange={(e) => setExam_type(e.target.value)}
						id='exam_type'
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

export default UpdateExam;
