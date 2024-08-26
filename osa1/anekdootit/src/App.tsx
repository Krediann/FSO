import { useState } from "react"

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ]
  const lengthOfAnecdotes = anecdotes.length
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(lengthOfAnecdotes).fill(0))

  const addPoints = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    console.log(points)
  }

  const nextAnecdote = () => {
    if (selected + 1 < lengthOfAnecdotes) {
      setSelected(selected + 1)
    } else {
      setSelected(0)
    }
  }

  return (
    <div>
      {anecdotes[selected]}
      <br />
      <Button handleClick={() => addPoints()} text="Vote!" />
      <Button handleClick={() => nextAnecdote()} text="Next anecdote!" />
      <MostVotedAnecdote
        points={points}
        anecdotes={anecdotes}
        header="Anecdote with most votes!"
      />
    </div>
  )
}

interface ButtonProps {
  text: string
  handleClick: () => void
}

interface MostVotedAnecdoteProps {
  points: number[]
  anecdotes: string[]
  header: string
}

const Button = (props: ButtonProps) => {
  return <button onClick={props.handleClick}> {props.text}</button>
}

const MostVotedAnecdote = (props: MostVotedAnecdoteProps) => {
  const mostVotes = Math.max(...props.points)
  if (mostVotes === 0) {
    return (
      <div>
        <h1>{props.header}</h1>
        <p>No votes has been given!</p>
      </div>
    )
  }

  const mostVotedIndex = props.points.indexOf(mostVotes)
  const mostVoted = props.anecdotes[mostVotedIndex]

  return (
    <div>
      <h1>{props.header}</h1>
      <p>{mostVoted}</p>
    </div>
  )
}
export default App
