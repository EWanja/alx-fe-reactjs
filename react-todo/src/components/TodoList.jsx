import React, { useState } from 'react'
import AddTodoForm from './AddTodoForm';

function TodoList() {
  const [todos, setTodos] = useState(['Sample todo'])

  const addTodo = (text) => {
    setTodos([...todos, text]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index] = newTodos[index] + ' (done)'
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  };

  return (
    <div>
      <AddTodoForm onAddTodo={addTodo} />
      <ul>
        {todos.map((todo, index) => (
          <li key={index} onClick={() => toggleTodo(index)}>
            {todo} <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
