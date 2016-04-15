import React, { PropTypes } from 'react'

const Todo = ({temp, humd, timestamp}) => (
  <li>
    {'temp is ' + temp + ' ' +  'humd is ' + humd + ' ' + 'time stamp is ' + new Date(timestamp).toLocaleString()} 
  </li>
)

export default Todo
