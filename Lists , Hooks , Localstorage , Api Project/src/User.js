import React from 'react'

function User() {
      const users = [
    { id: 1, name: "Preet" },
    { id: 2, name: "Maulik" },
    { id: 3, name: "Shiv" },
    { id: 4, name: "Het" },
  ];

  return ( 
    <div>
        <h1>user</h1>
        <ul>
            {users.map((v,i)=>{
             return   <li key={v.id}>
                    {v.id} - {v.name}
                </li>
            })}
        </ul>
    </div>
  )
}

export default User