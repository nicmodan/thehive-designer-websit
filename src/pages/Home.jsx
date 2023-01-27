import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// IMPORTING PAGES
import Explore from './Explore';
import Male from './Male';
import Female from './Female';
import Accessories from './Accessories';
import HomeDecor from './HomeDecor';
import CatlogOrders from './displayOrder/display-order';
import Checkout from './checkout';

const Home = ({ resources }) => {
	const { designerProducots } = useSelector(state=>state.designer)

	return (
		<div className='w-full min-h-90'>
			<Routes>
				<Route
					path='/'
					element={<Explore resources={resources && resources} />}
				></Route>
				<Route
					path='/:nameOfDesigner'
					element={<Explore resources={resources && resources} />}
				></Route>
				<Route
					path='/male/:nameOfDesigner'
					element={<Male resources={resources && resources} />}
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
					path='/female/:nameOfDesigner'
					element={<Female resources={resources && resources} />}
				></Route>
				<Route
					path='/accessories'
					element={<Accessories resources={resources && resources} />}
				></Route>
				<Route
					path='/accessories/:nameOfDesigner'
					element={<Accessories resources={resources && resources} />}
				></Route>
				<Route
					path='/home&decor'
					element={<HomeDecor resources={resources && resources} />}
				></Route>
				<Route
					path='/home&decor/:nameOfDesigner'
					element={<HomeDecor resources={resources && resources} />}
				></Route>
				<Route
					path='/dispay/:id'
					element={<CatlogOrders />}
				></Route>
				<Route
					path={`/dispay/:designerProducots/:id`}
					element={<CatlogOrders />}
				></Route>
				<Route
					path='/cart'
					element={<Checkout />}
				></Route>
				<Route
					path='/cart/:nameOfDesigner'
					element={<Checkout />}
				></Route>
			</Routes>
		</div>
	);
};

export default Home;
