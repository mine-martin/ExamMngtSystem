import React, { useEffect, useState } from 'react';
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
import UserFinder from './apis/UserFinder';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MarksList from './routes/MarksList';
import { MarksContextProvider } from './context/MarksContext';
import UpdateMarks from './routes/Updates/UpdateMarks';

toast.configure();

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const setAuth = (boolean) => {
		setIsAuthenticated(boolean);
	};

	const isAuth = async () => {
		try {
			const response = await UserFinder.get('/isverify', {
				method: 'GET',
				headers: { token: localStorage.token },
			});

			const result = await response.data;
			// console.log(result);

			result === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		isAuth();
	});

	return (
		<StudentsContextProvider>
			<ClassesContextProvider>
				<ExamsContextProvider>
					<MarksContextProvider>
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
									<Route
										exact
										path='/classdetails'
										component={ClassesDetails}
									/>
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
									{/* <Route
									exact
									path='/examsdetails/:class_name'
									component={ListClass}
								/> */}
									<Route
										exact
										path='/examsdetails/marks'
										component={MarksList}
									/>
									<Route
										exact
										path='/examsdetails/marks/:id/update'
										component={UpdateMarks}
									/>
								</Switch>
							</Router>
						</div>
					</MarksContextProvider>
				</ExamsContextProvider>
			</ClassesContextProvider>
		</StudentsContextProvider>
	);
};

export default App;
