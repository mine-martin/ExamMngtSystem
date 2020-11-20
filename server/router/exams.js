const express = require('express');
const router = require('express').Router();
const db = require('../db/index');

router.use(express.json());

//Get all exams from Database
router.get('/v1/exams', (req, res) => {
	try {
		res.status(200).json({
			status: 'success',
			data: {
				exams: 'end term',
			},
		});
	} catch (err) {
		console.log(err);
	}
});

//Get one Exam from Database
router.get('/v1/exams/:id', (req, res) => {
	try {
		res.status(200).json({
			status: 'success',
			data: {
				exams: 'exams two',
			},
		});
		console.log(req.params.id);
	} catch (err) {
		console.log(err);
	}
});

//Add one Exam to Database
router.post('/v1/exams', (req, res) => {
	try {
		res.status(200).json({
			status: 'success',
			data: {
				exams: 'exams three',
			},
		});
		// console.log(req.rows);
	} catch (err) {
		console.log(err);
	}
});

//Update one Exam in Database
router.put('/v1/exams/:id', (req, res) => {
	try {
		res.status(200).json({
			status: 'success',
			data: {
				exams: 'exams four',
			},
		});
		// console.log();
	} catch (err) {
		console.log(err);
	}
});

//Delete Exam from Database
router.delete('/v1/exams/:id', (req, res) => {
	try {
		res.status(204).json({
			status: 'success',
		});
		// console.log();
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
