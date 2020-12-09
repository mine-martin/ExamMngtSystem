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
module.exports = router;
