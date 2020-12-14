import React, { useState } from 'react';
import UserFinder from '../../apis/UserFinder';

const AddMarks = () => {
	const [student_name, setStudent_name] = useState('');
	const [english, setEnglish] = useState('');
	const [kiswahili, setKiswahili] = useState('');
	const [mathematics, setMathematics] = useState('');
	const [science, setScience] = useState('');
	const [cre, setCre] = useState('');
	const [total, setTotal] = useState('');
	const [grade, setGrade] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await UserFinder.post('/marks', {
				student_name,
				english,
				kiswahili,
				mathematics,
				science,
				cre,
				total,
				grade,
			});
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className='ml-5'>
			<div>
				<h4 className='text-center font-weight-light'>
					Add Studdent and Marks
				</h4>
			</div>

			<form>
				<div className='form-row'>
					<div className='col'>
						<input
							value={student_name}
							onChange={(e) => {
								setStudent_name(e.target.value);
							}}
							type='text'
							className='form-control'
							placeholder='Student name'
						/>
					</div>
					<div className='col'>
						<input
							value={english}
							onChange={(e) => {
								setEnglish(e.target.value);
							}}
							type='text'
							className='form-control'
							placeholder='english'
						/>
					</div>
					<div className='col'>
						<input
							value={kiswahili}
							onChange={(e) => {
								setKiswahili(e.target.value);
							}}
							type='text'
							className='form-control'
							placeholder='kiswahili'
						/>
					</div>
					<div className='col'>
						<input
							value={mathematics}
							onChange={(e) => {
								setMathematics(e.target.value);
							}}
							type='text'
							className='form-control'
							placeholder='mathematics'
						/>
					</div>
					<div className='col'>
						<input
							value={science}
							onChange={(e) => {
								setScience(e.target.value);
							}}
							type='text'
							className='form-control'
							placeholder='science'
						/>
					</div>
					<div className='col'>
						<input
							value={cre}
							onChange={(e) => {
								setCre(e.target.value);
							}}
							type='text'
							className='form-control'
							placeholder='cre'
						/>
					</div>
					<div className='col'>
						<input
							value={total}
							onChange={(e) => {
								setTotal(e.target.value);
							}}
							type='text'
							className='form-control'
							placeholder='total'
						/>
					</div>
					<div className='col'>
						<input
							value={grade}
							onChange={(e) => {
								setGrade(e.target.value);
							}}
							type='text'
							className='form-control'
							placeholder='grade'
						/>
					</div>

					<div className='col'>
						<button onClick={handleSubmit} className='btn btn-primary'>
							Add
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddMarks;
