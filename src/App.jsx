import { useEffect } from 'react';

// import logo from './logo.svg';
import './App.css';

// IMPORTING REDUX STORE TO CONNECT REDUCERS AND ACTION FUNCTIONS

import { useSelector, useDispatch } from 'react-redux';
import { inistalizeNote } from './reducer/thehivecatlogreducer';

import Navbar from './component/Navbar';
import Home from './pages/Home'

const App = () => {
	const dispatch = useDispatch();

	// ACCESSING ALL RESOURCES FROM THE BACKEND USING REDUX TO DISPLAY
	const resources = useSelector((state) => state.resources);
	// console.log(resouces);

	// RETRIVING ALL RESOUCES FROM BACKEND USING REDUX
	useEffect(() => {
		dispatch(inistalizeNote());
	}, [dispatch]);

	return (
		<div className='w-full h-screen'>
			<Navbar />
			<Home resources={resources} />
		</div>
	);
}

export default App;
