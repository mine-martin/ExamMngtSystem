const router = require('express').Router();
const db = require('../db/index');

//Get all exams from Database
router.get('/api/v1/exams', async (req, res) => {
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
router.get('/api/v1/exams/:id', async (req, res) => {
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
		// console.log(req.params.id);
	} catch (err) {
		console.log(err);
	}
});

//Add Exam to Database
router.post('/api/v1/exams', async (req, res) => {
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
router.put('/api/v1/exams/:id', async (req, res) => {
	try {
		const results = await db.query(
			'UPDATE exams SET exam_name = $1, exam_date =$2, exam_type =$3 WHERE id = $4 returning *',
			[
				req.body.exam_name,
				req.body.exam_date,
				req.body.exam_type,
				req.params.id,
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
router.delete('/api/v1/exams/:id', async (req, res) => {
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

router.get('/api/v1/exam', async (req, res) => {
	try {
		const result = await db.query(
			'SELECT * FROM classes WHERE exam_name = $1 ',
			[req.body.exam_name],
		);

		res.status(200).json({
			status: 'success',
			data: {
				exams: result.rows,
			},
		});
		// console.log(result.rows);
	} catch (err) {
		console.log(err.message);
	}
});
module.exports = router;
