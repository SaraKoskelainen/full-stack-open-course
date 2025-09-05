const Header = (props) => {
  return <h1> {props.course} </h1>;
};

const Content = (props) => {
  return (
    <>
      {Object.values(props.parts).map((part, idx) => (
        <p key={idx}>
          {part.partName} {part.exercises}
        </p>
      ))}
    </>
  );
};

const Total = (props) => {
  return <p> Number of exercises {props.total} </p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const parts = {
    part1: { partName: part1, exercises: exercises1 },
    part2: { partName: part2, exercises: exercises2 },
    part3: { partName: part3, exercises: exercises3 },
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
