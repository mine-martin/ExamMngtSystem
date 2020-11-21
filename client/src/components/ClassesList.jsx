import React from 'react';
import './style.css';

const ClassesList = () => {
	return (
		<div className='list-group'>
			<div className='text-center '>
				<h5>Classes List</h5>
			</div>

			<table className=' rounded-lg table table-hover table-dark '>
				<thead className='thead-bg'>
					<tr className='bg-primary'>
						<th scope='col'>Class Name</th>
						<th scope='col'>Class Teacher</th>
						<th scope='col'>Exam Name</th>
						<th scope='col'>Update</th>
						<th scope='col'>Delete</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Class 1</td>
						<td>Mr John</td>
						<td>End Term 1 2020</td>
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

export default ClassesList;
