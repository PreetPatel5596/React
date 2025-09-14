import React from 'react'

function Display1({ name, age, location }) {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Name:{name}</li>
                    <li className="list-group-item">Age:{age}</li>
                    <li className="list-group-item">Location:{location}</li>
                </ul>
            </div>

        </div>
    )
}

export default Display1