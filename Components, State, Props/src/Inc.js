import React, { useState } from 'react'

function Inc() {
   let [state,setState] =  useState(1)
  return (
    <div>
        <button onClick={()=>{
            setState(state+1)
        }}>+</button>

     <h1>{state}</h1> 

     <button onClick={()=>{
            setState(state-1)}}>-</button>
    </div>
  )
}

export default Inc