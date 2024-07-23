import { useState } from "react"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
      <Button handleClick={() => setGood(good + 1)} text="Good!"></Button>
      <Button
        handleClick={() => setNeutral(neutral + 1)}
        text="Neutral!"
      ></Button>
      <Button handleClick={() => setBad(bad + 1)} text="Bad!"></Button>
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
        <StatisticLine text="Good:" value={props.good} />
        <StatisticLine text="Neutral:" value={props.neutral} />
        <StatisticLine text="Bad:" value={props.bad} />
        <StatisticLine
          text="Total number of reviews:"
          value={props.allReviews}
        />
        <StatisticLine text="Average:" value={props.average} />
        <StatisticLine
          text="Percentage of positive reviews:"
          positivePercent={props.positivePercent}
        />
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

interface ButtonProps {
  handleClick: () => void
  text: string
}

const Button = (props: ButtonProps) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

interface StatisticLineProps {
  text: string
  value?: number
  positivePercent?: string
}

const StatisticLine = (props: StatisticLineProps) => {
  if (!props.positivePercent) {
    return (
      <p>
        {props.text}
        {props.value}
      </p>
    )
  } else {
    return (
      <p>
        {props.text}
        {props.positivePercent}%
      </p>
    )
  }
}

export default App
