import React from 'react';
import './page.css';
import { Row, Col, Container } from 'react-bootstrap';
// import { Link } from "react-router-dom"
import { BsCartPlus, BsCart } from 'react-icons/bs';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../reducer/user-Store';

import { postCheckout } from '../Service/checkout';

import CartItem from '../component/CartItem';


const Checkout = () => {
	const cartState = useSelector((state) => state.cart);
	const dispatch = useDispatch()


	const handelCheckout = async (data) => {
		try {
			// INSERTE YOU CODE HERE
			const response = await postCheckout(data);
		} catch (exception) {
			console.log('no response');
		}
	};

	// REMOVE ITEMS FROM CART
	const removeItem = (id) => {

		// function to remove item from cart
		
		const cartData = cartState.filter(val=>val.uniqieID !== id)
		// console.log(cartData)
		// console.log(cartState)

		dispatch(addToCart(cartData))
	};

	// CART ITEM LIST
	// console.log(cartState)

	const totalCartOrder = () =>{
		
		let total = 0

		if(cartState[0]){
			const curency = cartState[0][0].cost.slice(0, 1)

			cartState.map((val)=>{

				total += Math.floor(Number( val[0].cost.slice(1) ))

			})

			return ` ${curency}${total} `
		}else{
			return total
		}

		
	}

	const cartitem = cartState.map((item, index) => (
		<CartItem
			key={index}
			idx={index}
			item={item}
			removeItem={()=>removeItem( item.uniqieID )}
		/>
	));
	return (
		<div className='px-8 w-9/12 mx-auto mt-10'>
			<div className='flex'>
				{!cartState[0] ? (
					<div className='w-3/5 mt-3'>
						<h1>No items in Cart</h1>
					</div>
				) : (
					<div className='w-3/5'>{cartitem}</div>
				)}
				<div className='w-2/5'>
					<h4 className='font-semibold'>Summary</h4>
					<div className='border rounded-lg shadow-lg p-3 mt-3'>
						<div className='flex justify-between items-center'>
							<p>Subtotal</p>
							<p>
								{/* $0 */}
								{totalCartOrder()}
							</p>
						</div>
						<p>Shipping and taxes are included at checkout</p>
						<div className='mt-2'>
							<a
								href='#'
								className='w-full block bg-blue-400 text-white font-bold rounded-lg px-3 py-2 text-center'
							>
								Checkout
							</a>
							<a
								href='#'
								className='w-full block font-bold rounded-lg px-3 py-2 text-center'
							>
								<img
									src={
										'https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png'
									}
									alt='paypal'
									className='mx-auto'
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
