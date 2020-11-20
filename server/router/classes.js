const express = require('express');
const router = require('express').Router();
const db = require('../db/index');

router.use(express.json());

//Get all classes from Database
router.get('/v1/classes', (req, res) => {
	try {
		res.status(200).json({
			status: 'success',
			data: {
				classes: 'class one',
			},
		});
	} catch (err) {
		console.log(err);
	}
});

//Get one Class from Database
router.get('/v1/classes/:id', (req, res) => {
	try {
		res.status(200).json({
			status: 'success',
			data: {
				classes: 'classes two',
			},
		});
		console.log(req.params.id);
	} catch (err) {
		console.log(err);
	}
});

//Add one Class to Database
router.post('/v1/classes', (req, res) => {
	try {
		res.status(200).json({
			status: 'success',
			data: {
				classes: 'classes three',
			},
		});
		// console.log(req.rows);
	} catch (err) {
		console.log(err);
	}
});

//Update one Class in Database
router.put('/v1/classes/:id', (req, res) => {
	try {
		res.status(200).json({
			status: 'success',
			data: {
				classes: 'classes four',
			},
		});
		// console.log();
	} catch (err) {
		console.log(err);
	}
});

//Delete Class from Database
router.delete('/v1/classes/:id', (req, res) => {
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
