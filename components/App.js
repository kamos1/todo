import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const style = {
  textAlign: 'center',
  width: '50%',
  margin: '0 auto',
  fontFamily: 'Open Sans'
}

const App = () => (
  <div style={style}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
