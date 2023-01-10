import React, { useState } from 'react';

const CartItem = ({ item, removeItem }) => {
	const [quantity, setQuantity] = useState(1);
	// remove the dollar sign and covert to number
	let price = Number(item[0].cost.slice(1));
	// total price
	const itemTotal = quantity * price;

	const getImages = (imageObj) => {
		if (Object.keys(imageObj)[0] == ' ') {
			return imageObj[Object.keys(imageObj)[1]];
		} else {
			return imageObj[Object.keys(imageObj)[0]];
		}
	};

	const handleQuantity = (e) => {
		setQuantity(e.target.value);
	};

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
						// onClick={removeItem} this is to remove item
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
							{Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
								<option value={num}>{num}</option>
							))}
						</select>
					</label>
				</div>
				<div>
					<p className='text-gray-400 font-bold'>Total</p>
					<p>{`$${itemTotal.toFixed(2)}`}</p>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
