import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Explore from './Explore';
import Male from './Male';
import Female from './Female'
import Accessories from './Accessories';
import HomeDecor from './HomeDecor';
const Home = ({ resources }) => {
	return (
		<div className='w-full min-h-90'>
			<Routes>
				<Route
					path='/'
					element={<Explore resources={resources && resources} />}
				></Route>
				<Route
					path='/male'
					element={<Male resources={resources && resources} />}
				></Route>
        <Route
					path='/female'
					element={<Female resources={resources && resources} />}
				></Route>
				<Route
					path='/accessories'
					element={<Accessories resources={resources && resources} />}
				></Route>
				<Route
					path='/home&decor'
					element={<HomeDecor resources={resources && resources} />}
				></Route>
			</Routes>
		</div>
	);
};

export default Home;
