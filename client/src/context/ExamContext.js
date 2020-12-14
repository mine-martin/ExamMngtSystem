import React, { useState, createContext } from 'react';

export const ExamsContext = createContext();

export const ExamsContextProvider = (props) => {
	const [exams, setExams] = useState([]);
	const [marks, setMarks] = useState([]);

	return (
		<ExamsContext.Provider value={{ exams, setExams, marks, setMarks }}>
			{props.children}
		</ExamsContext.Provider>
	);
};
