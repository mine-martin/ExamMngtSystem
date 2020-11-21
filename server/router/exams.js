const express = require('express');
const router = require('express').Router();
const db = require('../db/index');

router.use(express.json());

//Get all exams from Database
router.get('/v1/exams', async (req, res) => {
	try {
		const results = await db.query('SELECT * FROM exams');
		res.status(200).json({
			status: 'success',
			data: {
				exams: results.rows,
			},
		});
	} catch (err) {
		console.log(err);
	}
});

//Get one Exam from Database
router.get('/v1/exams/:id', async (req, res) => {
	try {
		const results = await db.query('SELECT * FROM exams WHERE id =$1', [
			req.params.id,
		]);

		res.status(200).json({
			status: 'success',
			data: {
				exams: results.rows[0],
			},
		});
		console.log(req.params.id);
	} catch (err) {
		console.log(err);
	}
});

//Add Exam to Database
router.post('/v1/exams', async (req, res) => {
	try {
		const results = await db.query(
			'INSERT INTO exams (exam_name, exam_date, exam_type) values($1,$2,$3)  returning *',
			[req.body.exam_name, req.body.exam_date, req.body.exam_type],
		);

		res.status(200).json({
			status: 'success',
			data: {
				exams: results.rows[0],
			},
		});
		// console.log(req.rows);
	} catch (err) {
		console.log(err);
	}
});

//Update one Exam in Database
router.put('/v1/exams/:id', async (req, res) => {
	try {
		const results = await db.query(
			'UPDATE exams SET exam_name = $1, exam_date =$2, exam_type =$3 WHERE id = $4 returning * '[
				(req.body.exam_name, req.body.exam_date, req.body.exam_type)
			],
		);

		res.status(200).json({
			status: 'success',
			data: {
				exams: results.rows[0],
			},
		});
		// console.log();
	} catch (err) {
		console.log(err);
	}
});

//Delete Exam from Database
router.delete('/v1/exams/:id', async (req, res) => {
	try {
		const results = await db.query('DELETE FROM exams WHERE id =$1', [
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
