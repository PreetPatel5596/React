import React, { useState } from 'react'

function Login() {
    let [login,setLogin] = useState(true)
  return (
    <div>
  
  <h1>welcome</h1>
  <div>{login? "login" : "logout"}</div>

    {!login?(<button onClick={()=>{
        setLogin(true);
    }}>login</button>) :   ( <button onClick={()=>{
        setLogin(false);
    }}>logout</button>)}
    </div>
    

  )
}

export default Login