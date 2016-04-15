let nextTodoId = 0
import fetch from 'isomorphic-fetch'
import Firebase from 'firebase'
var myfirebase = new Firebase("https://petsbook.firebaseio.com/").child('data_list')

export function fetchData() {
  return function (dispatch) {
    dispatch(request_data())

    myfirebase.limitToLast(10).on("value", (snapshot) => {
      //console.log('snapshot', snapshot.val())
      dispatch(receive_data(snapshot.val()))
    })
    //return fetch('https://petsbook.firebaseio.com/data_list.json')
    //.then(response => response.json())
    //.then(json => 
    //      dispatch(receive_data(json))
    //     )
  }
}

export const request_data = () => {
  return {
    type: "REQUEST_DATA",
  }
}

export const receive_data = (json) => {
  return {
    type: "RECEIVE_DATA",
    posts: json,
    receivedAt: Date.now()
  }
}

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
