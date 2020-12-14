import React, { useState, createContext } from 'react';

export const ClassesContext = createContext();

export const ClassesContextProvider = (props) => {
	const [classes, setClasses] = useState([]);
	const [selectedClass, setSelectedClass] = useState([]);

	return (
		<ClassesContext.Provider
			value={{ classes, setClasses, selectedClass, setSelectedClass }}>
			{props.children}
		</ClassesContext.Provider>
	);
};
