import { useState } from "react";

// instead of having 'props', the props that are passed to the component are now directly destructured into the variables
const Hello = ({ name, age }) => {
  // const { name, age } = props; // destructuring props values to variables
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const CounterDisplay = ({ counter }) => <div>{counter}</div>;
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const name = "Peter";
  const age = 10;

  // counter
  // state is in App and passed down to child components bc
  // "One best practice in React is to lift the state up in the component hierarchy. The documentation says:
  // Often, several components need to reflect the same changing data.
  // We recommend lifting the shared state up to their closest common ancestor."
  // (from https://fullstackopen.com/en/part1/component_state_event_handlers)
  const [counter, setCounter] = useState(0);

  // Increase counter every second
  // When the state modifying function setCounter is called, React re-renders the component
  // which means that the function body of the component function gets re-executed
  // setTimeout(() => setCounter(counter + 1), 1000);

  const handleIncreaseByOne = () => setCounter(counter + 1);
  const handleDecreaseByOne = () => setCounter(counter - 1);
  const handleSetToZero = () => setCounter(0);

  // function returning a function
  const sayHello = (who) => () => console.log("Hello ", who);

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <CounterDisplay counter={counter} />
      {/*An event handler is supposed to be either a function (e.g. () => setCounter(0)) or a function reference, like below
      Usually defining event handlers within JSX-templates is not a good idea.*/}
      <Button onClick={handleIncreaseByOne} text="plus" />
      {/*The event handler is is passed to the Button child component via the onClick prop*/}
      <Button onClick={handleSetToZero} text="zero" />
      <Button onClick={handleDecreaseByOne} text="minus" />
      {/*An event handler can also be a function call to a function that RETURNS A FUNCTION */}
      <br></br>
      <Button onClick={sayHello("World")} text="say hello" />
    </div>
  );
};

export default App;
