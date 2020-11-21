import React from 'react';
import './style.css';

const ExamsList = () => {
	return (
		<div className='list-group ml-4'>
			<div className='text-center '>
				<h5>Examinations List</h5>
			</div>

			<div className='menu font-weight-bold'>
				<ul type='none'>
					<li>
						<a href='/'>Dashboard</a>
					</li>
					<li>
						<a href='/studentsdetails'>Students</a>
					</li>
					<li>
						<a href='/classdetails'>Classes</a>
					</li>
					<li>
						<a href='/examsdetails'>Exams</a>
					</li>
				</ul>
			</div>

			<table className=' rounded-lg table table-hover table-dark font-weight-light text-center'>
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
