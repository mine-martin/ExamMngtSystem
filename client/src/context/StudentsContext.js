import React, { useState, createContext } from 'react';

export const StudentsContext = createContext();

export const StudentsContextProvider = (props) => {
	const [students, setStudents] = useState([]);

	return (
		<StudentsContext.Provider value={{ students, setStudents }}>
			{props.children}
		</StudentsContext.Provider>
	);
};
