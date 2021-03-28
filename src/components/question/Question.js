import React from 'react';
import './Question.css';

const Question = (props) => {
  return (
    <>
      <h1>
        {' '}
        Question {props.step} of {props.total}
      </h1>
      <p>Entertainment: Board Games</p>

      <h3>{props.question}</h3>
    </>
  );
};

export default Question;
