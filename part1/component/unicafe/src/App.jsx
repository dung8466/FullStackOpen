import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import Button from './Button.jsx'
import Statistics from './Statistics.jsx'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)
  const [pos, setPos] = useState(0)

  const goodFeedback = () => {
    const updateGood = good + 1
    setGood(updateGood)
    setAll(updateGood + neutral + bad)
    setPos(updateGood / (all + 1) * 100)
    setAvg((updateGood - bad)/(all+1))
  }
  const neutralFeedback = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
    setAll(updateNeutral + good + bad)
    setPos(good / (all + 1) *  100)
    setAvg((good-bad)/(all+1))
  }
  const badFeedback = () => {
    const updateBad = bad + 1
    setBad(updateBad)
    setAll(updateBad + good + neutral)
    setPos(good / (all + 1) *  100)
    setAvg((good-updateBad)/(all+1))
  }
  if (all === 0 && bad === 0 && neutral === 0){
    return(
    <div>
      <h1>give feedback</h1>
      <Button name="good" handleClick={goodFeedback} />
      <Button name="neutral" handleClick={neutralFeedback} />
      <Button name="bad" handleClick={badFeedback} />
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
    )
  }
  else{
  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" handleClick={goodFeedback} />
      <Button name="neutral" handleClick={neutralFeedback} />
      <Button name="bad" handleClick={badFeedback} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} avg={avg}
      pos={pos}/>
    </div>
  )
  }
}

export default App
