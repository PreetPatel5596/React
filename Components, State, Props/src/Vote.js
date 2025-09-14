import React, { useState } from 'react'

function Vote() {
   let  [state,setState]  =  useState()
   let content = ""
    if(state=>18)
    {
        content=
      <h1>You are eligible to vote </h1>   
    } 
    else
     {  
        content=
        <h1>You are not eligible to vote</h1>
     } 
     

  return (
    <div>
      <input type='text'  onChange={(e)=>{
        setState(e.target.value)
      }}></input>
      {content}
    </div>
  )
}

export default Vote