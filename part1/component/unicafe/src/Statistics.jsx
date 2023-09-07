import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import StatisticLine from './StatisticLine.jsx'

const Statistics = (props) => {
  /// ...
  return(
    <table>
      <tbody>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.all} />
      <StatisticLine text="average" value={props.avg} />
      <StatisticLine text="positive" value={props.pos} />
      </tbody>
    </table>
  )
}

export default Statistics
