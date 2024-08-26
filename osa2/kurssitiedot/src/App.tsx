interface Course {
  name: string
  parts: Part[]
  id: number
}

interface CourseProps {
  courses: Course[]
}

interface Part {
  name: string
  exercises: number
  id: number
}

const Header = (props: { course: Course }) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props: { course: Course }) => {
  return (
    <div>
      {props.course.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  )
}

const Total = (props: { course: Course }) => {
  const total = props.course.parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  )

  return (
    <div>
      <b>Number of exercises {total}</b>
    </div>
  )
}

const Course = (props: CourseProps) => {
  return (
    <div>
      {props.courses.map((course) => (
        <div key={course.id}>
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />
        </div>
      ))}
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]

  return (
    <div>
      <Course courses={courses} />
    </div>
  )
}

export default App
