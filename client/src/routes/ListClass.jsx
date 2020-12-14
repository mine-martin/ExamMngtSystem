import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DataFinder from '../apis/DataFinder';
// import { ClassesContext } from '../context/ClassesContext';

const ListClass = () => {
	// const { class_name } = useParams();
	// const { selectedClass, setSelectedClass } = useContext(ClassesContext);

	useEffect(() => {
		const fetchList = async () => {
			try {
				const response = await DataFinder.get('/exam');
				console.log(response.data.data);
			} catch (err) {
				console.error(err);
			}
		};
		fetchList();
	}, []);

	return (
		<div className='list-group ml-4'>
			<div className='text-center '>
				<h5>Classes List</h5>
			</div>

			<div className='menu font-weight-bold'>
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

			<table className=' rounded-lg table table-hover table-dark font-weight-light text-center'>
				<thead>
					<tr className='table-bg'>
						<th scope='col'>Class Name</th>
						<th scope='col'>Class Teacher</th>
						<th scope='col'>Exam Name</th>
						{/* <th scope='col'>Update</th>
						<th scope='col'>Delete</th> */}
					</tr>
				</thead>
				{/* <tbody>
					{classes.map((classes) => {
						return (
							<tr key={classes.id}>
								<td>{classes.class_name}</td>
								<td>{classes.class_teacher}</td>
								<td>{classes.exam_name}</td>
								<td></td>
							</tr>
						);
					})}
				</tbody> */}
			</table>
		</div>
	);
};

export default ListClass;
