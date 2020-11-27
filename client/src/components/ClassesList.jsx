import React, { useContext, useEffect } from 'react';
import './style.css';
import DataFinder from '../apis/DataFinder';
import { ClassesContext } from '../context/ClassesContext';

const ClassesList = (props) => {
	const { classes, setClasses } = useContext(ClassesContext);
	useEffect(() => {
		const fetchClasses = async () => {
			try {
				const response = await DataFinder.get('/classes');
				// console.log(response.data);
				setClasses(response.data.data.classes);
			} catch (error) {
				console.log(error);
			}
		};
		fetchClasses();
	}, []);

	const handleDelete = async (id) => {
		try {
			const response = await DataFinder.delete(`/classes/${id}`);
			setClasses(
				classes.filter((classes) => {
					return classes.id !== id;
				}),
			);
			// console.log(response);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='list-group ml-4'>
			<div className='text-center '>
				<h5>Classes List</h5>
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
						<th scope='col'>Class Name</th>
						<th scope='col'>Class Teacher</th>
						<th scope='col'>Exam Name</th>
						<th scope='col'>Update</th>
						<th scope='col'>Delete</th>
					</tr>
				</thead>
				<tbody>
					{classes.map((classes) => {
						return (
							<tr key={classes.id}>
								<td>{classes.class_name}</td>
								<td>{classes.class_teacher}</td>
								<td>{classes.exam_name}</td>
								<td>
									<button className='btn btn-warning'>Update</button>
								</td>
								<td>
									{' '}
									<button
										onClick={() => handleDelete(classes.id)}
										className='btn btn-danger'>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
					{/* <tr>
						<td>Class 1</td>
						<td>Mr John</td>
						<td>End Term 1 2020</td>
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

export default ClassesList;
