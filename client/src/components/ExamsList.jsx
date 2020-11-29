import React, { useContext, useEffect } from 'react';
import './style.css';
import DataFinder from '../apis/DataFinder';
import { ExamsContext } from '../context/ExamContext';
import { useHistory } from 'react-router-dom';

const ExamsList = (props) => {
	const { exams, setExams } = useContext(ExamsContext);

	let history = useHistory();
	useEffect(() => {
		const fetchExams = async () => {
			try {
				const response = await DataFinder.get('/exams');
				// console.log(response.data);
				setExams(response.data.data.exams);
			} catch (error) {
				console.log(error);
			}
		};
		fetchExams();
	}, []);

	const handleDelete = async (id) => {
		try {
			const response = await DataFinder.delete(`/exams/${id}`);
			setExams(
				exams.filter((exams) => {
					return exams.id !== id;
				}),
			);
			// console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

	const handleUpdate = (id) => {
		history.push(`/examsdetails/${id}/update`);
	};

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
				<thead>
					<tr className='table-bg'>
						<th scope='col'>Exam Name</th>
						<th scope='col'>Exam Date</th>
						<th scope='col'>Exam Type</th>
						<th scope='col'>Update</th>
						<th scope='col'>Delete</th>
					</tr>
				</thead>
				<tbody>
					{exams &&
						exams.map((exam) => {
							return (
								<tr key={exam.id}>
									<td>{exam.exam_name}</td>
									<td>{exam.exam_date}</td>
									<td>{exam.exam_type}</td>
									<td>
										<button
											onClick={() => handleUpdate(exam.id)}
											className='btn btn-warning'>
											Update
										</button>
									</td>
									<td>
										<button
											onClick={() => handleDelete(exam.id)}
											className='btn btn-danger'>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					{/* <tr>
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
					</tr> */}
				</tbody>
			</table>
		</div>
	);
};

export default ExamsList;
