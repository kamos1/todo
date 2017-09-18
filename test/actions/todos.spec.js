import expect from 'expect'
import * as actions from '../../actions'
import { v4 } from 'node-uuid'


describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).toInclude({
      type: 'ADD_TODO',
      // id: idNumber,
      text: 'Use Redux'
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: 'TOGGLE_TODO',
      id: 1
    })
  })

  it('deleteTodo should create DELETE_TODO action', () => {
    expect(actions.deleteTodo(1)).toEqual({
      type: 'DELETE_TODO',
      id: 1
    })
  })
})
