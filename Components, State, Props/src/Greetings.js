import React from 'react'

function Greetings() {
  return (
    <div>
      <Prop name={"Preet"}></Prop>
    </div>
  )
}


function Prop({name})
{
    return(
        <>
    <h1>hello {name}</h1>
        </>
    )
}

export default Greetings