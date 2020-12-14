import React, { useState, createContext } from 'react';

export const MarksContext = createContext();

export const MarksContextProvider = (props) => {
	const [marks, setMarks] = useState([]);

	return (
		<MarksContext.Provider value={{ marks, setMarks }}>
			{props.children}
		</MarksContext.Provider>
	);
};
