import React, { useState } from 'react'

function Input() {
    let [state,setState] = useState()
  return (
    <div>
        <input type='text' value={state} onChange={(e)=>{
             setState(e.target.value)
        }}></input>
        <h1>{state}</h1>
    </div>
  )
}

export default Input