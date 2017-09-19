import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import '../stylesheets/App.css'

const App = () => (
  <div className="container">
    <AddTodo />
    <Footer />
    <VisibleTodoList />
  </div>
)

export default App
