import React from "react";

const NextButton = ({ dispatch, answer, index, numOfQuestions }) => {
  if (answer === null) return null;
  if (index !== numOfQuestions - 1)
    return (
      <div>
        <button
          onClick={() => dispatch({ type: "NextQuestion" })}
          className="btn btn-ui"
        >
          Next
        </button>
      </div>
    );
  if (index === numOfQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "Finished" })}
      >
        Finish
      </button>
    );
  }
};

export default NextButton;
