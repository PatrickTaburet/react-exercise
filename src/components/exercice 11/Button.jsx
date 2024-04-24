import React from 'react'

function Button({btnColor, handleClick, children}) {
  return (
        <button className={`btn btn-${btnColor} m-1`} onClick={handleClick}>{children}</button>
  )
}

export default Button