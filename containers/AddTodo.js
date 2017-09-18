import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  const mainStyle = {
    background: '#e5f3f2',
    height: '50px'
  }

  const inputStyle = {
    marginRight: '10px',
    marginTop: '10px',
    fontSize: '20px'
  }

  const buttonStyle = {
    fontSize: '20px',
    background: '#5e8480',
    borderStyle: 'none',
    marginTop: '10px',
    color: '#FFF'
  }

  return (
    <div style={mainStyle}>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input style={inputStyle} placeholder="Enter a task" ref={node => {
          input = node
        }} />
        <button style={buttonStyle} type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
