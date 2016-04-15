import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({todos}) => {
  let lastUpdate = new Date(todos[0].timestamp).toLocaleString()

  return(
    <div>
      <h1>最後更新時間{lastUpdate}</h1>
      <ul>
        {todos.map(todo => (
          <Todo
            key={todo.timestamp}
            {...todo}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
