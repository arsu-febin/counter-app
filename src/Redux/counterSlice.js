import { createSlice } from "@reduxjs/toolkit";


// reducer
const counterSlice=createSlice({
    name:'counter',
    initialState:{
        count:0
    },

    // actions
    reducers:{
        increment:(state)=>{
            state.count++

        },
        decrement:(state)=>{
            state.count--
        },

        reset:(state)=>{
            return{...state,count:0}
        },
        incrementByAmount:(state,action)=>{
            state.count+=action.payload
        }

    }
})

 export const {increment,decrement,reset,incrementByAmount}=counterSlice.actions

 export default counterSlice.reducer

 