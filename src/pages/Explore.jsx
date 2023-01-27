import React from 'react';
import "./page.css"
import {Row, Col, Container} from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import {BsCartPlus} from "react-icons/bs"
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../reducer/user-Store';
import { getDesignerByName } from '../getdesignerProducts';
import { useEffect, useCallback } from "react";
import { getAllDesigner } from '../reducer/designerReducre';
import { setAllItems, 
		// inistalizeNote
		 } from "../reducer/thehivecatlogreducer"

// import {  } from '../reducer/thehivecatlogreducer';


const Explore = () => {

	// REDUX STORE
	// DISPATCH FOR CART
	const state = useSelector((state) => state.resources);
	const cartState =  useSelector((state) => state.cart);
	const designerProducots = useSelector(state=>state.designer)
	const dispatch  = useDispatch()

	// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
	



	// RETIVE DESIGNER INFORMATION
	const nameOfDesigner = useParams().nameOfDesigner
	const designer = async()=>{
		// dispatch(inistalizeNote())
		// console.log([...state])

		// await sleep(10000) // DAYFOR 10 SECONDS TO POST IMAGES

		try{
			const response = await getDesignerByName(nameOfDesigner)

			const newResponse =
					response.map(val=>{
						const storeURLS = {

						}

						val['images'].map((img, i)=>{
							storeURLS[`${i}Muckup`] = img['url']
						})

						const obj = {
							...val,
							name: val["productsTitle"],
							cost: val["setPriceD"],
							discription: val.productsDisc,
							_id: val["id"],
							catlog: val["designerName"],
							image_links: {...storeURLS},
							type: "designer"
						}
						// newResponse.append
						return obj
					})

			const newData = [...newResponse]

			dispatch(getAllDesigner(newData))

			// dispatch(inistalizeNote())
			
			dispatch(
				setAllItems([...state, ...newData])
				)
			console.log([...state, ...newData])
			return response

		}catch(error){
			console.log(error)
			console.log("PLEASE REDIRECTET THIS USER")
		}
		
	}

	const storeResulte = async ()=>{

		designer()
		// dispatch(
		// 		setAllItems([...state, ...designerProducots])
		// 		)
		// console.log([...state, ...designerProducots])
		
		// dispatch(inistalizeNote());
	}
	
	useEffect(()=>{
		storeResulte()
		// setBooleanAsync
		// if(!state[0]){
		// 	setBooleanAsync(true)
		// }
		// dispatch(inistalizeNote());
		console.log(nameOfDesigner)

	}, [ state[0] ])
	
	// useCallback(()=>{
	// 	storeResulte()
	// 	console.log("working")
	// }, [])
	// useEffect(() => {
		
	// 	dispatch(setAllItems([...state, ...designerProducots]));
	// 	console.log([...state, ...designerProducots])

	// }, [dispatch]);
	

	
	// const dispatch = useDispatch()

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
		if (imageObj) {
			return imageObj[Object.keys(imageObj)[1]];
		} else {
			return imageObj[Object.keys(imageObj)[0]];
		}
	};
	const getImagesUrl = (imageObj) => {
		
		return imageObj[0]["url"];
		
	}
	// console.log(state, resources);
	return (
		<Container fluid 
			// className='w-full px-10'
		>
			<h2 className='mt-5 text-3xl'>Featured Products</h2>

			<Row className='mt-5 flex gap-4 flex-wrap justify-center items-center'>

				{/* PACING DESIGNER DESIGNES */}

				{designerProducots[0] &&
				designerProducots.map((item, index) => {
					return (
						<Col sm={3}
							key={index}
							className='display-ordeer-preview'
							>
								

							<div className='relative border rounded-lg border-gray-300 ...'>
								<img
									src={getImagesUrl(item.images)}
									alt=''
									className='rounded-lg'
								/>
								<div 
									onClick={()=>handelCart(item["id"])}
									className='absolute top-2 right-2 display-cart ...'>
									<BsCartPlus className=''/>
								</div>
							</div>
							<Link 
							to={`/dispay/${nameOfDesigner}/${item["id"]}`}
							style={{color: "black", textDecoration: "none"}}
							>
								<div className='display-name-info'>
									<div className='display-name-info'>
										<p>{item.productsTitle}</p>
										<p className='text-sm text-gray-400'>{item.productsDisc}</p>
									</div>
									<div className='display-name-info'>
										<p>{item.setPriceN}</p>
									</div>
								</div>

							</Link>

						</Col>
					);
				})}
				{/* PACING DESIGNER DESIGNES */}

				

				{/* {state[0] &&
				state.map((item, index) => {
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
				})} */}
				
			</Row>

		</Container>
	);
};

export default Explore;
