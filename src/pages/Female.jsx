import React from 'react'
import "./page.css"
import {Row, Col, Container} from "react-bootstrap"
import { Link } from "react-router-dom"
import {BsCartPlus} from "react-icons/bs"
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../reducer/user-Store';

const Female = () => {
  // DISPATCH FOR CART
	const state = useSelector((state) => state.resources);
	const cartState =  useSelector((state) => state.cart);
	const dispatch = useDispatch()

	const handelCart = (id) =>{
		// console.log(id)
		const newState = [...state]
		const totalCarts = [...cartState]
		const uniqieID = cartState.length + 1
		const obj = {...newState.filter(val=>val["_id"]===id), ...{color: "", size: "", uniqieID}}

		// THIS FUNCTION IS FOR UPDATE AND REPLACING VALUES
		
		// const storeState = totalCarts.map(val=>{
		// 	// if exist replce
		// 	return val["_id"] === id? obj: val
		// })

		const storeCart = [...totalCarts, obj]
		console.log(storeCart)


		dispatch(addToCart(storeCart))
	}

  const getImages = (imageObj) => {
		if (Object.keys(imageObj)[0] == " ") {
			return imageObj[Object.keys(imageObj)[1]];
		} else  {
			return imageObj[Object.keys(imageObj)[0]];
		}
	};
  return (
    <Container fluid>
      
      <h2 className='mt-5 text-3xl'>Female</h2>
      

      <Row className='mt-5 flex gap-4 flex-wrap justify-center items-center '>
				{state.map((item, index) => {
					if (item.type === 'female') {
						return (
							<Col sm={3}
								key={index}
								className='display-ordeer-preview'
							>
								

									<div className='relative border rounded-lg border-gray-300 ...'>
										<img
											src={getImages(item.image_links)}
											alt=''
											className='rounded-lg'
										/>
										<div 
											onClick={()=>handelCart(item["_id"])}
											className='absolute top-2 right-2 display-cart ...'>
											<BsCartPlus className=''/>
										</div>
									</div>
									<Link 
									to={`/dispay/${item["_id"]}`}
									style={{color: "black", textDecoration: "none"}}
									>
										<div className='display-name-info'>
											<div className='display-name-info'>
												<p>{item.name}</p>
												<p className='text-sm text-gray-400'>{item.discription}</p>
											</div>
											<div className='display-name-info'>
												<p>{item.cost}</p>
											</div>
										</div>

									</Link>

							</Col>
						);
					}
				})}
			</Row>
    </Container>
  )
}

export default Female