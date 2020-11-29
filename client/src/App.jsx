import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
const App = () => {
	return (
		<StudentsContextProvider>
			<ClassesContextProvider>
				<ExamsContextProvider>
					<div className='container mt-5'>
						<Router>
							<Switch>
								<Route exact path='/' component={Home} />
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
