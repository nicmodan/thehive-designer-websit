import React from 'react';

const Explore = ({ resources }) => {
	const getImages = (imageObj) => {
		if (Object.keys(imageObj)[0] == ' ') {
			return imageObj[Object.keys(imageObj)[1]];
		} else {
			return imageObj[Object.keys(imageObj)[0]];
		}
	};
	console.log(resources);
	return (
		<div className='w-full px-10'>
			<h2 className='mt-5 text-3xl'>Featured Products</h2>

			<div className='mt-5 flex gap-4 flex-wrap justify-center items-center'>
				{resources.map((item, index) => {
					return (
						<div
							key={index}
							className='w-60'
						>
							<div className='border rounded-lg border-gray-300'>
								<img
									src={getImages(item.image_links)}
									alt=''
									className='rounded-lg'
								/>
							</div>
							<div>
								<p>{item.name}</p>
								<p className='text-sm text-gray-400'>{item.discription}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Explore;
