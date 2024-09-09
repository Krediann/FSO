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

export const Course = (props: CourseProps) => {
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
