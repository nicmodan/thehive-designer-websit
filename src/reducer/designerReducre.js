import { createSlice } from "@reduxjs/toolkit";
import {getAll} from "../Service/thehiveCatlog";


const thehiveDesgnerSlice = createSlice({
    name: "theHivedesigner",
    initialState: [
    ],
    reducers: {
        getAllDesigner(state, action){
            return action.payload
        },
        
    }
})

export const {getAllDesigner} = thehiveDesgnerSlice.actions

export const inistalizeNote = ()=>{
    return async dispatch => {
        const response = await getAll()
        dispatch(getAllDesigner(response))
    }
}

export default thehiveDesgnerSlice.reducer