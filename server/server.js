require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

//Routes
app.use('/api', require('./router/students'));
app.use('/api', require('./router/classes'));
app.use('/api', require('./router/exams'));

const Port = process.env.PORT || 8080;

app.listen(Port, (req, res) => {
	console.log(`Server is up on Port ${Port}`);
});
