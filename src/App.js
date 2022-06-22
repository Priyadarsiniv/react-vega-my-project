import React from 'react';
import BarChart from './BarChart';
import './App.scss';

const barData = {
	values: [
		{ year: '2016', number: 1.2 },
		{ year: '2017', number: 1.9 },
		{ year: '2018', number: 3.1 },
		{ year: '2019', number: 4.8 },
		{ year: '2020', number: 6.9 },
		{ year: '2021', number: 11.3 },
	],
};
const App = () =>
	<div className="App" role="App">
		<BarChart data={ barData }/>,
	</div>;

export default App;
