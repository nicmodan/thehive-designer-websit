import thehivecatlogreducer from "./reducer/thehivecatlogreducer";
import thehiveCartReducer from "./reducer/user-Store"
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
      resources: thehivecatlogreducer,
      cart: thehiveCartReducer
    }
})

export default store
