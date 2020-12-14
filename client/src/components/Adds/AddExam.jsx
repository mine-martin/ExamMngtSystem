import React, { useState } from 'react';
import DataFinder from '../../apis/DataFinder';

const AddExam = () => {
	const [exam_name, setExam_name] = useState('');
	const [exam_date, setExam_date] = useState('');
	const [exam_type, setExam_type] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await DataFinder.post('/exams', {
				exam_name,
				exam_date,
				exam_type,
			});

			// console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='ml-4'>
			<div>
				<h4 className='text-center font-weight-light mt-3'>Add a new Exam</h4>
			</div>
			<form action=''>
				<div className='form-row'>
					<div className='col'>
						<input
							value={exam_name}
							onChange={(e) => setExam_name(e.target.value)}
							type='text'
							className='form-control'
							placeholder='exam name'
						/>
					</div>
					<div className='col'>
						<input
							value={exam_date}
							onChange={(e) => setExam_date(e.target.value)}
							type='text'
							className='form-control'
							placeholder='exam date'
						/>
					</div>
					<div className='col'>
						<input
							value={exam_type}
							onChange={(e) => setExam_type(e.target.value)}
							type='text'
							className='form-control'
							placeholder='exam type'
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

export default AddExam;
