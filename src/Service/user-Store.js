// import {createSlice} from "@reduxjs/toolkit"
// // import thehiveCatlog from "./thehiveCatlog"
// import {getAll} from "./thehiveCatlog"

// const storeUserSlice = createSlice({
//     name: "user",
//     initialState: {
//         uploadImg: [] 
//     },
//     reducers: {
//         updateUserStore(state, action){
//             // return;
//             // const centent = action.payload
//             // state.push({centent})
//             return action.payload
//         }
//     }
// })

// export const {updateUserStore} = storeUserSlice.actions

// export const inistalizeNote = ()=>{
//     return async dispatch => {
//         const response = await getAll() // thehivecatlog.getAll()
//         dispatch(updateUserStore(response))
//     }
// }

// export default storeUserSlice.reducer 