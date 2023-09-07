import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  )
}

export default StatisticLine
