import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { ClassesContextProvider } from './context/ClassesContext';
import { ExamsContextProvider } from './context/ExamContext';
import { StudentsContextProvider } from './context/StudentsContext';
import ClassesDetails from './routes/ClassesDetails';
import ExamDetails from './routes/ExamDetails';
import Home from './routes/Home';
import StudentsDetails from './routes/StudentsDetails';
import UpdateStudents from './routes/Updates/UpdateStudents';
import UpdateClasses from './routes/Updates/UpdateClasses';
import UpdateExams from './routes/Updates/UpdateExams';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const setAuth = (boolean) => {
		setIsAuthenticated(boolean);
	};

	return (
		<StudentsContextProvider>
			<ClassesContextProvider>
				<ExamsContextProvider>
					<div className='container mt-5'>
						<Router>
							<Switch>
								<Route
									exact
									path='/'
									render={(props) =>
										!isAuthenticated ? (
											<Login {...props} setAuth={setAuth} />
										) : (
											<Redirect to='/dashboard' />
										)
									}
								/>
								<Route
									exact
									path='/register'
									render={(props) =>
										!isAuthenticated ? (
											<Register {...props} setAuth={setAuth} />
										) : (
											<Redirect to='/' />
										)
									}
								/>
								<Route
									exact
									path='/dashboard'
									render={(props) =>
										isAuthenticated ? (
											<Dashboard {...props} setAuth={setAuth} />
										) : (
											<Redirect to='/' />
										)
									}
								/>

								<Route exact path='/dashboard' component={Home} />
								<Route
									exact
									path='/studentsdetails'
									component={StudentsDetails}
								/>
								<Route exact path='/classdetails' component={ClassesDetails} />
								<Route exact path='/examsdetails' component={ExamDetails} />
								<Route
									exact
									path='/studentsdetails/:id/update'
									component={UpdateStudents}
								/>
								<Route
									exact
									path='/classdetails/:id/update'
									component={UpdateClasses}
								/>
								<Route
									exact
									path='/examsdetails/:id/update'
									component={UpdateExams}
								/>
							</Switch>
						</Router>
					</div>
				</ExamsContextProvider>
			</ClassesContextProvider>
		</StudentsContextProvider>
	);
};

export default App;
