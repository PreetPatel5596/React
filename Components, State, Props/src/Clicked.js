import React, { useState } from 'react'

function Clicked() {
    let [Clicked,setClicked] = useState(false)
  return (
    <div>
        <h1>{Clicked? "click" : "notclick"}</h1>
        <button onClick={()=>{
            setClicked(!Clicked)
        }} >clicked</button>
    </div>
  )
} 

export default Clicked