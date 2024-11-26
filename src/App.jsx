
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './Redux/counterSlice'
import { useState } from 'react'



function App() {

  const [amount,setAmount]=useState(0)
  const dispatch=useDispatch()
const {count}=useSelector((state)=>state.counterReducer)

const handleIncrementByAmount=()=>{
  if(amount){
    dispatch(incrementByAmount(Number(amount)))
  }
  else{
    alert("Please enter the amount")
  }
}

  return (
    <>
      
      <div className='d-flex align-items-center justify-content-center flex-column p-3' style={{minHeight:'100vh', backgroundColor:'black'}}>
       <h1 className='text-white'>Counter App</h1>
      <div className='d-flex mt-3 align-items-center  border border-3 border-white rounded flex-column' style={{height:'400px',Width:'700px'}}>
        <h1 className='fs-1 mt-5 text-white'>{count}</h1>

        <div className='mt-3 d-flex align-items-center justify-content-around'>
        <button onClick={()=>dispatch(decrement())} className='btn btn-warning p-2 m-3'>DECREMENT</button>
        <button onClick={()=>dispatch(reset())} className='btn btn-danger p-2 m-3'>RESET</button>
        <button onClick={()=>dispatch(increment())} className='btn btn-success p-2 m-3'>INCREMENT</button>
      </div>
      <div className='mt-3 d-flex align-items-center justify-content-between'>
        <input onChange={(e)=>setAmount(e.target.value)} type="text" className='form-control' placeholder='Increment counter amount' />
        <button onClick={(handleIncrementByAmount)} className='btn btn-info ms-2'>Increment By Amount</button>
      </div>
      </div>
      </div>
      
    </>
  )
}

export default App
