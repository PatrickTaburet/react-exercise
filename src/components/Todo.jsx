import React, { useState } from 'react';
import { AddTodoForm } from './AddTodoForm';
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
  const [todos, setTodos] = useState([
    {id:1, todo : 'Manger des chats'},
    {id:2, todo:'Aller sur la lune'},
    {id:3, todo:'Acheter 100 BTC'}
  ])
  const [warning, setWarning] = useState(false);

  const myTodos = todos.map( todo => {
    return (
      <li className='list-group-item' key={todo.id}>{todo.todo}</li>
    )
  })
  
  const addNewTodo = (newTodo) => {
    const  newId = uuidv4();
    if (newTodo !== ""){
      warning && setWarning(false)
      setTodos([...todos, {
      id: newId,
      todo: newTodo
      }])
    } else {
      setWarning (true);
    }
  }

  const warningMsg =  warning && <div className='alert alert-danger' role="alert">Champ vide, veuillez écrire quelque chose</div>

  return (
    <div>
      <h1>TO DO LIST</h1>
      {warningMsg}
      <p className='h2'>{todos.length} To-Do</p>
      <ul className='list-group'>
        {myTodos}
      </ul>
      <AddTodoForm addNewTodo = {addNewTodo}></AddTodoForm>
    </div>
  )
}

export default Todo