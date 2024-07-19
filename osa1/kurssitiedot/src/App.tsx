interface Course {
  name: string
  parts: Part[]
}

interface CourseProps {
  course: Course
}

interface Part {
  name: string
  exercises: number
}

const Header = (props: CourseProps) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props: CourseProps) => {
  return (
    <div>
      {props.course.parts.map((part, index) => (
        <p key={index}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  )
}

const Total = (props: CourseProps) => {
  let total = 0
  props.course.parts.map((part) => (total += part.exercises))

  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  }

  return (
    <div>
      <Header course={course} />

      <Content course={course} />
      {<Total course={course} />}
    </div>
  )
}

export default App
