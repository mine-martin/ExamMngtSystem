import React, { useState, createContext } from 'react';

export const ClassesContext = createContext();

export const ClassesContextProvider = (props) => {
	const [classes, setClasses] = useState([]);

	return (
		<ClassesContext.Provider value={{ classes, setClasses }}>
			{props.children}
		</ClassesContext.Provider>
	);
};
