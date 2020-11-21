const express = require('express');
const router = require('express').Router();
const db = require('../db/index');

router.use(express.json());

//Get all Students from Database
router.get('/v1/students', async (req, res) => {
	try {
		const results = await db.query('SELECT * FROM students');

		res.status(200).json({
			status: 'success',
			data: {
				students: results.rows,
			},
		});
	} catch (err) {
		console.log(err);
	}
});

//Get one Student from Database
router.get('/v1/students/:id', async (req, res) => {
	try {
		const results = await db.query('SELECT * FROM students WHWRE id= $1', [
			req.params.id,
		]);

		res.status(200).json({
			status: 'success',
			data: {
				students: results.rows[0],
			},
		});
		// console.log(req.params.id);
	} catch (err) {
		console.log(err);
	}
});

//Add Student to Database
router.post('/v1/students', async (req, res) => {
	try {
		const results = await db.query(
			'INSERT INTO students (student_name, surname,student_adm,student_dob,student_phone, class_name, exam_name) values($1,$2,$3,$4,$5,$6,$7)  returning *',
			[
				req.body.student_name,
				req.body.surname,
				req.body.student_adm,
				req.body.student_dob,
				req.body.student_phone,
				req.body.class_name,
				req.body.exam_name,
			],
		);

		res.status(200).json({
			status: 'success',
			data: {
				students: results.rows[0],
			},
		});
		// console.log(req.rows);
	} catch (err) {
		console.log(err);
	}
});

//Update one Student in Database
router.put('/v1/students/:id', async (req, res) => {
	try {
		const results = await db.query(
			'UPDATE students SET student_name = $1, surname = $2,student_adm = $3,student_dob = $4,student_phone = $5, class_name = $6, exam_name =$7 WHERE id = $8 returning *',
			[
				req.body.student_name,
				req.body.surname,
				req.body.student_adm,
				req.body.student_dob,
				req.body.student_phone,
				req.body.class_name,
				req.body.exam_name,
				req.params.id,
			],
		);

		res.status(200).json({
			status: 'success',
			data: {
				students: results.rows[0],
			},
		});
		// console.log();
	} catch (err) {
		console.log(err);
	}
});

//Delete Student from Database
router.delete('/v1/students/:id', async (req, res) => {
	try {
		const results = await db.query('DELETE FROM students WHERE id = $1', [
			req.params.id,
		]);

		res.status(204).json({
			status: 'success',
		});
		// console.log();
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
