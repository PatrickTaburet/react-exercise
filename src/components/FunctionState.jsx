import React from 'react'
import { useState } from 'react'


function FunctionState() {
    const[counter, setCounter] = useState(0)

  return (
    <div>
        <p className='h3 m-4'>Function state: {counter}</p>
        <button onClick={()=>setCounter(prevCounter=> prevCounter + 1 ) } className="btn btn-danger">Increment</button>
    </div>
  )
}

export default FunctionState