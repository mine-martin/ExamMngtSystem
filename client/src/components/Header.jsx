import React from 'react';
import './style.css';

const Header = () => {
	return (
		<div className='container ml-4'>
			<div>
				<h3 className=' font-weight-light text-center mt-5'>
					School Examination Management System
				</h3>
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

			<section className='rowcards'>
				<div className='mt-4 card card-width text-center shadow-lg '>
					<div className='card-body'>
						<h5 className='card-title'>Students</h5>
						<a className='hover' href='/studentsdetails'>
							Students
						</a>
					</div>
				</div>
				<div className='card mt-4  card-width text-center shadow-lg '>
					<div className='card-body'>
						<h5 className='card-title'>Classes</h5>
						<a className='hover' href='/classdetails'>
							Classes
						</a>
					</div>
				</div>
				<div className='card mt-4  card-width text-center shadow-lg'>
					<div className='card-body'>
						<h5 className='card-title'>Examinations</h5>
						<a className='hover' href='/examsdetails'>
							Examinations
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Header;
