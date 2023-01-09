import thehivecatlogreducer from "./reducer/thehivecatlogreducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
      resources: thehivecatlogreducer
    }
})

export default store
