import React from 'react';

function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className='start'>
      <h2>Welcom to The React Quiz</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <bytton
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'start' })}
      >
        Let's Start
      </bytton>
    </div>
  );
}

export default StartScreen;
