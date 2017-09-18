// import tweet from '../helpers/tweeet';

// const Twitter = require('twitter');

// const client = new Twitter({
//   consumer_key: process.env.CKEY,
//   consumer_secret: process.env.CSECRET,
//   access_token_key: process.env.AKEY
//   access_token_secret: process.env.ASECRET
// })

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      // tweet.postTweet()
      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

export default todos
