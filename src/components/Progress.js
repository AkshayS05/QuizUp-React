import React from "react";

const Progress = ({
  index,
  numOfQuestions,
  points,
  maxPossiblePoints,
  answer,
}) => {
  return (
    <header className="progress">
      {/* here if answer is true then the value will be converted to 1 and will be added to out index, thus making it move. */}
      <progress max={numOfQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/{numOfQuestions}
      </p>
      <p>
        <strong>{points}</strong>/ {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
