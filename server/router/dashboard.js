const router = require('express').Router();
const db = require('../db/index');
const authorization = require('../middleware/authorization');

router.get('/auth/dashboard', authorization, async (req, res) => {
	try {
		// res.json(req.user);

		const user = await db.query('SELECT name FROM users WHERE id = $1', [
			req.user,
		]);
		res.json(user.rows[0]);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Not Found');
	}
});

router.post('/auth/marks', async (req, res) => {
	try {
		//destructure req.body
		const {
			student_name,
			english,
			kiswahili,
			mathematics,
			science,
			cre,
			total,
			average,
			grade,
		} = req.body;

		const results = await db.query(
			'INSERT INTO marks (student_name, english, kiswahili, mathematics, science,cre,total, average, grade) VALUES($1,$2,$3, $4, $5, $6, $7, $8, $9) returning *',
			[
				student_name,
				english,
				kiswahili,
				mathematics,
				science,
				cre,
				total,
				average,
				grade,
			],
		);

		const m = results.rows;
		res.json(m);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Not Found');
	}
});

router.get('/auth/marks', async (req, res) => {
	try {
		const results = await db.query('SELECT * FROM marks');

		res.status(200).json({
			status: 'success',
			data: {
				marks: results.rows,
			},
		});
		// const m = results.rows;
		// console.log(m);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Not Found');
	}
});

router.delete('/auth/marks/:id', async (req, res) => {
	try {
		const results = await db.query('DELETE FROM marks WHERE id = $1', [
			req.params.id,
		]);
		res.status(204).json({
			status: 'success',
		});
	} catch (err) {
		console.error(err.message);
	}
});

router.get('/auth/marks/:id', async (req, res) => {
	try {
		const results = await db.query('SELECT * FROM marks WHERE id =$1', [
			req.params.id,
		]);

		res.status(200).json({
			status: 'success',
			data: {
				marks: results.rows[0],
			},
		});
		// console.log(req.params.id);
	} catch (err) {
		console.error(err.message);
	}
});

router.put('/auth/marks/:id', async (req, res) => {
	try {
		const {
			student_name,
			english,
			kiswahili,
			mathematics,
			science,
			cre,
			total,
			average,
			grade,
		} = req.body;
		const results = await db.query(
			'UPDATE marks SET student_name = $1, english =$2, kiswahili =$3, mathematics =$4,  science =$5, cre =$6, total =$7, average =$8, 	grade =$9 WHERE id = $10 returning *',
			[
				student_name,
				english,
				kiswahili,
				mathematics,
				science,
				cre,
				total,
				average,
				grade,
				req.params.id,
			],
		);
		res.status(200).json({
			status: 'Success',
			data: {
				marks: results.rows[0],
			},
		});
	} catch (err) {
		console.error(err.message);
	}
});

module.exports = router;
