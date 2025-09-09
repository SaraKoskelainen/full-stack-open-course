const Course = ({ course }) => {
  const total = course.parts.reduce((sum, part) => (sum += part.exercises), 0);
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  );
};

const Header = (props) => <h2>{props.courseName}</h2>;

const Content = (props) => (
  <div>
    {props.parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </div>
);

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
);

const Total = (props) => (
  <p>
    <b> Total of {props.total} exercises</b>
  </p>
);

export default Course;
