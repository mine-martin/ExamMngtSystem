import React, { useEffect } from 'react';
import DataFinder from '../apis/DataFinder';

const ListStudents = () => {
	useEffect(() => {
		const fetchList = async () => {
			const response = await DataFinder.get('/class');
			console.log(response);
		};
		fetchList();
	}, []);
	return (
		<div>
			<div>
				<h5 className='text-center'>Students Details</h5>
			</div>

			<div className='menu font-weight-bold '>
				<ul type='none'>
					<li>
						<a href='/dashboard'>Dashboard</a>
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

			<table className='rounded-lg table-hover table table-dark font-weight-light text-center ml-4'>
				<thead>
					<tr className='table-bg'>
						<th scope='col'>Student ADM</th>
						<th scope='col'>Student Name</th>
						<th scope='col'>Student Surname</th>
						<th scope='col'>Student DOB</th>
						<th scope='col'>Class Name</th>
						<th scope='col'>Exam Name</th>
						{/* <th scope='col'>Update</th>
						<th scope='col'>Delete</th> */}
					</tr>
				</thead>
				<tbody>
					{/* {students &&
						students.map((student) => {
							return (
								<tr key={student.id}>
									<td>{student.student_adm}</td>
									<td>{student.student_name}</td>

									<td>{student.surname}</td>

									<td>{student.student_dob}</td>
									<td>{student.class_name}</td>
									<td>{student.exam_name}</td>
								</tr>
							);
						})} */}

					{/* <tr>
						<td>234</td>
						<td>Mine Mine </td>
						<td>Kamau</td>
						<td>23/04/2006</td>
						<td>Class 6</td>
						<td>End Term 1 2020</td>
						<td>
							<button className='btn btn-warning'>Update</button>
						</td>
						<td>
							<button className='btn btn-danger'>Delete</button>
						</td>
					</tr>
					<tr>
						<td>111</td>
						<td>peter Smith</td>
						<td>John</td>
						<td>03/08/2008</td>
						<td>Class 3</td>
						<td>End Term 1 2020</td>
						<td>
							<button className='btn btn-warning'>Update</button>
						</td>
						<td>
							<button className='btn btn-danger'>Delete</button>
						</td>
					</tr>
					<tr>
						<td>34</td>
						<td>Simo K</td>
						<td>Doe</td>
						<td>28/04/2006</td>
						<td>Class 5</td>
						<td>End Term 3 2019</td>
						<td>
							<button className='btn btn-warning'>Update</button>
						</td>
						<td>
							<button className='btn btn-danger'>Delete</button>
						</td>
					</tr> */}
				</tbody>
			</table>
		</div>
	);
};

export default ListStudents;
