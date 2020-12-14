import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import UserFinder from '../../apis/UserFinder';

const UpdateMarks = (props) => {
	const { id } = useParams();
	let history = useHistory();

	const [student_name, setStudent_name] = useState('');
	const [english, setEnglish] = useState('');
	const [kiswahili, setKiswahili] = useState('');
	const [mathematics, setMathematics] = useState('');
	const [science, setScience] = useState('');
	const [cre, setCre] = useState('');
	const [total, setTotal] = useState('');
	const [average, setAverage] = useState('');
	const [grade, setGrade] = useState('');

	useEffect(() => {
		const fetchMark = async () => {
			const response = await UserFinder.get(`/marks/${id}`);
			// console.log(response.data.data.marks);
			setStudent_name(response.data.data.marks.student_name);
			setEnglish(response.data.data.marks.english);
			setKiswahili(response.data.data.marks.kiswahili);
			setMathematics(response.data.data.marks.mathematics);
			setScience(response.data.data.marks.science);
			setCre(response.data.data.marks.cre);
			setTotal(response.data.data.marks.total);
			setAverage(response.data.data.marks.average);
			setGrade(response.data.data.marks.grade);
		};
		fetchMark();
	}, []);

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

		const response = await UserFinder.put(`/marks/${id}`, {
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
		// console.log(response);
		history.push('/examsdetails/marks');
	};

	return (
		<div>
			<div>
				<h4 className='text-center  font-weight-light'>Update Marks Details</h4>
			</div>

			<form>
				<div className='form-group'>
					<label htmlFor='student_name'>student_name</label>
					<input
						value={student_name}
						onChange={(e) => setStudent_name(e.target.value)}
						id='student_name'
						className='form-control'
						type='text'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='english'>english</label>
					<input
						value={english}
						onChange={(e) => setEnglish(e.target.value)}
						id='english'
						className='form-control'
						type='text'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='kiswahili'>kiswahili</label>
					<input
						value={kiswahili}
						onChange={(e) => setKiswahili(e.target.value)}
						id='kiswahili'
						className='form-control'
						type='text'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='mathematics'>mathematics</label>
					<input
						value={mathematics}
						onChange={(e) => setMathematics(e.target.value)}
						id='mathematics'
						className='form-control'
						type='text'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='science'>science</label>
					<input
						value={science}
						onChange={(e) => setScience(e.target.value)}
						id='science'
						className='form-control'
						type='text'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='cre'>cre</label>
					<input
						value={cre}
						onChange={(e) => setCre(e.target.value)}
						id='cre'
						className='form-control'
						type='text'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='total'>total</label>
					<input
						value={total}
						onChange={(e) => setTotal(e.target.value)}
						id='total'
						className='form-control'
						type='text'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='average'>average</label>
					<input
						value={average}
						onChange={(e) => setAverage(e.target.value)}
						id='average'
						className='form-control'
						type='text'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='grade'>grade</label>
					<input
						value={grade}
						onChange={(e) => setGrade(e.target.value)}
						id='grade'
						className='form-control'
						type='text'
					/>
				</div>
				<button onClick={handleCompute} className='btn btn-primary mx-4'>
					Compute
				</button>
				<button
					onClick={handleSubmit}
					type='submit'
					className='btn btn-primary mx-4'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default UpdateMarks;
