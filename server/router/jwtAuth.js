const router = require('express').Router();
const db = require('../db/index');
const bcrypt = require('bcryptjs');
const jwtGenerator = require('../utils/jwtGenerator');
const validInfo = require('../middleware/validInfo');
const authorization = require('../middleware/authorization');

//register route
router.post('/auth/register', validInfo, async (req, res) => {
	try {
		//1. destructure req.body
		const { name, email, password } = req.body;

		//2. user exists
		const user = await db.query('SELECT * FROM users WHERE email = $1', [
			email,
		]);
		// res.json(user.rows);

		if (user.rows.length !== 0) {
			return res.status(401).json('User already exist');
		}

		//3. bcrypt user password
		const saltRounds = 10;
		const salt = await bcrypt.genSalt(saltRounds);

		const bcryptPassword = await bcrypt.hash(password, salt);

		//4. store the user in database
		const newUser = await db.query(
			'INSERT INTO users (name, email,password) VALUES($1,$2,$3) returning *',
			[name, email, bcryptPassword],
		);
		// res.json(newUser.rows[0]);

		//5. generate our jwt token
		const token = jwtGenerator(newUser.rows[0].id);

		res.json({ token });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Not Found');
	}
});

//login route
router.post('/auth/login', validInfo, async (req, res) => {
	try {
		//1. destructure req.body
		const { email, password } = req.body;

		//2. check if user doesn't exist 'if not throw err'

		const user = await db.query('SELECT * FROM users WHERE email = $1', [
			email,
		]);

		if (user.rows.length === 0) {
			return res.status(401).json('incorrect Password or Email');
		}

		//3. check if incoming password is same as in database
		const validPassword = await bcrypt.compare(password, user.rows[0].password);

		if (!validPassword) {
			return res.status(401).json('incorrect Password or Email ');
		}

		//4. give them jwt token
		const token = jwtGenerator(user.rows[0].id);

		res.json({ token });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Not Found');
	}
});

router.get('/auth/isverify', authorization, async (req, res) => {
	try {
		res.json(true);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Not Found');
	}
});

module.exports = router;
