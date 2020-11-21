import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ClassesDetails from './routes/ClassesDetails';
import ExamDetails from './routes/ExamDetails';
import Home from './routes/Home';
import StudentsDetails from './routes/StudentsDetails';

const App = () => {
	return (
		<div className='container mt-5'>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/studentsdetails' component={StudentsDetails} />
					<Route exact path='/classdetails' component={ClassesDetails} />
					<Route exact path='/examsdetails' component={ExamDetails} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
