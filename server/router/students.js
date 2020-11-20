const express = require('express');
const router = require('express').Router();
const db = require('../db/index');

router.use(express.json());

//Get all Students from Database
router.get('/v1/students', (req, res) => {
	try {
		res.status(200).json({
			status: 'success',
			data: {
				students: 'mine',
			},
		});

		console.log('Get all students');
	} catch (err) {
		console.log(err);
	}
});

//Get one Student from Database
router.get('/v1/students/:id', (req, res) => {
	try {
		res.status(200).json({
			status: 'success',
			data: {
				students: 'john',
			},
		});
		console.log(req.params.id);
	} catch (err) {
		console.log(err);
	}
});

//Add one Student to Database
router.post('/v1/students', (req, res) => {
	try {
		res.status(200).json({
			status: 'success',
			data: {
				students: 'ann',
			},
		});
		console.log(req.rows);
	} catch (err) {
		console.log(err);
	}
});

//Update one Student in Database
router.put('/v1/students/:id', (req, res) => {
	try {
		res.status(200).json({
			status: 'success',
			data: {
				students: 'simon',
			},
		});
		// console.log();
	} catch (err) {
		console.log(err);
	}
});

//Delete Student from Database
router.delete('/v1/students/:id', (req, res) => {
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
