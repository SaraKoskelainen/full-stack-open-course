import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);
  const [avg, setAvg] = useState(0);

  // feedback event handlers
  const handleGoodFeedBack = () => {
    const newGood = good + 1;
    setGood(newGood);
    const newAll = newGood + neutral + bad;
    setAll(newAll); // Could also be all + 1. maybe the way used here would be safer if operation would be complex, not just +1 (?) & makes below calculations clean
    setPositivePercentage((newGood / newAll) * 100);
    calculateAndSetAvg(newGood, bad, newAll);
  };
  const handleNeutralFeedBack = () => {
    setNeutral(neutral + 1);
    const newAll = all + 1;
    setAll(newAll);
    setPositivePercentage((good / newAll) * 100);
    calculateAndSetAvg(good, bad, newAll);
  };
  const handleBadFeedBack = () => {
    setBad(bad + 1);
    const newAll = all + 1;
    setAll(newAll);
    setPositivePercentage((good / newAll) * 100);
    calculateAndSetAvg(good, bad + 1, newAll);
  };

  const calculateAndSetAvg = (countGood, countBad, countAll) => {
    // bc the values for feedbacks are 1 (good), 0 (neutral), and -1 (bad), the calculation
    // (countGood*1 + countNeutal*0 + countBad*-1) / countAll
    // can be simplified to what is used below
    const newAvg = (countGood - countBad) / countAll;
    setAvg(newAvg);
  };

  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>{text}</button>
  );

  return (
    <div>
      <h1>Give feedback</h1>

      <Button onClick={handleGoodFeedBack} text="good" />
      <Button onClick={handleNeutralFeedBack} text="neutral" />
      <Button onClick={handleBadFeedBack} text="bad" />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        avg={avg}
        positivePercentage={positivePercentage}
      />
    </div>
  );
};

const Statistics = ({ good, neutral, bad, all, avg, positivePercentage }) => {
  const StatsContent = ({ text, value, unit = "" }) => (
    <p>
      {text} {value} {unit}
    </p>
  );

  return (
    <>
      <h1>Statistics</h1>
      <StatsContent text={"good"} value={good} />
      <StatsContent text={"neutral"} value={neutral} />
      <StatsContent text={"bad"} value={bad} />
      <StatsContent text={"all"} value={all} />
      <StatsContent text={"average"} value={avg} />
      <StatsContent text={"positive"} value={positivePercentage} unit={"%"} />
    </>
  );
};

export default App;
