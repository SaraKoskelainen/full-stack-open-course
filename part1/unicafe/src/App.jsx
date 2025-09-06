import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // feedback event handlers
  const handleGoodFeedBack = () => setGood(good + 1);
  const handleNeutralFeedBack = () => setNeutral(neutral + 1);
  const handleBadFeedBack = () => setBad(bad + 1);

  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>{text}</button>
  );

  return (
    <div>
      <h1>Give feedback</h1>

      <Button onClick={handleGoodFeedBack} text="good" />
      <Button onClick={handleNeutralFeedBack} text="neutral" />
      <Button onClick={handleBadFeedBack} text="bad" />

      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
};

export default App;
