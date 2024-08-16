import React, { useState } from 'react'
import Create from './Create.jsx'

const Home = () => {
  const [todos, setTodos] = useState([])
  return (
    <div>
      <h2>Todo List</h2>
      <Create />
      {
        todos.length===0?
        <div><h2>No Todos</h2></div>
        :
        todos.map((todo)=>(
          <div>
            <h3>{todo}</h3>
          </div>
        ))
      }

    </div>
  )
}

export default Home