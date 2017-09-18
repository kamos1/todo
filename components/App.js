import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const style = {
  textAlign: 'center',
  fontFamily: 'Open Sans',
  display: 'flex',
  flexDirection: 'column'
}

const App = () => (
  <div style={style}>
    <AddTodo />
    <Footer />
    <VisibleTodoList />
  </div>
)

export default App
