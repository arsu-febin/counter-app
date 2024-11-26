import { configureStore } from "@reduxjs/toolkit"
import counterSlice from './counterSlice'


// creating a store

const counterStore=configureStore({
    reducer:{

        counterReducer:counterSlice

    }
})

export default counterStore