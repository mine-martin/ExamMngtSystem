import React, { useContext, useEffect } from 'react';
import UserFinder from '../apis/UserFinder';
import AddMarks from '../components/Adds/AddMarks';

import { MarksContext } from '../context/MarksContext';

const MarksList = (props) => {
	const { marks, setMarks } = useContext(MarksContext);

	useEffect(() => {
		const fetchMarks = async () => {
			try {
				const response = await UserFinder.get('/marks');
				setMarks(response.data.data.marks);
				// console.log(response.data.data.marks);
			} catch (err) {
				console.error(err.message);
			}
		};
		fetchMarks();
	});

	const handleDelete = async (id) => {
		try {
			const response = await UserFinder.delete(`/marks/${id}`);
			setMarks(
				marks.filter((marks) => {
					return marks.id !== id;
				}),
			);
			console.log(response);
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<div>
			<div>
				<h4 className='font-weight-light text-center'>marks details</h4>
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
						<th scope='col'>Student Name</th>
						<th scope='col'>ENGLISH</th>
						<th scope='col'>KISWAHILI</th>
						<th scope='col'>MATHEMATICS</th>
						<th scope='col'>SCIENCE</th>
						<th scope='col'>CRE</th>
						<th scope='col'>TOTAL</th>
						<th scope='col'>GRADE</th>
						<th scope='col'>UPDATE</th>
						<th scope='col'>DELETE</th>
					</tr>
				</thead>
				<tbody>
					{marks &&
						marks.map((mark) => {
							return (
								<tr key={mark.id}>
									<td>{mark.student_name}</td>
									<td>{mark.english}</td>
									<td>{mark.kiswahili}</td>
									<td>{mark.mathematics}</td>
									<td>{mark.science}</td>
									<td>{mark.cre}</td>
									<td>{mark.total}</td>
									<td>{mark.grade}</td>
									<td>
										<button className='btn btn-warning'>Update</button>
									</td>
									<td>
										<button
											onClick={() => handleDelete(mark.id)}
											className='btn btn-danger'>
											DELETE
										</button>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
			<AddMarks />
		</div>
	);
};

export default MarksList;
