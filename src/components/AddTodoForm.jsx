import React, { useState } from 'react'

export const AddTodoForm = ({addNewTodo}) => {

    const [addToDo, setAddToDo] = useState("");

    const handleTodo = (e) => {
      e.preventDefault()
      addNewTodo(addToDo);
      setAddToDo("");
    }
  return (
    <form className='mt-4' onSubmit={handleTodo} >
        <div className='card card-body m-4 bg-success'>
            <div className='form-group'>
                <label className='text-white m-3 h4'>Ajouter todo</label>
                <input onChange={(e) => {setAddToDo(e.target.value) }} value={addToDo} type="text" className='form-control'/>
                <input type='submit' className='btn btn-danger m-3'/>
            </div>
        </div>
    </form>
  )
}
