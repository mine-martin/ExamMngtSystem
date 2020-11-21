import React from 'react';

const AddClass = () => {
	return (
		<div>
			<div>
				<h4 className='text-center font-weight-light mt-5'>Add a new Class</h4>
			</div>
			<form action=''>
				<div className='form-row ml-4'>
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
							placeholder='class teacher'
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

export default AddClass;
