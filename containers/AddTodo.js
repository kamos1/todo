import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import '../stylesheets/AddToDo.css'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className="main">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input className="input" placeholder="Enter a task" ref={node => {
          input = node
        }} />
        <button className="btn" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
