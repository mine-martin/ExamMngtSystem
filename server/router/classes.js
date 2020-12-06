const router = require('express').Router();
const db = require('../db/index');

//Get all classes from Database
router.get('/api/v1/classes', async (req, res) => {
	try {
		const results = await db.query('SELECT * FROM classes');

		res.status(200).json({
			status: 'success',
			data: {
				classes: results.rows,
			},
		});
	} catch (err) {
		console.log(err);
	}
});

//Get one Class from Database
router.get('/api/v1/classes/:id', async (req, res) => {
	try {
		const results = await db.query('SELECT * FROM classes WHERE id = $1', [
			req.params.id,
		]);

		res.status(200).json({
			status: 'success',
			data: {
				classes: results.rows[0],
			},
		});
		// console.log(req.params.id);
	} catch (err) {
		console.log(err);
	}
});

//Add one Class to Database
router.post('/api/v1/classes', async (req, res) => {
	try {
		const results = await db.query(
			'INSERT INTO classes (class_name, class_teacher, exam_name) VALUES($1,$2,$3)  returning *',
			[req.body.class_name, req.body.class_teacher, req.body.exam_name],
		);

		res.status(200).json({
			status: 'success',
			data: {
				classes: results.rows[0],
			},
		});
	} catch (err) {
		console.log(err);
	}
});

//Update one Class in Database
router.put('/api/v1/classes/:id', async (req, res) => {
	try {
		const results = await db.query(
			'UPDATE classes SET class_name = $1, class_teacher =$2, exam_name =$3 WHERE id = $4 returning * ',
			[
				req.body.class_name,
				req.body.class_teacher,
				req.body.exam_name,
				req.params.id,
			],
		);

		res.status(200).json({
			status: 'success',
			data: {
				classes: results.rows[0],
			},
		});
		// console.log();
	} catch (err) {
		console.log(err);
	}
});

//Delete Class from Database
router.delete('/api/v1/classes/:id', async (req, res) => {
	try {
		const result = await db.query('DELETE FROM classes WHERE id = $1', [
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
