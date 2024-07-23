import { useState } from "react"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  const allReviews = () => {
    return good + bad + neutral
  }

  const average = () => {
    return (good - bad) / allReviews()
  }

  const positivePercent = () => {
    const positivePercent = (good / allReviews()) * 100
    return positivePercent.toFixed(1)
  }

  return (
    <div>
      <h1>Give feedback!</h1>
      <button onClick={handleGood}>Good!</button>
      <button onClick={handleNeutral}>Neutral!</button>
      <button onClick={handleBad}>Bad!</button>
      <h2>Statistics!</h2>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        allReviews={allReviews()}
        average={average()}
        positivePercent={positivePercent()}
      />
    </div>
  )
}

interface StatisticsProps {
  good: number
  bad: number
  neutral: number
  allReviews: number
  average: number
  positivePercent: string
}

const Statistics = (props: StatisticsProps) => {
  if (props.allReviews > 0) {
    return (
      <div>
        <p>Good: {props.good}</p>
        <p>Neutral: {props.neutral}</p>
        <p>Bad: {props.bad}</p>
        <p>Total number of reviews: {props.allReviews}</p>
        <p>Average: {props.average}</p>
        <p>Percentage of positive reviews: {props.positivePercent}%</p>
      </div>
    )
  } else {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
}

export default App
