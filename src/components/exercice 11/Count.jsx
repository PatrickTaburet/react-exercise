import React from 'react'
import { useReducer } from 'react'

function Count({count, bgColor, increment}) {

    const progress = {width: `${count}%`}

  return (
    <div className='container'>
        <p className='h1'>{count}%</p>
        <div className='progress'>
            <div className={`progress-bar progress-bar-striped bg-${bgColor}`} role="progressbar" style={progress}>
            </div>
        </div>




    </div>
  )
}

export default Count

// const initialState = 0

// const reducer = (count, action) => {
//     switch (action) {
//         case "increment":
//          return count +1;
            
//         case "decrement":
//         return count -1;

//         case "reinitialize":
//         return count = initialState;
//     }
// }


// function Count() {
    
//     const [count, dispatch] = useReducer(reducer, initialState)

//     return (
//         <div className='d-flex justify-content-center flex-column align-items-center'>
//             <div className='m-3 h2 text-center'>Count : {count}</div>
//             <button className='btn btn-primary m-3' onClick={() => dispatch("increment")}>+</button>
//             <button className='btn btn-danger' onClick={() => dispatch("reinitialize")}>0</button>
//             <button className='btn btn-primary m-3' onClick={() => dispatch("decrement")}>-</button>
//         </div>
//     )
// }

// export default Count