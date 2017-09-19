import React, { PropTypes } from 'react'
import '../stylesheets/Todo.css'

const Todo = ({ onClick, onDelete, completed, text, id }) => (
  <div className="todo">
    <li
      className="todo-text"
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
    <button
    className="todo-btn" 
    onClick={onDelete}>
    Delete Todo</button>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default Todo
