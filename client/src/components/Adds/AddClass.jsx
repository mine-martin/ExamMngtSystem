import React, { useState } from 'react';
import DataFinder from '../../apis/DataFinder';

const AddClass = () => {
	const [class_name, setClass_name] = useState('');
	const [class_teacher, setClass_teacher] = useState('');
	const [exam_name, setExam_name] = useState('');

	const handleClick = async (e) => {
		e.preventDefault();
		const response = await DataFinder.post('/classes', {
			class_name,
			class_teacher,
			exam_name,
		});

		console.log(response);
	};
	return (
		<div>
			<div>
				<h4 className='text-center font-weight-light mt-5'>Add a new Class</h4>
			</div>
			<form action=''>
				<div className='form-row ml-4'>
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
							value={class_teacher}
							onChange={(e) => setClass_teacher(e.target.value)}
							type='text'
							className='form-control'
							placeholder='class teacher'
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
						onClick={handleClick}
						type='submit'
						className='btn btn-primary'>
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddClass;
