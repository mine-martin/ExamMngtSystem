require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json()); //access req.body
app.use(cors()); //run cors middleware

//Routes
//login and register
app.use('/home', require('./router/jwtAuth'));

//dashboard router
app.use('/home', require('./router/dashboard'));

app.use('/home', require('./router/students'));
app.use('/home', require('./router/classes'));
app.use('/home', require('./router/exams'));
// app.use('/home', require('./router/marks'));

const Port = process.env.PORT || 8080;

app.listen(Port, (req, res) => {
	console.log(`Server is up on Port ${Port}`);
});
