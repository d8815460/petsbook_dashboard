import R from 'ramda'

const todo = (state, action) => {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return {
        id: action.id,
      }
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

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return [
        ...state,
      ]
    case 'RECEIVE_DATA':
      const create_arr = (a, b) => {
        a.unshift(b)
        return a
      }

      let todos = R.reduce(
        create_arr,
        [],
        R.values(action.posts)
      )
      return todos
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
