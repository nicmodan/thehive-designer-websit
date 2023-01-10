import React from 'react';
import "./page.css"
import {Row, Col, Container} from "react-bootstrap"
// import { Link } from "react-router-dom"
import {BsCartPlus, BsCart} from "react-icons/bs"
 
import { useSelector } from 'react-redux';
// import { addToCart } from '../reducer/user-Store';
import { postCheckout } from "../Service/checkout";

const Checkout = () =>{
    const cartState =  useSelector((state) => state.cart);
    console.log(cartState)

    const handelCheckout = async(data) =>{
        try{
            // INSERTE YOU CODE HERE
            const response = await postCheckout(data)

        }catch(exception){
            console.log("no response")
        }
    }

    return(
        <h1>
            PLease Designe checkout Form here
            all cart state as been aquired!! 
        </h1>
    );
}

export default Checkout