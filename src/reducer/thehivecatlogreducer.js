import { createSlice } from "@reduxjs/toolkit";
import {getAll} from "../Service/thehiveCatlog";


const thehivecatlogSlice = createSlice({
    name: "thehivecatlog",
    initialState: [

    ],
    reducers: {
        setAllItems(state, action){
            return action.payload
        },
        
    }
})

export const {setAllItems} = thehivecatlogSlice.actions

export const inistalizeNote = ()=>{
    return async dispatch => {
        const response = await getAll()
        dispatch(setAllItems(response))
    }
}

export default thehivecatlogSlice.reducer