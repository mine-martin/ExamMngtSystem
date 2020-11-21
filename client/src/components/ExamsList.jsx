import React from 'react';
import './style.css';

const ExamsList = () => {
	return (
		<div className='list-group'>
			<div className='text-center '>
				<h5>Examinations List</h5>
			</div>
			<table className=' rounded-lg table table-hover table-dark '>
				<thead className='table-bg'>
					<tr className='bg-primary'>
						<th scope='col'>Exam Name</th>
						<th scope='col'>Exam Date</th>
						<th scope='col'>Exam Type</th>
						<th scope='col'>Update</th>
						<th scope='col'>Delete</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>End Term 1 2020</td>
						<td>30/3/2020</td>
						<td>Main Exam</td>
						<td>
							<button className='btn btn-warning'>Update</button>
						</td>
						<td>
							<button className='btn btn-danger'>Delete</button>
						</td>
					</tr>
					<tr>
						<td>Mid Term 2 2020</td>
						<td>30/6/2020</td>
						<td>Mid Term Exam</td>
						<td>
							<button className='btn btn-warning'>Update</button>
						</td>
						<td>
							<button className='btn btn-danger'>Delete</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ExamsList;
