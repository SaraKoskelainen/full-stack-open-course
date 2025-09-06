import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  // Random selection of anactode
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const [selected, setSelected] = useState(0);

  const handleNext = () => {
    const maxIndex = anecdotes.length - 1;
    setSelected(getRandomInt(maxIndex));
  };

  // Voting of anectodes
  const initialVotes = new Array(anecdotes.length).fill(0);

  const [votes, setVotes] = useState(initialVotes);

  const handleVote = () => {
    let newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);

    // get and set the index of the most voted anectode
    const maxVotes = Math.max(...newVotes);
    const mostVotedIndex = newVotes.indexOf(maxVotes);
    setIndexOfMostVoted(mostVotedIndex);
  };

  // Most voted anectode
  const [indexOfMostVoted, setIndexOfMostVoted] = useState(-1);

  return (
    <div>
      <h1>Anectode of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div> has {votes[selected]} votes</div>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>

      <h1>Anectode with most votes</h1>

      {/* Note: If multiple anecdotes are tied for the first place, only the first of them is showed */}
      {indexOfMostVoted >= 0 ? (
        <div>
          <div> {anecdotes[indexOfMostVoted]}</div>
          <div> has {votes[indexOfMostVoted]} votes</div>
        </div>
      ) : (
        <div>No voted anecdotes</div>
      )}
    </div>
  );
};

export default App;
