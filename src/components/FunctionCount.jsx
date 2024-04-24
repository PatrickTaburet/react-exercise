import React, { useState, useEffect} from 'react'

function FunctionCount() {
    const [count, setCount] = useState(0)
    const [name, setName]  = useState("")
    useEffect(()=> {
      console.log('modif func')
        setTimeout(()=>{
            document.title = `You clicked ${count} times` 
        },5000)
    }, [])

  const handleChange = (e) => {
      setName(e.target.value)
  }

  return (
    <div>
        <h1>Function counter : {count}</h1>
        <button className="btn btn-danger"onClick={()=> setCount(prev => prev + 1)}>Click Here</button>
        <input className=" m-2" type="text" onChange={handleChange}/>

        <hr />
    </div>
  )
}

export default FunctionCount