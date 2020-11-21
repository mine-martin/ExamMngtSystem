import React from 'react';

const AddStudent = () => {
	return (
		<div>
			<form action=''>
				<div className='form-row ml-4'>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='student adm'
						/>
					</div>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='student name'
						/>
					</div>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='student surname'
						/>
					</div>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='student DOB'
						/>
					</div>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='class name'
						/>
					</div>
					<div className='col'>
						<input
							type='text'
							className='form-control'
							placeholder='exam name'
						/>
					</div>
					<button className='btn btn-primary'>Add</button>
				</div>
			</form>
		</div>
	);
};

export default AddStudent;
