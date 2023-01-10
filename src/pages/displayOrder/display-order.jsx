// import React from "react";
// import "./display-order.css"

// const DisplayOrder = () =>{
//     return(
//         <div>

//         </div>
//     );
// }

// export default DisplayOrder

import React, {useState, useEffect} from "react"
import "./display-order.css"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import { getAnyAmountItems } from "../../reducer/queryReducres"
import { addToCart } from "../../reducer/user-Store"


const CatlogOrders = () =>{

    const id = useParams().id
    // console.log(id)
    const newState = useSelector(state=>state.resources)
	const dispatch = useDispatch()

    // CART REDUX STORE
	const cartState =  useSelector((state) => state.cart);

    const selsectedItem = newState.filter(val=>val["_id"]===id)
    console.log(selsectedItem)
    // PLEASE REMENBER TO REDIRECT THE USER IF NO PRODUCTCS WAS SELECTED.

    // CLOSSLY RELATED PRODUCTCS
    const relatedProducts = newState.filter(val=>selsectedItem[0]["catlog"]===val["catlog"])
    console.log(relatedProducts)

    // RANDOM 4 PRODUCTCS
    const randomFour = getAnyAmountItems(newState, 4)
    console.log(randomFour)


    // BORDER STYLE COLOR CHANGE WHEN SELECTED 
    const [borderId, setBorderId] = useState(0)
    const borderStyle = {border: "1px solid orange"}

    // IMAGE BACKGROUND COLOR
    const [imgColor, setImgColor] = useState("")

    // TARGET FIRST IMAGE
    const firstImg = selsectedItem[0]["image_links"][Object.keys(selsectedItem[0]["image_links"])[0]]

    const [imgLink, setImgLink] = useState("")

    useEffect(()=>{
        setImgLink(firstImg)
    }, [firstImg])


    const handelClickDisplay = (val, img) =>{
        setBorderId(val)
        setImgLink(img)
    }

    const handelClickColor = (val) =>{
        setImgColor(val)
    }

    const sizeOfClothings = ["XS", "S", "M", "L", "XL"]
    const isActive = {backgroundColor: "rgb(0, 0, 0)"}
    const [sizeBoolen, setSizeBoolen] = useState("XS")

    const handelClickSize = (val) =>{
        setSizeBoolen(val)
    }

    const handelCart = (id) =>{
		// console.log(id)
		const state = [...newState]
		const totalCarts = [...cartState]
		const obj = {...state.filter(val=>val["_id"]===id), ...{color: imgColor, size: sizeBoolen}}

		// THIS FUNCTION IS FOR UPDATE AND REPLACING VALUES
		
		// const storeState = totalCarts.map(val=>{
		// 	// if exist replce
		// 	return val["_id"] === id? obj: val
		// })

		const storeCart = [...totalCarts, obj]
		console.log(storeCart)


		dispatch(addToCart(storeCart))
	}

    return(
        <Container>
            <Row className="catlog-order-body">
                <Col sm={8} className={"catlog-order"}>
                    {/* display
                     */}
                    
                    <div className="catalog-order-displays">
                        <div className="catalog-order-display-lists">
                            {
                                Object.keys(selsectedItem[0]["image_links"]).map((val, idx)=>(

                                    <span 
                                        key={idx}
                                        className="catlog-orders-displaied"
                                        onClick={()=>handelClickDisplay(idx, selsectedItem[0]["image_links"][val])}
                                        style={ borderId===idx?
                                                borderStyle: {}}
                                    >
                                        {/*  IMAGE TO DISPLAY */}
                                        <img src={selsectedItem[0]["image_links"][val]} 
                                            className="all-img-catalog"
                                            alt={"name of image"} 
                                        />

                                    </span>

                                ))
                            }
                           
                        </div>  
                        <div className="catalog-order-display-items">
                            <div className="catalog-order-display-item">
                                {/* selsectedItem */}
                                <img src={imgLink}
                                    className="all-img-catalog"
                                    style={{backgroundColor: imgColor}} 
                                    alt={"name of image"} 
                                />
                            </div>
                        </div>  
                    </div>
                    <div className="catlog-order-preview">
                        <h3>Similar Products</h3>
                        <div className="catlog-order-preview-products">
                            {/* LINK */}

                            {
                                relatedProducts.map((val, idx)=>(

                                    <div key={idx} className="copp-item">
                                        <Link 
                                        to={`/dispay/${val["_id"]}`}
                                        style={{color: "black", textDecoration: "none"}}
                                        >
                                            <div className="copp-item-img">
                                                <img src={val["image_links"][Object.keys(val["image_links"])[0]]} 
                                                    className="all-img-catalog"
                                                    alt={val["name"]} 
                                                />
                                            </div>
                                            <div className="copp-item-info">
                                                <span className="copp-item-info-name">
                                                    <h6>
                                                        {val["name"]}
                                                    </h6>
                                                </span>
                                                <span className="copp-item-info-price">
                                                    {val["cost"]}
                                                </span>
                                            </div>
                                        </Link>
                                    </div>

                                ))

                            }
                        </div>
                    </div>
                </Col>
                <Col sm={4} className={"catlog-order"}>
                    <div className="catlog-order-information">
                        <div className="catlog-order-information-header">
                            <div className="coih-title">
                                <h4> {selsectedItem[0]["catlog"]} </h4>
                                <p style={{color: "gray"}}>{selsectedItem[0]["name"]}</p>
                            </div>
                            <div className="coih-price">
                                <h5 style={{margin: "revert"}}>{selsectedItem[0]["cost"]}</h5>
                            </div>
                        </div>
                        <div className="catlog-order-information-body">
                            { 
                            // type
                                // ["male", "female", "kidsandbabies"].map(val=>(
                                //     selsectedItem[0]["image_links"]["type"] === val? 
                                // (selsectedItem[0]["image_links"] === ("male"))
                                    <div className="catlog-order-information-sections cois-color">
                                        
                                        <div className="container-tools-edit">
                                            <h4 className="muckup-title">
                                                Choose product colors
                                            </h4>
                                            <p className="muckup-subtitle">
                                                Select multiple background colors to offer
                                            </p>
                                            <div className="colorPickerSwatch">
                                                    <div role="button" tabIndex="0" className="productColor whiteCheckmark" title="Black" data-cy="productColor-Black" fdprocessedid="2gz8sz" onClick={()=>handelClickColor("rgb(34, 34, 34)")} style={{backgroundColor: "rgb(34, 34, 34)"}}>
                                                    </div>
                                                    <div role="button" tabIndex="0" className="productColor whiteCheckmark" title="Classic Red" data-cy="productColor-Classic Red" fdprocessedid="nqbvn" onClick={()=>handelClickColor("rgb(197, 0, 0)")} style={{backgroundColor: "rgb(197, 0, 0)"}} >
                                                    </div>
                                                    <div role="button" tabIndex="0" className="productColor blackCheckmark" title="Lemon Yellow " data-cy="productColor-Lemon Yellow " fdprocessedid="kjvz2d" onClick={()=>handelClickColor("rgb(252, 245, 139)")} style={{backgroundColor: "rgb(252, 245, 139)" }}>
                                                    </div>
                                                    <div role="button" tabIndex="0" className="productColor whiteCheckmark" title="New Navy" data-cy="productColor-New Navy" fdprocessedid="s71f1n" onClick={()=>handelClickColor("rgb(12, 26, 44)")} style= {{ backgroundColor: "rgb(12, 26, 44)" }} >
                                                    </div>
                                                    <div role="button" tabIndex="0" className="productColor whiteCheckmark" title="Deep Royal" data-cy="productColor-Deep Royal" fdprocessedid="ahxp5" onClick={()=>handelClickColor("rgb(34, 72, 143)")} style={{backgroundColor: "rgb(34, 72, 143)"}}>
                                                    </div>
                                                    <div role="button" tabIndex="0" className="productColor whiteCheckmark" title="Purple" data-cy="productColor-Purple" fdprocessedid="rhyxuf" onClick={()=>handelClickColor("rgb(82, 56, 133)")} style={{backgroundColor: "rgb(82, 56, 133)"}}>
                                                    </div>
                                                    <div role="button" tabIndex="0" className="productColor active blackCheckmark" title="White" data-cy="productColor-White" fdprocessedid="prz92f" onClick={()=>handelClickColor("rgb(255, 255, 255)")} style={{backgroundColor: "rgb(255, 255, 255)"}}>
                                                    </div>
                                                    <div role="button" tabIndex="0" className="productColor whiteCheckmark" title="Heathered Charcoal " data-cy="productColor-Heathered Charcoal " fdprocessedid="0dhn6" onClick={()=>handelClickColor("rgb(65, 60, 66)")} style={{backgroundColor: "rgb(65, 60, 66)" }} >
                                                    </div>
                                                    <div role="button" tabIndex="0" className="productColor blackCheckmark" title="Light Heather Grey " data-cy="productColor-Light Heather Grey " fdprocessedid="ayz2f7" onClick={()=>handelClickColor("rgb(209, 209, 209)")} style={{backgroundColor: "rgb(209, 209, 209)"}} >
                                                    </div>
                                                    <div role="button" tabIndex="0" className="productColor whiteCheckmark" title="Heathered Royal " data-cy="productColor-Heathered Royal " fdprocessedid="eb44k2" onClick={()=>handelClickColor("rgb(100, 134, 208)")} style={{backgroundColor: "rgb(100, 134, 208)"}}>
                                                    </div>
                                                    <div role="button" tabIndex="0" className="productColor whiteCheckmark" title="Grey" data-cy="productColor-Grey" fdprocessedid="5n0b4if" onClick={()=>handelClickColor("rgb(143, 150, 138)")} style={{backgroundColor: "rgb(143, 150, 138)"}}>
                                                    </div>
                                            </div>
                                        </div>

                                    </div>
                                //     :
                                //     ""
                                // ))
                            }

                            {
                                //  ["male", "female", "kidsandbabies"].map(val=>(
                                //     selsectedItem[0]["image_links"]["type"] === val? 
                                    <div className="catlog-order-information-sections cois-size">
                                    
                                        <div className="listing__options sizes">
                                            <div className="sizeoptions__label">
                                                <span className="form__label">Size</span>
                                            </div>
                                        </div>

                                        <div className="variantselector__grid size ">

                                            {/* <div className="variantselector__item is-active">
                                                <label className="variantselector__label" for="xs">
                                                    <div className="variantselector__size" style={{backgroundColor: "rgb(0, 0, 0)"}}>
                                                        XS
                                                    </div>
                                                    <input 
                                                        type="radio" 
                                                        id="xs" 
                                                        name="variantselector__radio" 
                                                        dataCy="variant-selector-size-0" 
                                                        dataTestId="variant-selector-size-0" 
                                                        value="0" />

                                                </label>
                                            </div> */}
                                            {
                                                sizeOfClothings.map((val, idx)=>(
                                                    <div key={idx} onClick={()=>handelClickSize(val)} className={`variantselector__item`}>
                                                        <label className="variantselector__label" htmlFor={val}>
                                                            <div className="variantselector__size" style={sizeBoolen===val?isActive:{}}>
                                                                {val}
                                                            </div>
                                                            <input 
                                                                type="radio" 
                                                                id={val} 
                                                                name="variantselector__radio" 
                                                                datacy="variant-selector-size-0" 
                                                                datatestid="variant-selector-size-0" 
                                                                value="0" />

                                                        </label>
                                                    </div>
                                                ))
                                            }

                                        </div>

                                    </div>
                                //     :
                                //     ""
                                //  ))
                            }

                            <div className="catlog-order-information-sections cois-payment">
                                <Button onClick={()=>handelCart(selsectedItem[0]["_id"])} variant="warning" className="cois-payment-button">
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="catlog-order-preview">
                        <div className="catlog-order-preview-info">
                            <div className="catlog-order-preview-info-header">
                                <div className="catlog-order-preview-info copih-nav">
                                    <b>Discriptions</b>
                                </div>
                            </div>
                            <div className="catlog-order-preview-info-information">
                                <div className="catlog-order-preview-info copih-body">
                                    <p style={{color: "gray"}}>{selsectedItem[0]["discription"]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={12} className={"catlog-order-list"}>
                    <div className="catlog-order-preview catlog-order-list-preview">
                        <h3>you might also like</h3>
                        {
                            <div className="catlog-order-preview-products  catlog-order-list-preview">
                            {/* LINK */}

                                {/* {
                                    <div className="copp-item">
                                        <Link 
                                        to={`/order/`}
                                        style={{color: "black", textDecoration: "none"}}
                                        >
                                            <div className="copp-item-img">
                                                <img src={""} 
                                                    className="all-img-catalog"
                                                    style={{backgroungColor: imgColor}} 
                                                    alt={"name of image"} 
                                                />
                                            </div>
                                            <div className="copp-item-info">
                                                <span className="copp-item-info-name">
                                                    <h6>
                                                        information
                                                    </h6>
                                                </span>
                                                <span className="copp-item-info-price">
                                                    price
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                } */}
                                {
                                    randomFour.map((val, idx)=>(

                                        <div key={idx} className="copp-item">
                                            <Link 
                                            to={`/dispay/${val["_id"]}`}
                                            style={{color: "black", textDecoration: "none"}}
                                            >
                                                <div className="copp-item-img">
                                                    <img src={val["image_links"][Object.keys(val["image_links"])[0]]} 
                                                        className="all-img-catalog"
                                                        alt={val["name"]} 
                                                    />
                                                </div>
                                                <div className="copp-item-info">
                                                    <span className="copp-item-info-name">
                                                        <h6>
                                                            {val["name"]}
                                                        </h6>
                                                    </span>
                                                    <span className="copp-item-info-price">
                                                        {val["cost"]}
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>

                                    ))

                                }
                            </div>
                        }
                    </div>
                </Col>
            </Row>
        </Container>  
    )
}

export default CatlogOrders