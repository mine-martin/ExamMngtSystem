import React from 'react';

const AddExam = () => {
	return (
		<div className='ml-4'>
			<form action=''>
				<div className='form-row'>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='exam name'
						/>
					</div>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='exam date'
						/>
					</div>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='exam type'
						/>
					</div>
					<button className='btn btn-primary'>Add</button>
				</div>
			</form>
		</div>
	);
};

export default AddExam;
