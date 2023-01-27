import thehivecatlogreducer from "./reducer/thehivecatlogreducer";
import thehiveCartReducer from "./reducer/user-Store"
import thehiveDesignerRducer from "./reducer/designerReducre"

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
      resources: thehivecatlogreducer,
      cart: thehiveCartReducer,
      designer: thehiveDesignerRducer
    }
})

export default store
