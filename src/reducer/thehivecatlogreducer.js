import { createSlice } from "@reduxjs/toolkit";
import { getDesignerByName } from "../getdesignerProducts";
import {getAll} from "../Service/thehiveCatlog";


const thehivecatlogSlice = createSlice({
    name: "thehivecatlog",
    initialState: [
        false,
       
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