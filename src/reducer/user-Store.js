import { createSlice } from "@reduxjs/toolkit";
import {getAll} from "../Service/thehiveCatlog";


const thehiveCartSice = createSlice({
    name: "thehivecatlog",
    initialState: [
    ],
    reducers: {
        addToCart(state, action){
            return action.payload
        },
        
    }
})

export const {addToCart} = thehiveCartSice.actions

export default thehiveCartSice.reducer