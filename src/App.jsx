import { useEffect, useCallback, useState } from 'react';
// import 

// import logo from './logo.svg';
import './App.css';

// IMPORTING REDUX STORE TO CONNECT REDUCERS AND ACTION FUNCTIONS

import { useSelector, 
		 useDispatch 
	   } from 'react-redux';

import { 
		inistalizeNote, 
		} from './reducer/thehivecatlogreducer';
// import { getAllDesigner } from './reducer/designerReducre';

import Navbar from './component/Navbar';
import Home from './pages/Home'

const App = () => {
	

	const dispatch = useDispatch();

	// ACCESSING ALL RESOURCES FROM THE BACKEND USING REDUX TO DISPLAY
	const resources = useSelector((state) => state.resources);
	// const designerProducots = useSelector(state=>state.designer)

	// console.log(resouces);

	// RETRIVING ALL RESOUCES FROM BACKEND USING REDUX
	useEffect(() => {
		const resulte = dispatch(inistalizeNote());
		console.log(resulte)
	}, [dispatch]);

	// if(!resources[0]){

	// 	dispatch(setAllItems([...resources, ...designerProducots]))
	// 	// console.log("done!!!")
	// }

	// useEffect(()=>{
	// 	dispatch(setAllItems([...resources, ...designerProducots]));
	// 	console.log([...resources, ...designerProducots])
	// }, [])
	

	return (
		<div className='w-full h-screen'>
			<Navbar />
			<Home resources={resources} />
		</div>
	);
}

export default App;
