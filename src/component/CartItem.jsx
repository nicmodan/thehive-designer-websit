import React, { useState } from 'react';

import { addToCart } from '../reducer/user-Store';
import { useDispatch, useSelector } from 'react-redux';

const CartItem = ({ item, removeItem, idx }) => {
	
	// REDUX STROE
	const carts = useSelector( state => state.cart )

	const dispatch = useDispatch()
	

	const [quantity, setQuantity] = useState(1);
	const [currentTotal, setCurrentTotal] = useState(carts[idx][0].cost)
	const [fixedPreice, _ ] = useState(carts[idx][0].cost)
	// remove the dollar sign and covert to number
	const price = Number( fixedPreice.slice(1) ) // Number(carts[idx][0].cost.slice(1)) // Number(item[0].cost.slice(1));
	// total price
	// const itemTotal = ()=>{

	// 	const curency = item[0].cost.slice(0, 1)
	// 	const total = Number(quantity * price).toFixed(2)
	// 	// {`$${itemTotal.toFixed(2)}`}

	// 	console.log("total D", total)
	// 	console.log("quality", quantity)
	// 	// console.log("input", e.target.value)
	// 	console.log("price D", price)

	// 	return `${curency}${total}`
	// };

	const getImages = (imageObj) => {
		if (Object.keys(imageObj)[0] == ' ') {
			return imageObj[Object.keys(imageObj)[1]];
		} else {
			return imageObj[Object.keys(imageObj)[0]];
		}
	};

	const handleQuantity = (e) => {
		// itemTotal()

		const curency = item[0].cost.slice(0, 1)
		const total = Math.floor(e.target.value * price)
		// {`$${itemTotal.toFixed(2)}`}

		// console.log("total", total)
		// console.log("input", e.target.value)
		// console.log("price", price)

		const mainCost = `${curency}${total}`
		setCurrentTotal(mainCost)

		// UDATING REDUX STORE
		const newData = [...carts]
		const target = newData.filter(val=>val[0]._id===item[0]._id)

		// const resulte = [ ...target, ...{target.cost: mainCost} ]
		// [...target, ...{"0": {...target[0][0], cost: mainCost} }]
		// console.log(target[0])
		// console.log(target[0][0])
		// console.log(target[0][0].cost)
		// console.log(newData)
		// console.log(target)
		// target[0]

		const updateCost = [{ ...target[0][0], "cost": mainCost } ]
		const newtarget = newData.map(val=>{
				// const info = val

				if(val[0]._id===item[0]._id){
					target[0] = updateCost[0]
					return {0: target[0], 
								color: target[0]["color"], 
								size: target[0]["size"],
								uniqieID: target[0]["uniqieID"]
							}
				}else{
					return val
				}
				// ? updateCost[0] :val
			})
		// console.log( [{ ...target[0][0], "cost": mainCost }] )
		console.log(newtarget)
		// console.log(carts)
		dispatch(addToCart(newtarget))
		setQuantity(e.target.value);

	};

	// const removeItemById = () =>{
	// 	// dispatch(removeFromCart())
	// }
	// removeItemById()

	return (
		<div className='flex py-4 gap-3'>
			{/* IMAGE CONTAINER */}

			<div className='w-1/4 border-gray-300 border-2 rounded-lg'>
				<img
					src={getImages(item[0].image_links)}
					alt=''
					className='max-w-full object-fit rounded-lg'
				/>
			</div>

			{/* ITEM DESCRIPTION */}
			<div className='flex flex-col gap-3 py-2 w-2/4'>
				<h3 className='font-semibold text-base'>{item[0].name}</h3>
				<p className='text-gray-400'>{item[0].discription}</p>
				<div className='flex gap-1 text-gray-400'>
					<p>{item.color}</p>
					<p>{item.size}</p>
				</div>
				<div>
					<button
						type='button'
						onClick={removeItem} // this is to remove item
						className='text-sm border-b border-black px-1'
					>
						Remove Item
					</button>
				</div>
			</div>

			{/* ITEM COST */}
			<div className='flex flex-col justify-between py-3 w-1/4'>
				<div>
					<p>Quantity</p>
					<label className='relative text-sm inline-block text-gray-700'>
						<select
							className='w-14 h-8 bg-gray-200 outline-none'
							onChange={handleQuantity}
							value={quantity}
						>
							{/* OKAY !!!! */}
							{Array.from({ length: 10 }, (_, i) => i + 1).map((num, keys) => (
								<option key={keys} value={num}>{num}</option>
							))}

						</select>
					</label>
				</div>
				<div>
					<p className='text-gray-400 font-bold'>Total</p>
					<p>{ currentTotal }</p>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
