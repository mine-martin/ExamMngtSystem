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
	const [average, setAverage] = useState('');
	const [grade, setGrade] = useState('');

	const handleCompute = (e) => {
		e.preventDefault();
		const result =
			parseInt(english) +
			parseInt(kiswahili) +
			parseInt(mathematics) +
			parseInt(science) +
			parseInt(cre);
		setTotal(result);

		const res = total / 5;
		setAverage(res);

		if (res >= 80) {
			setGrade('A');
		} else if (res >= 75) {
			setGrade('A-');
		} else if (res >= 70) {
			setGrade('B+');
		} else if (res >= 65) {
			setGrade('B');
		} else if (res >= 60) {
			setGrade('B-');
		} else if (res >= 55) {
			setGrade('C+');
		} else if (res >= 50) {
			setGrade('C');
		} else if (res >= 45) {
			setGrade('C-');
		} else if (res >= 40) {
			setGrade('D+');
		} else if (res >= 35) {
			setGrade('D');
		} else if (res >= 30) {
			setGrade('D-');
		} else {
			setGrade('E');
		}
	};

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
				average,
				grade,
			});
			console.log(response);
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
							value={average}
							onChange={(e) => {
								setTotal(e.target.value);
							}}
							type='text'
							className='form-control'
							placeholder='average'
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
						<button onClick={handleCompute} className='btn btn-primary'>
							Compute
						</button>
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
