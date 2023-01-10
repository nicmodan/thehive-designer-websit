import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const active = 'border-b-2 border-black py-5 px-1';

const Navbar = () => {
	const cartState =  useSelector((state) => state.cart);

	return (
		<header className='flex justify-between items-center w-full h-10 px-5 py-8 shadow-xl bg-white'>
			<h3>The Hive</h3>
			<nav>
				<ul className='flex justify-center items-center gap-7 font-semibold text-sm'>
					<li>
						<NavLink
							to='/'
							className={({ isActive }) => (isActive ? active : '')}
						>
							Explore
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/male'
							className={({ isActive }) => (isActive ? active : '')}
						>
							Male
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/female'
							className={({ isActive }) => (isActive ? active : '')}
						>
							female
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/accessories'
							className={({ isActive }) => (isActive ? active : '')}
						>
							Accessories
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/home&decor'
							className={({ isActive }) => (isActive ? active : '')}
						>
							Home Decor
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className='flex gap-3'>
				<div className='flex items-center gap-4 border-l pl-3 mr-3'>
					<FaInstagram />
					<FaTwitter />
				</div>
				<Link
					to='/cart'
					className='flex items-center gap-2 border-gray-300 p-1.5 rounded-lg border bg-white hover:bg-gray-100'
				>
					<FiShoppingCart />
					<p>Cart</p>
					<p>{cartState.length}</p>
				</Link>
			</div>
		</header>
	);
};

export default Navbar;
