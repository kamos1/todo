import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
  <div>
    <li
      onClick={onClick}
      style={{
        fontSize: '1.5em',
        listStyle: 'none',
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
    <button style={{
      fontSize: '20px',
      background: '#5e8480',
      borderStyle: 'none',
      marginTop: '10px',
      color: '#FFF'
    }}>
    Delete Todo</button>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
